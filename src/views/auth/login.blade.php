@extends('core::_layouts.login')

@section('content')

    {{ Form::open(array('class' => 'form-signin')) }}
        <h1 class="text-center">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-rocket fa-stack-1x fa-inverse"></i>
            </span>
        </h1>

        {{-- Form elements --}}
        {{ Form::text('email', null, array('class' => 'form-control', 'placeholder' => 'E-mail', 'autofocus' => '')) }}
        {{ Form::password('password', array('class' => 'form-control', 'placeholder' => 'Wachtwoord')) }}
        {{ Form::submit('Aanmelden', array('class' => 'btn btn-lg btn-primary btn-block')) }}

        <div id="version-info">
            <small>{{ Config::get('version.codename') }} (v{{ Config::get('version.number') }})</small>
        </div>
    {{ Form::close() }}

    <small id="credit">Photo Credit: <a href="http://www.flickr.com/photos/46776821@N07/5609940697/">GovWin a Deltek Network</a> via <a href="http://compfight.com">Compfight</a> <a href="http://creativecommons.org/licenses/by-nd/2.0/">cc</a></small>
@stop
