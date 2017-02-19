<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNews7 extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_', function($table)
        {
            $table->dropColumn('thumb');
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_', function($table)
        {
            $table->string('thumb', 255);
        });
    }
}
