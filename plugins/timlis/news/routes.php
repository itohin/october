<?php

use Timlis\News\Models\News;

use Timlis\News\Models\Project;

use Timlis\News\Models\Tag;

use Timlis\News\Models\Interest;


Route::get('testell', function(){

	$tags = array(1, 2, 3);

	$posts = Interest::where('category_id', 2)->whereHas('tags', function($q) use ($tags)
	{
	    $q->whereIn('id', $tags);

	})->get();

	return $posts;

});


Route::get('/seed_news', function(){

	$faker = Faker\Factory::create('ru_RU');

		for($i = 0; $i < 30; $i++){

			// $name = $faker->sentence($nbWords = 3, $variableNbWords = true);

			// News::create([

			// 	'title' => $name,

			// 	'slug' => str_slug($name, '-'),

			// 	'anallytics' => $faker->sentence($nbWords = 1, $variableNbWords = true),

			// 	'links' => $faker->sentence($nbWords = 1, $variableNbWords = true),

			// 	'author' => $faker->sentence($nbWords = 1, $variableNbWords = true),

			// 	'category_id' => $faker->numberBetween($min = 1, $max = 10),

			// 	'content' => $faker->paragraph($nbSetences = 53, $variableNbSetences = true)


			// ]);  

			$name = $faker->sentence($nbWords = 3, $variableNbWords = true);

			Project::create([

				'title' => $name,

				'slug' => str_slug($name, '-'),

				'anallytics' => $faker->sentence($nbWords = 1, $variableNbWords = true),

				'links' => $faker->sentence($nbWords = 1, $variableNbWords = true),

				'author' => $faker->sentence($nbWords = 1, $variableNbWords = true),

				'category_id' => $faker->numberBetween($min = 1, $max = 11),

				'content' => $faker->paragraph($nbSetences = 23, $variableNbSetences = true),

			]); 

		}

		return "Projects created!";

});