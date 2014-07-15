<?php namespace Rocket\CommandBus;

interface CommandBus
{
    public function execute($command);
}
