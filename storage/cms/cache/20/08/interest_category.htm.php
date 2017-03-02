<?php 
use Timlis\News\Models\Tag;use Timlis\News\Models\Interest;class Cms58b7be91a5a25451912468_755753409Class extends \Cms\Classes\PageCode
{



public function onStart()
	{
		$this['tags'] = Tag::get();

	}
public function onTest()
  {
      $arr = array();

      $first = post('first');

      if($first != '') $arr[] = $first;

      $second = post('second');

      if($second != '' && $second != $first) $arr[] = $second;

      $third = post('third');

      if($third != '' && $third != $first && $third != $second) $arr[] = $third;

      //var_dump($arr);


      if(!empty($arr)){

        $this['records'] = Interest::get();

      }else{

        return Redirect::refresh();

      }

  }

}
