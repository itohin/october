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

    /**
     * @var string The database table used by the model.
     */
    public $table = 'timlis_news_';

    public $attachMany = ['attachments' => ['System\Models\File']];
    public $belongsTo = ['category' => ['Timlis\News\Models\Category']];
}