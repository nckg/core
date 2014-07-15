<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticlesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        //        -- Create syntax for TABLE 'articles'
        //                             CREATE TABLE `articles` (
        //    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
        //  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
        //  `body` text COLLATE utf8_unicode_ci,
        //  `page_id` int(11) NOT NULL,
        //  `user_id` int(11) NOT NULL,
        //  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
        //  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
        //  `deleted_at` timestamp NULL DEFAULT NULL,
        //  PRIMARY KEY (`id`)
        //) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

        Schema::create('articles', function($table)
        {
            $table->increments('id');
            $table->string('title');
            $table->integer('page_id')->nullable();
            $table->integer('user_id');
            $table->text('body');
            $table->timestamps();
            $table->softDeletes();
        });
    }

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
        Schema::dropIfExists('articles');
	}

}
