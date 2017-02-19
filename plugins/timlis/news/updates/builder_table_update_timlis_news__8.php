<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNews8 extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_', function($table)
        {
            $table->integer('category_id');
            $table->dropColumn('category');
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_', function($table)
        {
            $table->dropColumn('category_id');
            $table->string('category', 255);
        });
    }
}
