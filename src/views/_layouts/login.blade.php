<!doctype html>
<html lang="en">
    <head>
        <!-- Standard Meta -->
        <!--
                           *     .--.
                                / /  `
               +               | |
                      '         \ \__,
                  *          +   '--'  *
                      +   /\
         +              .'  '.   *
                *      /======\      +
                      ;:.  _   ;
                      |:. (_)  |
                      |:.  _   |
            +         |:. (_)  |          *
                      ;:.      ;
                    .' \:.    / `.
                   / .-'':._.'`-. \
                   |/    /||\    \|
                 _..--"""````"""--.._
           _.-'``                    ``'-._
         -'                                '-
        -->
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        <meta name="generator" content="Rocketship CMS (v{{ Config::get('version.number') }})" />

        <title>Rocketship CMS</title>

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="{{{ asset(rocket_path('admin/style.css')) }}}">
    </head>
    <body id="login">
        {{-- Show main content --}}
        <div class="container">
            @yield('content')
        </div>
    </body>
</html>
