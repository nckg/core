<?php namespace Rocket\Events;

interface Listener
{
    public function handle(Event $event);
}
