<?php 
use Timlis\News\Models\Contact;
class Cms58adf39694dcd553047122_1069295903Class extends \Cms\Classes\PageCode
{
	public function onStart()
	{
		$this['record'] = Contact::find(1);

		//dd($this['record']);

		// $longitude = floatval($this['record']->longitude);
		// $latitude = floatval($this['record']->latitude);

	}	
}
