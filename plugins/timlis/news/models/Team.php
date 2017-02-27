<?php namespace Timlis\News\Models;

use Model;

/**
 * Model
 */
class Team extends Model
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
        'name' => 'required',
        'role' => 'required',
        'attachments' => 'required'
    ];

    public $customMessages = [
        'name.required' => 'Введите имя',
        'role.required' => 'Введите должность',
        'attachments.required' => 'Введите должность'
    ];
    /**
     * @var string The database table used by the model.
     */
    public $table = 'timlis_news_team';

    public $attachOne = ['attachments' => ['System\Models\File']];




}