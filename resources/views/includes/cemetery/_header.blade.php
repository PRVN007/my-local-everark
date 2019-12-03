<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php
$favIcon = 'images/fav-ever-old.png';
if(Session::get('arCemetery.szCompanyFavIcon') && trim(Session::get('arCemetery.szCompanyFavIcon')) != '')
{
    if(file_exists(public_path('/company_logos/'.Session::get('arCemetery.szCompanyFavIcon')))){
        $favIcon = "/company_logos/".Session::get('arCemetery.szCompanyFavIcon');
    }
}
?>
<link rel="shortcut icon" href="{{ url($favIcon)}}">
<!-- CSRF Token -->
<meta name="csrf-token" content="{{ csrf_token() }}">


<title>{{ $title or ((Session::get('arCemetery.szCompanyName') && trim(Session::get('arCemetery.szCompanyName')) != '' ? Session::get('arCemetery.szCompanyName'):'EverArk'))}}</title>
<link href="{{ url('theme/assets/global/plugins/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/global/plugins/simple-line-icons/simple-line-icons.min.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/global/plugins/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css" />
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

<?php if(trim($title)=="Cemetery Setting"){?>
<link href="{{ url('theme/assets/pages/css/pricing.min.css') }}" rel="stylesheet" type="text/css" />
<?php 
}?>
<?php if(trim($title)=="Edit Cemetery Preferences" ){?>
<link href="{{ url('theme/assets/css/bootstrap-select.css') }}" rel="stylesheet" type="text/css" />
<?php 
}?>

<link rel="stylesheet" href="https://js.arcgis.com/4.8/esri/css/main.css">
<!--<link rel="stylesheet" href="https://js.arcgis.com/3.27/esri/css/esri.css">-->


<link href="{{ url('theme/assets/css/gdl_custom_style.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/css/gdl_custom_style_2.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/css/cemetery-custom.css') }}?<?php echo time();?>" rel="stylesheet" type="text/css" />
<?php if(trim($title)=="Add Plot" || trim($title)=="Edit Plot" || trim($title)=="Import Plots"){?>
<script src="{{ url('theme/assets/global/plugins/ckeditor/ckeditor.js') }}" type="text/javascript"></script>
<?php 
}?>
<?php if(trim($title)=="Cemetery Preferences" || trim($title)=="Edit Cemetery Preferences"){?>
<script src="{{ url('theme/assets/js/jscolor.js') }}" type="text/javascript"></script>
<?php 
}?>
<?php if(trim($title)=="Plot Images") {?>
<link href="{{ url('theme/assets/pages/css/portfolio.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/global/plugins/fancybox/source/jquery.fancybox.css') }}" rel="stylesheet" type="text/css" />

 <?php 
}?>

<link href="{{ url('theme/assets/global/plugins/bootstrap-toastr/toastr.min.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ url('theme/assets/css/cropper.css') }}?<?php echo time();?>" rel="stylesheet" type="text/css" />


<?php if(trim($title) =="Burial Grounds") {?>
<link rel="stylesheet" href="{{ url('theme/assets/css/autosearch.css') }}?<?php echo time(); ?>">
<?php }?>

<script src="https://js.stripe.com/v3/"></script>

<script type="text/javascript">
    var __BASE_URL__ = '<?php echo url('/');?>';
    var __BASE_URL_CEMETERY__ = '<?php echo url('/cemetery');?>';
    var AUTO_SAVE = false;
    var key = '<?php echo env("STRIPE_KEY");?>';
    var stripe = Stripe('<?php echo env("STRIPE_KEY");?>');
</script>

<script src="{{ url('theme/assets/js/cropper.js')}}?<?php echo time();?>" rel="jquery" type="text/javascript"></script>

<script type="text/javascript">
    $(window).on('pageshow', function(){
        jQuery(document).ready(function($) { 

            $("#bulkActions").val(0);
            $('input:checkbox').removeAttr('checked');
            $("#uniform-bulkActionPlots>span").removeClass("checked");
            $('#cemetery-full-page-loader').hide();
        });
    });
</script>
<script src="{{ url('theme/assets/js/custom-chart.js')}}?<?php echo time();?>" rel="jquery" type="text/javascript"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>