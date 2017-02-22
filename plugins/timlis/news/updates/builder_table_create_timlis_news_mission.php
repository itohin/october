<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateTimlisNewsMission extends Migration
{
    public function up()
    {
        Schema::create('timlis_news_mission', function($table)
        {
            $table->engine = 'InnoDB';
            $table->string('title');
            $table->text('content');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('timlis_news_mission');
    }
}
