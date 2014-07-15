@extends('core::_layouts/default')

@section('content')
    <div id="flash-message"></div>
    <div id="page-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-12" id="main-region"></div>
            </div>
        </div>
    </div>
@stop

@section('footer.js')
    <script type="text/javascript" src="{{ asset(rocket_path('admin/js/app.js?v=' . time())) }}"></script>
    <script type="text/javascript">
        $( document ).ready(function() {
            window.Config = {
                date_format: 'YYYY-MM-DD HH:mm:ss'
            };

            Rocket.start({
                user: {{ $user }},
                api_url: "{{ route('api.index') }}",
                settings: {}
            });
        });
        window.Lang = {};
    </script>
@stop