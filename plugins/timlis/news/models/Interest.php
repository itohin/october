<?php namespace Timlis\News\Models;

use Model;

/**
 * Model
 */
class Interest extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Validation
     */
    public $rules = [
        'title' => 'required',
        'content' => 'required',
        'tags' => 'array|max:4'
    ];

    public $customMessages = [
        'title.required' => 'Введите заголовок',
        'content.required' => 'Введите текст',
        'tags.max' => 'Допустимое количество тегов - не более 4-х'
    ];

    /**
     * @var string The database table used by the model.
     */
    public $table = 'timlis_news_interest';

    public $attachMany = ['attachments' => ['System\Models\File']];
    public $belongsTo = ['category' => ['Timlis\News\Models\Category']];
    public $belongsToMany = ['tags' => ['Timlis\News\Models\Tag', 'table'=>'timlis_news_interest_tags', 'order'=>'title']];
}