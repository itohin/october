<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateTimlisNewsMenuCategories extends Migration
{
    public function up()
    {
        Schema::create('timlis_news_menu_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('menu_id');
            $table->integer('category_id');
            $table->primary(['menu_id','category_id']);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('timlis_news_menu_categories');
    }
}
