<?php 
use Timlis\News\Models\News;class Cms58abecbd61cf5620155035_2851274579Class extends \Cms\Classes\PageCode
{


	
public function onStart()
	{
		$this['records'] = News::home();

		$this['news'] = News::news();

		$this['years'] = News::years();

	}

}
