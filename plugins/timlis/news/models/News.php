<?php namespace Timlis\News\Models;

use Model;

/**
 * Model
 */
class News extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Validation
     */
    public $rules = [ 
        'title' => 'required',
        'content' => 'required'
    ];

    public $customMessages = [
        'title.required' => 'Введите заголовок',
        'content.required' => 'Введите текст новости'
    ];

    protected $fillable = ['title', 'slug', 'anallytics', 'links', 'author', 'category_id', 'content'];

    public function beforeSave()
    {
        $this->anallytics = str_replace(',', ' /', $this->anallytics);
    }

    public function arrLinks()
    {
        $arr = explode(' ', $this->links);

        return $arr;
    }


    public function nextSlug()
    {
        $next = '';
        $query = static::where('id', '<' , $this->id)
                    ->orderBy('created_at','desc')
                    ->first();
        if($query)
            $next = $query->slug;            

        return $next;

    }

    public function prevSlug()
    {
        $prev = '';
        $query = static::where('id', '>' , $this->id)
                    ->orderBy('created_at','asc')
                    ->first();
        if($query)
            $prev = $query->slug;             

            return $prev;
           
    }

    public function scopeHome($query)
    {
        return $query->orderBy('id','desc')->paginate(4);
    }


    public function scopeNews($query)
    {
        return $query->selectRaw('id, title, slug, content, created_at, year(created_at) year, month(created_at) month, day(created_at) day')->orderBy('id', 'desc')->get();
    }

    public function scopeYears($query)
    {
        return $query->selectRaw('year(created_at) year')->groupBy('year')->orderBy('year', 'desc')->get()->toArray();
    }






    /**
     * @var string The database table used by the model.
     */
    public $table = 'timlis_news_';

    public $attachOne = ['attachments' => ['System\Models\File']];
    public $belongsTo = ['category' => ['Timlis\News\Models\Category']];
}