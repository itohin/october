<?php 
use Timlis\News\Models\News;class Cms58ad6a39f12d0126081821_576020603Class extends \Cms\Classes\PageCode
{


	
public function onStart()
	{
		$this['records'] = News::home();

		$this['news'] = News::news();

		$this['years'] = News::years();

	}

}
