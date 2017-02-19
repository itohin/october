<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNews2 extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_', function($table)
        {
            $table->string('thumb', 255)->nullable()->change();
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_', function($table)
        {
            $table->string('thumb', 255)->nullable(false)->change();
        });
    }
}
