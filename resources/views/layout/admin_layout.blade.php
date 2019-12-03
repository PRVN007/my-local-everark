<!DOCTYPE html>
<html lang="{{ app()->getLocale()}}">
<head>
@include('includes.admin._head')
</head>
<body class="page-header-fixed page-sidebar-closed-hide-logo page-content-white admin-bg">
    <div class="page-header navbar navbar-fixed-top">
        @include('includes.admin._header')
        @include('includes.admin._model')
    </div>
    <div class="clearfix"> </div>
    <div class="page-container">
        <div class="page-sidebar-wrapper">
            @include('includes.admin._sidebar')
        </div>
        <div class="page-content-wrapper everark-container">
            @yield('content')
        </div>
    </div>
    <div class="page-footer">
        @include('includes.admin._footer')
        @include('includes.admin._footerscript')
    </div>
</body>
</html>
