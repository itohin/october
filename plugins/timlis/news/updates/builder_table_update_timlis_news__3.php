<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNews3 extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_', function($table)
        {
            $table->string('author');
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_', function($table)
        {
            $table->dropColumn('author');
        });
    }
}
