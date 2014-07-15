<?php

use Rocket\Support\Treeview\Branch;
use Rocket\Support\Treeview\Leaf;

class LeafTest extends TestCase {
    private $object;

    public function setUp()
    {
        parent::setUp();
        $this->object = new Leaf('Foo', Branch::make(array(
            new Leaf('Lorum'),
            new Leaf('Ipsum'),
            new Leaf('Dolor'),
            new Leaf('Sit'),
        )));
    }

    public function testCanFlattenSelfAndBranch()
    {
        $this->assertCount(5, $this->object->flatten());
    }

    public function testHasChildrenReturnsTrue()
    {
        $this->assertTrue($this->object->hasChildren());
    }

    public function testHasChildrenReturnsFalse()
    {
        $this->assertFalse(Leaf::make('Foo')->hasChildren());
    }
}