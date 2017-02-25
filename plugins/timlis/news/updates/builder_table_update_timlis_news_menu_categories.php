<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNewsMenuCategories extends Migration
{
    public function up()
    {
        Schema::rename('timlis_news_menus_categories', 'timlis_news_menu_categories');
    }
    
    public function down()
    {
        Schema::rename('timlis_news_menu_categories', 'timlis_news_menus_categories');
    }
}
