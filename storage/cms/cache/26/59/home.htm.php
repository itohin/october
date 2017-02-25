<?php 
use Timlis\News\Models\News;class Cms58b16e7b4ccc9702246424_318367117Class extends \Cms\Classes\PageCode
{


	
public function onStart()
	{
		$this['records'] = News::home();

		$this['news'] = News::news();

		$this['years'] = News::years();

	}

}
