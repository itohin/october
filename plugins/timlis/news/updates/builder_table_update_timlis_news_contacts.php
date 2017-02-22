<?php namespace Timlis\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTimlisNewsContacts extends Migration
{
    public function up()
    {
        Schema::table('timlis_news_contacts', function($table)
        {
            $table->string('latitude');
            $table->string('longitude');
        });
    }
    
    public function down()
    {
        Schema::table('timlis_news_contacts', function($table)
        {
            $table->dropColumn('latitude');
            $table->dropColumn('longitude');
        });
    }
}
