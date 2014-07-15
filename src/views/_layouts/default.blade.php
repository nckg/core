<!DOCTYPE html>
<html>
    <head>
        <title></title>

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
        <meta name="env" content="{{ App::environment() }}">
        <meta name="token" content="{{ Session::token() }}">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        <meta name="generator" content="Rocketship CMS (v{{ Config::get('version.number') }})" />

        <title>Rocketship CMS</title>

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="{{{ asset(rocket_path('admin/style.css')) }}}">
    </head>
    <body>
        <div id="header-region"></div>
        @yield('content')

        <!-- Latest compiled and minified JavaScript -->
        <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
        <script type="text/javascript" src="{{ asset(rocket_path('admin/js/structure.js')) }}"></script>
        @yield('footer.js')

    </body>
</html>