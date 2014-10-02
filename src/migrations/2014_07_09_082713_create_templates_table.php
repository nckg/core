<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTemplatesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        //        -- Create syntax for TABLE 'templates'
        //                             CREATE TABLE `templates` (
        //    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
        //  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
        //  `template` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
        //  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
        //  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
        //  PRIMARY KEY (`id`)
        //) ENGINE=InnoDB AUTO_I
        Schema::create('templates', function($table)
        {
            $table->increments('id');
            $table->string('name');
            $table->string('template');
            $table->boolean('editable')->default(true);
            $table->boolean('default')->default(false);
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
		Schema::dropIfExists('templates');
	}

}
