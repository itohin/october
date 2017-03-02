<?php 
use Timlis\News\Models\Tag;class Cms58b7176e14b27979066561_3172867093Class extends \Cms\Classes\PageCode
{

public function onStart()
	{
		$this['tags'] = Tag::get();

	}
}
