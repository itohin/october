<?php namespace Timlis\News\Models;

use Model;

/**
 * Model
 */
class Mission extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;

    /*
     * Validation
     */
    public $rules = [ 
        'title' => 'required',
        'content' => 'required',
        'attachments' => 'required',
    ];

    public $customMessages = [
        'title.required' => 'Введите заголовок',
        'content.required' => 'Введите текст',
        'attachments.required' => 'Загрузите изображение'
    ];

    /**
     * @var string The database table used by the model.
     */
    public $table = 'timlis_news_mission';

    public $attachOne = ['attachments' => ['System\Models\File']];
}