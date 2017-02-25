<?php 
use Timlis\News\Models\Team;use Timlis\News\Models\Vacancy;class Cms58b16eb834452837115498_1001379970Class extends \Cms\Classes\PageCode
{


  
  
public function onStart()
  {
    $this['records'] = Team::get();

    $this['vacancys'] = Vacancy::get();

    // $str = 'Hello world!';

    // $this['htm'] = sprintf("<h1>%s</h1>",$str);

    // dd($htm);

  }


}
