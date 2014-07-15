<?php

use Way\Tests\Factory;
use Way\Tests\Should;

class BlockFactoryTest extends TestCase {
    private $object;

    public function testCanCreateBlocks()
    {
        $json = '{
                    "data": [
                        {
                            "type": "text",
                            "data": {
                                "text": "Hello, I\'m **Sir Trevor**.\nCreate some new blocks and see _what I can do_.\n"
                            }
                        }
                    ]
                }';

        $this->object = new \Rocket\Pages\Blocks\Factory();

        $result = $this->object->make(json_decode($json, true));

        Should::beInstanceOf('Illuminate\Support\Collection', $result);
        Should::beInstanceOf('\Rocket\Pages\Blocks\Text', $result->first());
        Should::eq("<p>Hello, I'm <strong>Sir Trevor</strong>.\nCreate some new blocks and see <em>what I can do</em>.</p>\n", $result->first()->make());
    }
}