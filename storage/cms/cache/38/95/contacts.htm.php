<?php 
use Timlis\News\Models\Contact;
class Cms58b16e9e4c9fb719739176_2685675175Class extends \Cms\Classes\PageCode
{
	public function onStart()
	{
		$this['record'] = Contact::find(1);


	}	
}
