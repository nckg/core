<?php

use Rocket\Support\Treeview\Branch;
use Rocket\Support\Treeview\Leaf;
use Way\Tests\Factory;

class TreeviewTest extends TestCase {
    private $object;

    public function setUp()
    {
        parent::setUp();
        $this->object = new \Rocket\Support\Treeview\Treeview;
    }

    private function createPage($attributes = array()) {
        $page = Factory::attributesFor('\Rocket\Pages\Page', $attributes);

        return new \Rocket\Pages\Page($page);
    }

    private function createFakeTree()
    {
        $branch = new Branch;
        $branch->push(Leaf::make($this->createPage(array(
            'id' => 1,
            'title'   => 'Parent Page',
            'slug'    => 'parent-page',
            'body'    => '#Hello World',
            'user_id' => 1,
            'page_id' => null,
            'page_type_id' => 1,
            'data' => serialize(array('home' => true)),
        )), Branch::make(array(
                Leaf::make($this->createPage(array(
                    'id' => 2,
                    'title'   => 'Child Page',
                    'slug'    => 'child-page',
                    'body'    => '#Hello World',
                    'user_id' => 1,
                    'page_id' => 1,
                    'page_type_id' => 1,
                    'data' => '',
                ))),
            ))
        ));

        $tree = new \Rocket\Support\Treeview\Treeview;
        $tree->push($branch);

        return $tree;
    }

    public function testTreeCanPushBranch()
    {
        $this->object->push(new Branch);

        $this->assertCount(1, $this->object->all());
    }

    public function testCanFlattenTree()
    {
        $this->assertCount(2, $this->createFakeTree()->collapse());
    }

    public function testCanListTree()
    {
        $expected = array(
            1 => 'Parent Page',
            2 => 'Child Page',
        );

        $this->assertEquals($expected, $this->createFakeTree()->lists('title', 'id'));
    }

    public function testCanIndentList()
    {
        $expected = array(
            1 => 'Parent Page',
            2 => '&nbsp;&nbsp;&nbsp;Child Page',
        );

        // $this->assertEquals($expected, $this->createFakeTree()->indentedLists('title', 'id'));
    }
}