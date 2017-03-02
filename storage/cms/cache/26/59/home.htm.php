<?php 
use Timlis\News\Models\News;class Cms58b716a45159e951834925_2440014621Class extends \Cms\Classes\PageCode
{


	
public function onStart()
	{
		$this['records'] = News::home();

		$this['news'] = News::news();

		$this['years'] = News::years();

	}

}
