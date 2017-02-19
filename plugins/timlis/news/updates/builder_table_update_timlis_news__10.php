<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNews10 extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_', function($table)
        {
            $table->string('title', 255)->nullable(false)->change();
            $table->text('content')->nullable(false)->change();
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_', function($table)
        {
            $table->string('title', 255)->nullable()->change();
            $table->text('content')->nullable()->change();
        });
    }
}
