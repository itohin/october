<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateTimlisNewsVacancy extends Migration
{
    public function up()
    {
        Schema::create('timlis_news_vacancy', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('title');
            $table->text('wages');
            $table->text('duty');
            $table->text('requirements');
            $table->text('offer');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('timlis_news_vacancy');
    }
}
