<?php namespace Timlis\News\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

class Mission extends Controller
{
    public $implement = ['Backend\Behaviors\FormController'];
    
    public $formConfig = 'config_form.yaml';

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Timlis.News', 'main-menu-item', 'side-menu-item6');
    }
}