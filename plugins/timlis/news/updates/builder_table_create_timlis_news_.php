<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateTimlisNews extends Migration
{
    public function up()
    {
        Schema::create('timlis_news_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('title');
            $table->string('thumb');
            $table->string('anallytics');
            $table->string('links');
            $table->string('category');
            $table->text('content');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('timlis_news_');
    }
}
