<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNewsTags extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_tags', function($table)
        {
            $table->string('slug', 255)->nullable()->change();
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_tags', function($table)
        {
            $table->string('slug', 255)->nullable(false)->change();
        });
    }
}
