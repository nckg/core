<?php

/**
 * Wardrobe Path
 *
 * Helper that allows you to easily get a theme path inside the views.
 * Example: @extends(theme_path('layout'))
 *
 * @param string $file - The file to load
 * @return string
 */
function rocket_path($file = null)
{
    return asset('/packages/rocket/core/'.$file);
}