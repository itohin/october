<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNewsMenu2 extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_menu', function($table)
        {
            $table->integer('sort_order')->default(0)->change();
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_menu', function($table)
        {
            $table->integer('sort_order')->default(null)->change();
        });
    }
}
