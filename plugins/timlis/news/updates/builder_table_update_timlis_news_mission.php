<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNewsMission extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_mission', function($table)
        {
            $table->integer('id');
            $table->primary(['id']);
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_mission', function($table)
        {
            $table->dropPrimary(['id']);
            $table->dropColumn('id');
        });
    }
}
