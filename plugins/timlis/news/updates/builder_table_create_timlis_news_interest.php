<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateTimlisNewsInterest extends Migration
{
    public function up()
    {
        Schema::create('timlis_news_interest', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('title');
            $table->string('author');
            $table->string('anallytics');
            $table->text('content');
            $table->boolean('publish');
            $table->integer('category_id');
            $table->string('links');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('timlis_news_interest');
    }
}
