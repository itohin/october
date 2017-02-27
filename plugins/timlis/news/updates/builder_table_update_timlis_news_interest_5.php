<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNewsInterest5 extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_interest', function($table)
        {
            $table->integer('category_id')->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_interest', function($table)
        {
            $table->integer('category_id')->default(0)->change();
        });
    }
}
