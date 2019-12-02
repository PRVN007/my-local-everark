<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
@include('includes.cemetery._header')
</head>
<body class="page-header-fixed page-sidebar-closed-hide-logo page-content-white admin-bg">
    <div class="page-header navbar navbar-fixed-top">
        @include('includes.cemetery.head')
    </div>
    <div class="clearfix"> </div>
    <div class="page-container">
        <div class="cemetery-loader" id="cemetery-full-page-loader">
            <div class="loader-content">
                <img src="/images/everark-loader.png" alt="Loading">
                <br>Please Wait...
            </div>
            
        </div>
        <div class="page-sidebar-wrapper">
            @include('includes.cemetery._sidebar')
        </div>
        <div class="page-content-wrapper everark-container">
            @yield('content')
        </div>
    </div>
    <div class="page-footer">
        @include('includes.cemetery._footer')
        @include('includes.cemetery._footerScript')
    </div>
</body>
</html>