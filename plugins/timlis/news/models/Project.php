<?php namespace Timlis\News\Models;

use Model;

/**
 * Model
 */
class Project extends Model
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
        'content.required' => 'Введите текст'
    ];

    protected $fillable = ['title', 'slug', 'anallytics', 'links', 'author', 'category_id', 'content'];

    /**
     * @var string The database table used by the model.
     */
    public $table = 'timlis_news_projects';

    public $attachOne = ['pdf' => ['System\Models\File'], 'attachments' => ['System\Models\File']];
    public $belongsTo = ['category' => ['Timlis\News\Models\Category']];

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
}