<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNewsMenu4 extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_menu', function($table)
        {
            $table->string('slug');
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_menu', function($table)
        {
            $table->dropColumn('slug');
        });
    }
}
