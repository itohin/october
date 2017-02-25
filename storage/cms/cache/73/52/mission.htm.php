<?php 
use Timlis\News\Models\Mission;class Cms58b16ec6ee4c3453888865_312345528Class extends \Cms\Classes\PageCode
{


	
public function onStart()
	{
		$this['record'] = Mission::find(1);

	}	

}
