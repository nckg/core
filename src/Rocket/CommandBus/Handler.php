<?php namespace Rocket\CommandBus;
interface Handler
{
    public function handle($command);
}
