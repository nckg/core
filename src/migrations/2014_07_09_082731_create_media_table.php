<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMediaTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		//CREATE TABLE `media` (
        //        `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
        //  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
        //  `public_path` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
        //  `real_path` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
        //  `mime` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
        //  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
        //  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
        //  PRIMARY KEY (`id`)
        //) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
        Schema::create('media', function($table)
        {
            $table->increments('id');
            $table->string('name');
            $table->string('public_path');
            $table->string('real_path');
            $table->string('mime');
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
        Schema::dropIfExists('media');
	}

}
