<?php //namespace Timlis\News\Updates;

// use Timlis\News\Models\News;

// use October\Rain\Database\Updates\Seeder;

// use Faker;

// class SeedAllTables extends Seeder{


// 	public function run()
// 	{
// 		$faker = Faker\Factory::create('ru_RU');

// 		for($i = 0; $i < 100; $i++){

// 			$name = $faker->sentence($nbWords = 3, $variableNbWords = true);

// 			News::create([

// 				'title' => $name,

// 				'slug' => str_slug($name, '-'),

// 				'anallytics' => $faker->sentence($nbWords = 1, $variableNbWords = true),

// 				'links' => $faker->sentence($nbWords = 1, $variableNbWords = true),

// 				'author' => $faker->sentence($nbWords = 1, $variableNbWords = true),

// 				'category_id' => $faker->randomDigit,

// 				'content' => $faker->paragraph($nbSetences = 23, $variableNbSetences = true),

// 			]);

// 		}

		
// 	}

// }