<?php namespace Timlis\News\Models;

use Model;

/**
 * Model
 */
class Tag extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;

    protected $fillable = ['title'];

    /*
     * Validation
     */
    public $rules = [
    ];

    public function beforeSave()
    {
        $this->slug = str_slug($this->title, '-');
    }

    /**
     * @var string The database table used by the model.
     */
    public $table = 'timlis_news_tags';
}