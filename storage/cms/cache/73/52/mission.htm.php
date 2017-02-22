<?php 
use Timlis\News\Models\Mission;class Cms58ad6a41332a2459970595_2941321226Class extends \Cms\Classes\PageCode
{


	
public function onStart()
	{
		$this['record'] = Mission::find(1);

	}	

}
