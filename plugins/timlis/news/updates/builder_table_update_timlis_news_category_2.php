<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNewsCategory2 extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_category', function($table)
        {
            $table->string('slug')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_category', function($table)
        {
            $table->dropColumn('slug');
        });
    }
}
