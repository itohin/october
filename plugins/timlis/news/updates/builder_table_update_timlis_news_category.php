<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNewsCategory extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_category', function($table)
        {
            $table->text('description');
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_category', function($table)
        {
            $table->dropColumn('description');
        });
    }
}
