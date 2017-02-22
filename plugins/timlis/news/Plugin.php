<?php namespace Timlis\News;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
    }

    public function registerSettings()
    {
    }

    public function boot()
    {
    	//\Event::listen('backend.menu.extendItems', function($manager) {


    		//$itemKey = $manager->listMainMenuItems();


    		//dd($itemKey);

    		// $itemKey['OCTOBER.CMS.CMS']->order = 9000;
    		// $itemKey['OCTOBER.BACKEND.DASHBOARD']->order = 3000;
    		// $itemKey['TIMLIS.NEWS.MAIN-MENU-ITEM']->order = 1;
		    // $manager->removeMainMenuItem('October.Backend', 'dashboard');

		//});
    }
}
