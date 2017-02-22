<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateTimlisNewsTeam extends Migration
{
    public function up()
    {
        Schema::create('timlis_news_team', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name');
            $table->string('role');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('timlis_news_team');
    }
}
