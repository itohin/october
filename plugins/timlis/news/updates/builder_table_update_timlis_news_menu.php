<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNewsMenu extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_menu', function($table)
        {
            $table->integer('sort_order');
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_menu', function($table)
        {
            $table->dropColumn('sort_order');
        });
    }
}
