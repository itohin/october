<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNewsMenuCategory4 extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_menu_category', function($table)
        {
            $table->dropPrimary(['menu_id','news_category_id']);
            $table->renameColumn('news_category_id', 'category_id');
            $table->primary(['menu_id','category_id']);
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_menu_category', function($table)
        {
            $table->dropPrimary(['menu_id','category_id']);
            $table->renameColumn('category_id', 'news_category_id');
            $table->primary(['menu_id','news_category_id']);
        });
    }
}
