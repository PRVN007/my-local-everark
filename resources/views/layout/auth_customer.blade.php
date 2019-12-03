<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <!-- CSRF Token -->
    <?php

    $favIcon = 'images/fav-ever.png';

    if(Session::get('arFrontSiteCemetery.szCompanyFavIcon') && trim(Session::get('arFrontSiteCemetery.szCompanyFavIcon')) != '')
    {
        if(file_exists(public_path('/company_logos/'.Session::get('arFrontSiteCemetery.szCompanyFavIcon')))){
            $favIcon = "/company_logos/".Session::get('arFrontSiteCemetery.szCompanyFavIcon');
        }
    }
    ?>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{ url($favIcon)}}">
    <title>{{!empty($title) ? $title : 'Everark' }}</title>
    <link href="{{ URL::asset('theme/assets/global/plugins/font-awesome/css/font-awesome.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{ URL::asset('theme/assets/global/plugins/simple-line-icons/simple-line-icons.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{ URL::asset('theme/assets/global/plugins/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{ URL::asset('theme/assets/global/plugins/uniform/css/uniform.default.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{ URL::asset('theme/assets/global/plugins/morris/morris.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{ URL::asset('theme/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{ URL::asset('theme/assets/global/plugins/select2/css/select2.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{ URL::asset('theme/assets/global/plugins/select2/css/select2-bootstrap.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{ URL::asset('theme/assets/global/css/components.min.css')}}" rel="stylesheet" id="style_components" type="text/css" />
    <link href="{{ URL::asset('theme/assets/global/css/plugins.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{ URL::asset('theme/assets/pages/css/login.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{ URL::asset('theme/assets/css/gdl_custom_style.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{ url('theme/assets/css/cemetery-custom.css') }}?<?php echo time();?>" rel="stylesheet" type="text/css" />
    <link href="{{ url('theme/assets/global/plugins/bootstrap-toastr/toastr.min.css') }}" rel="stylesheet" type="text/css" />
    <script src="{{ URL::asset('theme/assets/js/jquery-3.1.0.min.js')}}" rel="jquery" type="text/javascript"></script>
    <script type="text/javascript">
        var __BASE_URL__ = '<?php echo url('/');?>';
        var __BASE_URL_CEMETERY__ = '<?php echo url('/cemetery');?>';
        var AUTO_SAVE = false;
    </script>
</head>
<body class="login">
    <section id="content">
      @yield('content')
    </section>
    <!-- BEGIN: PAGE SCRIPTS -->
    <script src="{{ url('theme/assets/global/plugins/bootstrap-toastr/toastr.min.js')}}" type="text/javascript"></script>
    <script src="{{ url('theme/assets/pages/scripts/ui-toastr.min.js')}}" type="text/javascript"></script>
    <script src="{{ url('theme/assets/js/custom.js')}}" type="text/javascript"></script>

    <script src="{{ URL::asset('theme/assets/js/jquery.form.js')}}" rel="jquery" type="text/javascript"></script>
    <script src="{{ URL::asset('theme/assets/js/validate.js')}}" rel="jquery" type="text/javascript"></script>
    <script type="text/javascript">
            validate_form_fields();
    </script>
    <script src="{{ URL::asset('theme/assets/global/plugins/bootstrap/js/bootstrap.min.js')}}" type="text/javascript"></script>
</body>
</html>