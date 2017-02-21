<?php 
use Timlis\News\Models\News;class Cms58abd6546d8d9014615294_3198133952Class extends \Cms\Classes\PageCode
{


	
public function onStart()
	{
		$this['records'] = News::home();

		$this['news'] = News::news();

		$this['years'] = News::years();

	}

}
