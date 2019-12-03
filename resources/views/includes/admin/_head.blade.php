<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="{{ url('images/fav-ever-old.png')}}">
<!-- CSRF Token -->
<meta name="csrf-token" content="{{ csrf_token() }}">
<title>{{(!empty($title) ? $title : '')}}</title>
<link href="{{ url('theme/assets/global/plugins/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/global/plugins/simple-line-icons/simple-line-icons.min.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/global/plugins/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/global/plugins/bootstrap-toastr/toastr.min.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/global/plugins/uniform/css/uniform.default.css')}}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/pages/css/profile.min.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/global/css/components.min.css') }}" rel="stylesheet" id="style_components" type="text/css" />
<link href="{{ url('theme/assets/global/css/plugins.min.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/layouts/layout/css/layout.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/layouts/layout/css/themes/darkblue.min.css') }}" rel="stylesheet" type="text/css" id="style_color" />
<link href="{{ url('theme/assets/layouts/layout/css/custom.min.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/css/uploady.css') }}" rel="stylesheet" type="text/css" />
<script src="{{ URL::asset('theme/assets/js/jquery-1.10.2.js')}}" rel="jquery" type="text/javascript"></script>
<link href="{{ url('theme/assets/css/component.css') }}" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="https://js.arcgis.com/4.8/esri/css/main.css">
<link href="{{ url('theme/assets/css/gdl_custom_style.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/css/gdl_custom_style_2.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/css/cemetery-custom.css') }}?<?php echo time();?>" rel="stylesheet" type="text/css" />

