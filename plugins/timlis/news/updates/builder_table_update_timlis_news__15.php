<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNews15 extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_', function($table)
        {
            $table->integer('category_id')->nullable()->change();
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_', function($table)
        {
            $table->integer('category_id')->nullable(false)->change();
        });
    }
}
