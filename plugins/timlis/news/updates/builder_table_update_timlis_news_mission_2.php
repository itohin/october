<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNewsMission2 extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_mission', function($table)
        {
            $table->integer('id')->default(1)->change();
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_mission', function($table)
        {
            $table->integer('id')->default(null)->change();
        });
    }
}
