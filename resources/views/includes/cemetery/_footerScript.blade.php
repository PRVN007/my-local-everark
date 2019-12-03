
<script src="{{ URL::asset('theme/assets/js/custom-file-input.js')}}" rel="jquery" type="text/javascript"></script>

<?php if(trim($title) =="Burial Grounds") {?>
<script src="{{ url('theme/assets/js/typeahead.bundle.js')}}?<?php echo time(); ?>"></script>
<script src="{{ url('theme/assets/js/handlebars.js')}}?<?php echo time(); ?>"></script>
<?php }?>
<?php if(trim($title) =="Plots Map View" || trim($title) == "Plots Orders") {?>
<script src="https://js.arcgis.com/4.8/"></script>
<!--<script src="https://js.arcgis.com/3.27/"></script>-->
<?php }?>
<script src="{{ url('theme/assets/js/validate.js')}}?<?php echo time();?>" rel="jquery" type="text/javascript"></script>
<script src="{{ url('theme/assets/js/custom.js')}}?<?php echo time();?>" rel="jquery" type="text/javascript"></script>
<script src="{{ url('theme/assets/js/cemetery-custom.js')}}?<?php echo time();?>" rel="jquery" type="text/javascript"></script>

<script type="text/javascript">
    validate_form_fields();
</script>
<script src="{{ url('theme/assets/global/plugins/bootstrap/js/bootstrap.min.js')}}" type="text/javascript"></script>
<?php if(trim($title)!="Plots Map View" && trim($title) != "Plots Orders") {?>
    <script src="{{ url('theme/assets/global/plugins/select2/select2.min.js') }}"></script>
    <script src="{{ url('theme/assets/global/plugins/js.cookie.min.js')}}" type="text/javascript"></script>
 <?php 
}?>

<script src="{{ url('theme/assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/global/plugins/jquery.blockui.min.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/global/plugins/uniform/jquery.uniform.min.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/global/scripts/app.min.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/pages/scripts/ui-buttons.min.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/layouts/layout/scripts/layout.min.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/layouts/layout/scripts/demo.min.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/layouts/global/scripts/quick-sidebar.min.js')}}" type="text/javascript"></script>

<script src="{{ url('theme/assets/js/bootstrap-datepicker.js')}}" rel="jquery" type="text/javascript"></script>
<?php if(trim($title)!="Plots Map View" && trim($title) != "Plots Orders") {?>
<script src="{{ url('theme/assets/js/uploady.min.js')}}" rel="jquery" type="text/javascript"></script>
<script src="{{ url('theme/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/js/ajax_pagination_sorting.js')}}" rel="jquery" type="text/javascript"></script>
<?php
}?>

<?php if(trim($title)=="Plot Images") {?>
<!--<script src="{{ url('theme/assets/global/plugins/jquery.min.js')}}" type="text/javascript"></script>-->
<script src="{{ url('theme/assets/global/plugins/jquery-mixitup/jquery.mixitup.min.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/global/plugins/jquery-migrate.min.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/global/plugins/fancybox/source/jquery.fancybox.pack.js')}}" type="text/javascript"></script>

<script src="{{ url('theme/assets/global/scripts/metronic.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/layouts/layout/scripts/layout.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/layouts/layout/scripts/quick-sidebar.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/layouts/layout/scripts/demo.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/pages/scripts/portfolio.js')}}"></script>
<script>
jQuery(document).ready(function() {    
    Metronic.init(); // init metronic core components
    Layout.init(); // init current layout
    QuickSidebar.init(); // init quick sidebar
    Demo.init(); // init demo features
    Portfolio.init();
});
</script>

<?php 
}?>

<script type="text/javascript">
    $(function () {
        $('.datePicker').datepicker({
                format: 'mm/dd/yyyy',
                autoclose: true,
                endDate: new Date()
        });
    });
</script>


<?php if( trim($title)!= "Plots Map View" && trim($title) != "Plots Orders") {?>
<script src="{{ url('theme/assets/global/plugins/bootstrap-toastr/toastr.min.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/pages/scripts/ui-toastr.min.js')}}" type="text/javascript"></script>
<?php }?>

<?php if(trim($title)=="Edit Cemetery Preferences" ){?>
<script src="{{ url('theme/assets/js/bootstrap-select.min.js')}}?<?php echo time();?>" type="text/javascript"></script>
<?php 
}?>