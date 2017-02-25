<?php 
use Timlis\News\Models\Menu;
use Timlis\News\Models\Category;
class Cms58b190c043b3c469566799_3428816043Class extends \Cms\Classes\PartialCode
{
    public function onStart()
  {
    $this['records'] = Menu::get();
    $this['categories'] = Category::get();

  }
}
