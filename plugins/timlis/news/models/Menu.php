<?php namespace Timlis\News\Models;

use Model;

/**
 * Model
 */
class Menu extends Model
{
    use \October\Rain\Database\Traits\Validation;
    use \October\Rain\Database\Traits\Sortable;
    
    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;

    /*
     * Validation
     */
    public $rules = [
    ];


    public function beforeSave()
    {
        $this->sort_order = $this->id;

        $this->slug = str_slug($this->title, '-');
    }

    /**
     * @var string The database table used by the model.
     */
    public $table = 'timlis_news_menu';

    public $belongsToMany = ['category' => ['Timlis\News\Models\Category', 'table'=>'timlis_news_menu_category', 'order'=>'title']];

}