<!--<script src="{{ url('theme/assets/js/jquery.form.js')}}" rel="jquery" type="text/javascript"></script>-->
<script src="{{ url('theme/assets/js/custom.js')}}?<?php echo time();?>" rel="jquery" type="text/javascript"></script>
<script src="{{ url('theme/assets/js/front_custom.js')}}?<?php echo time();?>" rel="jquery" type="text/javascript"></script>
<script src="{{ url('theme/assets/js/validate.js')}}?<?php echo time();?>" rel="jquery" type="text/javascript"></script>
<script type="text/javascript">
    validate_form_fields();
</script>
<script src="{{ url('theme/assets/global/plugins/bootstrap/js/bootstrap.min.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/global/plugins/bootstrap-toastr/toastr.min.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/pages/scripts/ui-toastr.min.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/global/plugins/js.cookie.min.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/js/bootstrap-datepicker.js')}}" rel="jquery" type="text/javascript"></script>
<script src="{{ url('theme/assets/js/uploady.min.js')}}" rel="jquery" type="text/javascript"></script>

<?php if($title == 'Edit Family Member' || $title == 'Add Family Member'){?>

<script type="text/javascript">
    $(function () {
        $('.datePicker').datepicker({
                format: 'mm/dd/yyyy',
                autoclose: true,
                endDate: new Date()
        });
    });
   
    $('.datePicker').datepicker({
  //datepicker methods and settings here
    }).on('select changeDate', function () {
        $(this).focus();    
    });
       
    var settings = {
        url: "<?php echo url('/'); ?>/uploadFamilyMemberImage",
        method: "POST",
        allowedTypes:"jpg,jpeg,png",
        fileName: "FamilyMemberImage",
        multiple: false,
        onSuccess:function(files,data)
        {
            data = JSON.parse(data);
            $("#uploadedFile").attr('src','');
            $("#uploadedFamilyImage").attr('src','<?php echo url('/FamilyMembers_Pic'); ?>/'+data.FamilyMemberImageName);
            $("#uploadedImg").show();
            $("#removePic").removeClass('hide');
            $("#removePic").show();
            $(".ajax-upload-dragdrop").hide();
            $(".ajax-file-upload-container").hide();
            $(".ajax-file-upload-statusbar").html('');
            $("#szImageNewName").val(data.FamilyMemberImageName);

        }
};
$("#fileuploader").uploadFile(settings);

   
</script>


<?php } elseif($title == 'Manage Legacy Photos') { ?>
<script type="text/javascript">

    var settings = {
        url: "<?php echo url('/'); ?>/cust/uploadedProfileImage",
        method: "POST",
        allowedTypes:"jpg,jpeg,png",
        fileName: "profileImage",
        multiple: false,
        onSuccess:function(files,data)
        {
            data = JSON.parse(data);  
            $("#uploadedFile").attr('src','');
            $("#uploadedFile").attr('src','<?php echo url('/customers_images'); ?>/'+data.profileImageName);
            $("#uploadedImg").show();
            $("#uploadedImg").removeClass('hide');
            $("#status").show();
            $("#status").removeClass('hide');
            $(".ajax-upload-dragdrop").hide();
            $(".ajax-file-upload-container").hide();
            $(".ajax-file-upload-statusbar").html('');
            $("#szImageNewName").val(data.profileImageName);

        }
};
$("#fileuploader").uploadFile(settings);
</script>
<?php } else { ?>

<script type="text/javascript">

    $(function () {
        $('.datePicker').datepicker({
                format: 'mm/dd/yyyy',
                autoclose: true,
                endDate: new Date()
        });
    });
    var settings = {
        url: "<?php echo url('/'); ?>/cust/uploadedProfileImage",
        method: "POST",
        allowedTypes:"jpg,jpeg,png",
        fileName: "profileImage",
        multiple: false,
        onSuccess:function(files,data)
        {
            data = JSON.parse(data);  
            $("#uploadedFile").attr('src','');
            $("#profile_image").attr('src','<?php echo url('/customers_images'); ?>/'+data.profileImageName);
            $("#removePic").removeClass('hide');
            $("#removePic").show();
            $(".ajax-upload-dragdrop").hide();
            $(".ajax-file-upload-container").hide();
            $(".ajax-file-upload-statusbar").html('');
            $("#szProfileImage").val(data.profileImageName);

        }
};
$("#fileuploader").uploadFile(settings);
</script>
<?php } ?>


<script src="{{ url('theme/assets/global/plugins/cubeportfolio/js/jquery.cubeportfolio.min.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/global/scripts/app.min.js')}}" type="text/javascript"></script>
<script src="{{ url('theme/assets/pages/scripts/portfolio-1.min.js')}}" type="text/javascript"></script>
<script>
    $(document).ready(function(){
        if($(".video-container").length){
            $(".video-container").attr('style','height:350px;');
        }
    });
</script>
