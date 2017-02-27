<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableDeleteTimlisNews2 extends Migration
{
    public function up()
    {
        Schema::dropIfExists('timlis_news_');
    }
    
    public function down()
    {
        Schema::create('timlis_news_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('title', 255);
            $table->string('anallytics', 255);
            $table->string('links', 255);
            $table->text('content');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->string('author', 255);
            $table->boolean('publish')->default(1);
            $table->integer('category_id')->nullable();
            $table->string('slug', 255)->nullable();
        });
    }
}
