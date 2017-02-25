<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateTimlisNewsMenu extends Migration
{
    public function up()
    {
        Schema::create('timlis_news_menu', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('title');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('timlis_news_menu');
    }
}
