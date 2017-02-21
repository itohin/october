<?php 
use Timlis\News\Models\News;class Cms58abd59b9ea62357189272_2654950202Class extends \Cms\Classes\PageCode
{


	
public function onStart()
	{
		$this['records'] = News::home();

		$this['news'] = News::news();

		$this['years'] = News::years();

	}

}
