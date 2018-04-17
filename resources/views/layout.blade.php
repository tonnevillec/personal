<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>{{ config('app.name', 'Cyril Tonneville') }}</title>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Font Awesome -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.10/js/all.js" integrity="sha384-slN8GvtUJGnv6ca26v8EzVaR9DC58QEwsIk9q1QXdCU8Yu8ck/tL/5szYlBbqmS+" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

    @yield('app_css')

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    @yield('body')

    <script src="{{ mix('/js/manifest.js') }}"></script>
    <script src="{{ mix('/js/vendor.js') }}"></script>
    <script src="{{ mix('/js/app.js') }}"></script>
    <script src="{{ asset('/js/components/wow.js') }}"></script>
    <script>
    $(function () {
        $(window).on('load', function () {
            /* WOW Scroll Spy
            ========================================================*/
            var wow = new WOW({
                //disabled for mobile
                mobile: false
            });

            wow.init();
        });

        $('[data-toggle="tooltip"]').tooltip({
            html: true,
            placement: "top"
        });

        $('[data-toggle="collapse"]').on('click', function() {
            var $this = $(this);
            var target = $this.data('target');

            if ($(target).css('display') == 'none') {
                $this.find('i').addClass('icon-arrow-down').removeClass('icon-arrow-right');
            } else {
                $this.find('i').addClass('icon-arrow-right').removeClass('icon-arrow-down');
            }
        });
    });
    </script>

    @yield('app_js')
</body>
</html>