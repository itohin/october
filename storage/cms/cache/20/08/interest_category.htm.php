<?php 
use Timlis\News\Models\Tag;use Timlis\News\Models\Interest;class Cms58b7e440ec7ac355249026_3960062469Class extends \Cms\Classes\PageCode
{



public function onStart()
	{
		$this['tags'] = Tag::get();

	}
public function onTest()
  {
      $tags = array();

      $category = post('category');

      $first = post('first');

      if($first != '') $tags[] = $first;

      $second = post('second');

      if($second != '' && $second != $first) $tags[] = $second;

      $third = post('third');

      if($third != '' && $third != $first && $third != $second) $tags[] = $third;


      if(!empty($tags)){

        $this['records'] = Interest::where('category_id', $category)->whereHas('tags', function($q) use ($tags)
        {
            $q->whereIn('id', $tags);

        })->get();


      }else{

        return Redirect::refresh();

      }

  }

}
