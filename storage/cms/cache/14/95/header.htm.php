<?php 
use Timlis\News\Models\Menu;
use Timlis\News\Models\Category;
class Cms58b71767798b4797087516_2832356396Class extends \Cms\Classes\PartialCode
{
    public function onStart()
  {
    $this['records'] = Menu::get();
    $this['categories'] = Category::get();

  }
}
