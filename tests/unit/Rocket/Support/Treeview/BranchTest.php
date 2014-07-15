<?php

use Rocket\Support\Treeview\Branch;
use Rocket\Support\Treeview\Leaf;
use Rocket\Pages\Page;

class BranchTest extends TestCase {
    private $object;

    public function setUp()
    {
        parent::setUp();
        \Eloquent::unguard();
        // create object
        $this->object = new \Rocket\Support\Treeview\Branch;
    }

    public function testCanPushLeafs()
    {
        $this->object->push(new \Rocket\Support\Treeview\Leaf);
        $this->assertCount(1, $this->object->all());
    }

    public function testCanFlattenBranch()
    {
        $branch = Branch::make(array(
            new Leaf('Lorum', Branch::make(array(new Leaf('Batman')))),
            new Leaf('Ipsum'),
            new Leaf('Dolor'),
            new Leaf('Sit'),
        ));

        $this->assertCount(5, $branch->flatten());
    }

    public function testCanIndentList()
    {
        $branch = new Branch;
        $branch->push(Leaf::make(new Page(array(
            'id' => 1,
            'title'   => 'Parent Page',
            'slug'    => 'parent-page',
            'body'    => '#Hello World',
            'user_id' => 1,
            'page_id' => null,
            'page_type_id' => 1,
            'data' => serialize(array('home' => true)),
        )), Branch::make(array(
                Leaf::make(new Page(array(
                    'id' => 2,
                    'title'   => 'Child Page',
                    'slug'    => 'child-page',
                    'body'    => '#Hello World',
                    'user_id' => 1,
                    'page_id' => 1,
                    'page_type_id' => 1,
                ))),
            ))
        ));

        $expected = array(
            1 => 'Parent Page',
            2 => '&nbsp;&nbsp;&nbsp;Child Page',
        );

        $this->assertEquals($expected, $branch->indentedLists('title', 'id'));
    }

    public function testCanIndentListWithMaxLevel()
    {
        $branch = new Branch;
        $branch->push(Leaf::make(new Page(array(
            'id' => 1,
            'title'   => 'Parent Page',
            'slug'    => 'parent-page',
            'body'    => '#Hello World',
            'user_id' => 1,
            'page_id' => null,
            'page_type_id' => 1,
            'data' => serialize(array('home' => true)),
        )), Branch::make(array(
                Leaf::make(new Page(array(
                    'id' => 2,
                    'title'   => 'Child Page',
                    'slug'    => 'child-page',
                    'body'    => '#Hello World',
                    'user_id' => 1,
                    'page_id' => 1,
                    'page_type_id' => 1,
                ))),
            ))
        ));

        $expected = array(
            1 => 'Parent Page',
        );

        $this->assertEquals($expected, $branch->indentedLists('title', 'id', 1));
    }
}