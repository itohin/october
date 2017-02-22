<?php namespace Timlis\News\Models;

use Model;

/**
 * Model
 */
class Category extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Validation
     */
    public $rules = [
        'title' => 'required'
    ];

    public $customMessages = [
        'title.required' => 'Введите заголовок'
    ];

    /**
     * @var string The database table used by the model.
     */
    public $table = 'timlis_news_category';
    public $hasMany = ['category' => ['Timlis\News\Models\News', 'Timlis\News\Models\Project']];
}