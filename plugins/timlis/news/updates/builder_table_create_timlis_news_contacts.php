<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateTimlisNewsContacts extends Migration
{
    public function up()
    {
        Schema::create('timlis_news_contacts', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('id')->default(1);
            $table->string('address');
            $table->string('phone');
            $table->string('mail');
            $table->primary(['id']);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('timlis_news_contacts');
    }
}
