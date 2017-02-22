<?php 
use Timlis\News\Models\News;class Cms58ad074478fce365747300_221177328Class extends \Cms\Classes\PageCode
{


	
public function onStart()
	{
		$this['records'] = News::home();

		$this['news'] = News::news();

		$this['years'] = News::years();

	}

}
