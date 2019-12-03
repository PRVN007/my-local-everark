<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
@include('includes.cemetery._header')
</head>
<body class="page-header-fixed page-sidebar-closed-hide-logo page-content-white admin-bg">
    <div class="page-header navbar navbar-fixed-top">
        <?php 
            $isDisable = '';
            $isSubscritionAlertMessage = session()->get('isSubscriptionEnd');
            if($isSubscritionAlertMessage)
            {
                $isDisable = 'cmeteryDisabledOption';
            }
        ?>
        @include('includes.cemetery._head')
    </div>
    <div class="clearfix"> </div>
    <div class="page-container">
        <div class="cemetery-loader" id="cemetery-full-page-loader">
            <div class="loader-content">
                <img src="/images/everark-loader.png" alt="Loading">
                <br>Please Wait...
            </div>
        </div>
        <?php 
        $isSubscritionAlertMessage = session()->get('error_message');?>
        <?php if($isSubscritionAlertMessage) { ?>
            <div class="alert alert-warning trail-error-message">
                <p><?php  echo $isSubscritionAlertMessage; ?>.</p>
                <a href="{{url('/cemetery/setting?subcription=1')}}" class="btn alert-danger pull-right">Click to Subscribe</a>
            </div>
        <?php } ?>
        <div class="page-sidebar-wrapper">
            @include('includes.cemetery._sidebar')
        </div>
        <div class="page-content-wrapper everark-container">
            @yield('content')
        </div>
    </div>
    <div class="page-footer">
        @include('includes.cemetery._footer')
        @include('includes.cemetery._footerscript')
    </div>
</body>
</html>