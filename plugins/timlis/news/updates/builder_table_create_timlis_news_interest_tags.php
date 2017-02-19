<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateTimlisNewsInterestTags extends Migration
{
    public function up()
    {
        Schema::create('timlis_news_interest_tags', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('interest_id');
            $table->integer('tag_id');
            $table->primary(['interest_id','tag_id']);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('timlis_news_interest_tags');
    }
}
