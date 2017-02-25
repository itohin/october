<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNewsMenu3 extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_menu', function($table)
        {
            $table->integer('sort_order')->nullable()->change();
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_menu', function($table)
        {
            $table->integer('sort_order')->nullable(false)->change();
        });
    }
}
