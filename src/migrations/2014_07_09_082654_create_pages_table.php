<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePagesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
//        -- Create syntax for TABLE 'pages'
//                             CREATE TABLE `pages` (
//    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
//  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
//  `page_id` int(11) DEFAULT NULL,
//  `template_id` int(11) NOT NULL,
//  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
//  `path` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
//  `body` text COLLATE utf8_unicode_ci,
//  `user_id` int(11) NOT NULL,
//  `data` text COLLATE utf8_unicode_ci,
//  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
//  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
//  `deleted_at` timestamp NULL DEFAULT NULL,
//  PRIMARY KEY (`id`)
//) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

        Schema::create('pages', function($table)
        {
            $table->increments('id');
            $table->string('title');
            $table->integer('page_id')->nullable();
            $table->integer('template_id');
            $table->integer('user_id');
            $table->string('slug');
            $table->string('path');
            $table->text('body');
            $table->string('data');
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
        Schema::dropIfExists('pages');
	}

}
