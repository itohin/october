<?php 
use Timlis\News\Models\Team;use Timlis\News\Models\Vacancy;class Cms58b7beba4aee1261804875_1247297475Class extends \Cms\Classes\PageCode
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
