<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNewsInterest extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_interest', function($table)
        {
            $table->increments('id')->unsigned(false)->change();
            $table->boolean('publish')->default(1)->change();
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_interest', function($table)
        {
            $table->increments('id')->unsigned()->change();
            $table->boolean('publish')->default(null)->change();
        });
    }
}
