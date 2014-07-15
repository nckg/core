<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Carbon\Carbon;

class CreateTables extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('title');
            $table->text('body')->nullable();
            $table->integer('page_id');
            $table->integer('user_id');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('pages', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('title');
            $table->integer('page_id')->nullable();
            $table->integer('template_id');
            $table->string('slug');
            $table->string('path');
            $table->text('body')->nullable();
            $table->integer('user_id');
            $table->text('data')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('templates', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('name');
            $table->string('template');
            $table->timestamps();
        });

        Schema::create('media', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('name');
            $table->string('public_path');
            $table->string('real_path');
            $table->string('mime');
            $table->timestamps();
        });

//        \Sentry::getUserProvider()->create(array(
//            'email'       => 'admin@admin.com',
//            'password'    => "admin",
//            'first_name'  => 'John',
//            'last_name'   => 'McClane',
//            'activated'   => 1,
//        ));
//
//        \Sentry::getGroupProvider()->create(array(
//            'name'        => 'Admin',
//            'permissions' => array('admin' => 1),
//        ));
//
//        // Assign user permissions
//        $adminUser  = \Sentry::getUserProvider()->findByLogin('admin@admin.com');
//        $adminGroup = \Sentry::getGroupProvider()->findByName('Admin');
//        $adminUser->addGroup($adminGroup);

        $now = Carbon::now();

        // load page types
        DB::table('templates')->insert(array(
            'id' => 1,
            'name' => 'Home',
            'template' => 'site::index',
            'created_at' => $now,
            'updated_at' => $now,
        ));

        DB::table('templates')->insert(array(
            'id' => 2,
            'name' => 'Pagina',
            'template' => 'site::page',
            'created_at' => $now,
            'updated_at' => $now,
        ));

        DB::table('templates')->insert(array(
            'id' => 3,
            'name' => 'Blog',
            'template' => 'site::articles',
            'created_at' => $now,
            'updated_at' => $now,
        ));

        DB::table('templates')->insert(array(
            'id' => 4,
            'name' => 'Blog - Item',
            'template' => 'site::articles',
            'created_at' => $now,
            'updated_at' => $now,
        ));

        DB::table('templates')->insert(array(
            'id' => 5,
            'name' => 'Losse pagina',
            'template' => 'site::page',
            'created_at' => $now,
            'updated_at' => $now,
        ));



        // Create pages
        DB::table('pages')->insert(array(
            'id'      => 1,
            'title'   => 'Home',
            'slug'    => '',
            'path'    => '',
            'body'    => file_get_contents(realpath(__DIR__) . '/json/home.json'),
            'user_id' => 1,
            'page_id' => null,
            'template_id' => 1,
            'data' => '{ home: true }',
            'created_at' => $now,
            'updated_at' => $now,
        ));

        DB::table('pages')->insert(array(
            'id'      => 2,
            'title'   => 'Page',
            'slug'    => 'page',
            'path'    => 'page',
            'body'    => file_get_contents(realpath(__DIR__) . '/json/praktisch.json'),
            'user_id' => 1,
            'page_id' => 1,
            'template_id' => 2,
            'created_at' => $now,
            'updated_at' => $now,
        ));

        DB::table('pages')->insert(array(
            'id'      => 3,
            'title'   => 'Subpage',
            'slug'    => 'subpage',
            'path'    => 'page/subpage',
            'body'    => file_get_contents(realpath(__DIR__) . '/json/praktisch.json'),
            'user_id' => 1,
            'page_id' => 2,
            'template_id' => 2,
            'created_at' => $now,
            'updated_at' => $now,
        ));

        DB::table('pages')->insert(array(
            'id'      => 4,
            'title'   => 'Blog',
            'slug'    => 'blog',
            'path'    => 'blog',
            'body'    => '',
            'user_id' => 1,
            'page_id' => 1,
            'template_id' => 3,
            'created_at' => $now,
            'updated_at' => $now,
        ));

        DB::table('pages')->insert(array(
            'id'      => 5,
            'title'   => 'Blog Item 1',
            'slug'    => 'blog-item-1',
            'path'    => 'blog/blog-item-1',
            'body' => '{"data": [{"type": "blog", "data": {"type": "detail", "id": 1}}]}',
            'user_id' => 1,
            'page_id' => 4,
            'template_id' => 4,
            'created_at' => $now,
            'updated_at' => $now,
        ));

        DB::table('pages')->insert(array(
            'id'      => 6,
            'title'   => 'Blog Item 2',
            'slug'    => 'blog-item-2',
            'path'    => 'blog/blog-item-2',
            'body' => '{"data": [{"type": "blog", "data": {"type": "single", "id": 2} } ] }',
            'user_id' => 1,
            'page_id' => 4,
            'template_id' => 4,
            'created_at' => $now,
            'updated_at' => $now,
        ));

    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('articles');
        Schema::drop('pages');
        Schema::drop('templates');
        Schema::drop('media');
    }

}
