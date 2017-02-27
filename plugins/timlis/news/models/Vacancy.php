<?php namespace Timlis\News\Models;

use Model;

/**
 * Model
 */
class Vacancy extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Validation
     */
    public $rules = [
    ];

    /**
     * @var string The database table used by the model.
     */
    public $table = 'timlis_news_vacancy';

    // public function beforeSave()
    // {
    //     $arr = explode('/r/n', $this->duty);

    //     $str = '';

    //     foreach($arr as $item){

    //         $str .= sprintf("<p>%s</p>",$str);
    //     }

    //     $this->duty = $str;
    // }
}