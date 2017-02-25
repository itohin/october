<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNewsCategoryMenu extends Migration
{
    public function up()
    {
        Schema::rename('timlis_news_menu_category', 'timlis_news_category_menu');
    }
    
    public function down()
    {
        Schema::rename('timlis_news_category_menu', 'timlis_news_menu_category');
    }
}
