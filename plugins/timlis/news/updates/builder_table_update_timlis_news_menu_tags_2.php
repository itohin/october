<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNewsMenuTags2 extends Migration
{
    public function up()
    {
        Schema::rename('timlis_news_menu_category', 'timlis_news_menu_tags');
        Schema::table('timlis_news_menu_tags', function($table)
        {
            $table->dropPrimary(['menu_id','category_id']);
            $table->renameColumn('category_id', 'tag_id');
            $table->primary(['menu_id','tag_id']);
        });
    }
    
    public function down()
    {
        Schema::rename('timlis_news_menu_tags', 'timlis_news_menu_category');
        Schema::table('timlis_news_menu_category', function($table)
        {
            $table->dropPrimary(['menu_id','tag_id']);
            $table->renameColumn('tag_id', 'category_id');
            $table->primary(['menu_id','category_id']);
        });
    }
}
