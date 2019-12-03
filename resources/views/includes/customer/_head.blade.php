<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<?php
$favIcon = 'images/fav-ever.png';
if(Session::get('arFrontSiteCemetery.szCompanyFavIcon') && trim(Session::get('arFrontSiteCemetery.szCompanyFavIcon')) != '')
{
    if(file_exists(public_path('/company_logos/'.Session::get('arFrontSiteCemetery.szCompanyFavIcon')))){
        $favIcon = "/company_logos/".Session::get('arFrontSiteCemetery.szCompanyFavIcon');
    }
}
?>
<!-- CSRF Token -->
<meta name="csrf-token" content="{{ csrf_token() }}">
<link rel="shortcut icon" href="{{ url($favIcon)}}">
<title>{{ $title or 'EverArk' }}</title>
<link href="{{ url('theme/assets/global/plugins/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/global/plugins/bootstrap-toastr/toastr.min.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/global/plugins/cubeportfolio/css/cubeportfolio.css')}}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/pages/css/portfolio.min.css')}}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/pages/css/blog.min.css') }}"  rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/layouts/layout/css/custom.min.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/css/uploady.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/css/gdl_custom_style.css') }}?<?php echo time();?>" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/css/gdl_custom_style_2.css') }}?<?php echo time();?>" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/css/style.css') }}?<?php echo time();?>" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/css/responsive.css') }}?<?php echo time();?>" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/css/cemetery-custom.css') }}?<?php echo time();?>" rel="stylesheet" type="text/css" />

<link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet"> 
<script src="https://use.fontawesome.com/3d20f94950.js"></script>
<script src="{{ url('theme/assets/js/jquery-1.10.2.js')}}" rel="jquery" type="text/javascript"></script>
<script src="{{ url('theme/assets/global/plugins/ckeditor/ckeditor.js') }}" type="text/javascript"></script>

<?php if($title == 'Add Notice' || $title == 'Edit Notice' ) {?>
<link href="{{ url('theme/assets/global/plugins/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/global/plugins/simple-line-icons/simple-line-icons.min.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/global/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css') }}" rel="stylesheet" type="text/css" />

<script src="{{ url('theme/assets/global/plugins/jquery.min.js') }}" type="text/javascript"></script>
<script src="{{ url('theme/assets/global/plugins/bootstrap/js/bootstrap.min.js') }}" type="text/javascript"></script>
<script src="{{ url('theme/assets/global/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js') }}" type="text/javascript"></script>
<script src="{{ url('theme/assets/global/scripts/app.min.js') }}" type="text/javascript"></script>
<script src="{{ url('theme/assets/pages/scripts/components-date-time-pickers.min.js') }}" type="text/javascript"></script>

<?php }?>
<link href="{{ url('theme/assets/pages/css/login.min.css') }}?<?php echo time();?>" rel="stylesheet" type="text/css" />
<script src="https://js.stripe.com/v3/"></script>
<script type="text/javascript">
    var __BASE_URL__ = '<?php echo url('/');?>';
    var __CUSTOMER_BASE_URL__ = '<?php echo url('/cust');?>';
    var AUTO_SAVE = false;
    var stripe = Stripe('<?php echo Session::get('arFrontSiteCemetery.szStripePublic');?>');
</script>

