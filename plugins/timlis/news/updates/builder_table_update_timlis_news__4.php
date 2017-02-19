<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNews4 extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_', function($table)
        {
            $table->boolean('publish')->default(0);
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_', function($table)
        {
            $table->dropColumn('publish');
        });
    }
}
