
$(document).ready(function () {

    $('#place-order-button').click(function () {
        placeOrder();
    });
    
    $('.check_menu_hover').hover(function () {
        showHideNavMenu();
    });
    $('.check_menu_hover').click(function () {
        showHideNavMenu();
    });
});

function showHideNavMenu()
{
    if($("#hover_login_menu").hasClass('show'))
    {
        $("#hover_login_menu").addClass('hide');
        $("#hover_login_menu").removeClass('show');
        
    }
    else
    {
        $("#hover_login_menu").addClass('show');
        $("#hover_login_menu").removeClass('hide');
    }
}
function activateLoader()
{
    $('#full-page-loader').height($(window).height());
    $('#full-page-loader').width($(window).width());
    $('#full-page-loader').show();
}

function deactivateLoader()
{
    $('#full-page-loader').hide();
}

function showToasterMessage(szTitle, szMessage, szType, customTimeOut)
{ 
    var shortCutFunction = szType;
    var msg = szMessage;
    var title = szTitle || '';

    var showDuration = 1000;
    var hideDuration = 1000;
    if (customTimeOut) {
        var timeOut = customTimeOut;
    } else {
        timeOut = 5000;
    }

    var extendedTimeOut = 1000;
    var showEasing = 'swing';
    var hideEasing = 'linear';
    var showMethod = 'fadeIn';
    var hideMethod = 'fadeOut';

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "positionClass": "toast-top-right",
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    toastr.options.showDuration = showDuration;

    toastr.options.hideDuration = hideDuration;

    toastr.options.timeOut = timeOut;

    toastr.options.extendedTimeOut = extendedTimeOut;

    toastr.options.showEasing = showEasing;

    toastr.options.hideEasing = hideEasing;

    toastr.options.showMethod = showMethod;

    toastr.options.hideMethod = hideMethod;

    if (!msg) {
        msg = getMessage();
    }

    var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
    $toastlast = $toast;

    $('#clearlasttoast').click(function () {
        toastr.clear($toastlast);
    });
}
function clearToast()
{
    toastr.clear();
}
function getPaginationData(page)
{
    
    $('#cemetery-full-page-loader').show();
    if ($('#sortValue').length)
        var sortValue = jQuery('#sortValue').val();
    else
        sortValue = '';

    if ($('#sortBy').length)
        var sortBy = jQuery('#sortBy').val();
    else
        sortValue = '';

    if ($('#searchForm').length)
        var searchAry = jQuery('#searchForm').serialize();
    else
        searchAry = [];

    getAjaxData(page, sortBy, sortValue, searchAry);
}


function sortListingData(sortBy)
{
     $('#cemetery-full-page-loader').hide();
     var page = jQuery('#page').val();
        var old_sortValue = jQuery('#sortValue').val();
        var old_sortBy = jQuery('#sortBy').val();

        if ($('#searchForm').length)
            var searchAry = jQuery('#searchForm').serialize();
        else
            searchAry = [];



        var sortValue = "";

        if (sortBy == old_sortBy)
        {
            if (old_sortValue == 'ASC')
            {
                sortValue = 'DESC';
            } else
            {
                sortValue = 'ASC';
            }
        } else
        {
            sortValue = 'ASC';
        }

        getAjaxData(page, sortBy, sortValue, searchAry);

}


function getAjaxData(page, sortBy, sortValue, searchAry)
{
    if ($('#groundFilter').length)
        var groundFilter = $("#groundFilter").val();
    else
        groundFilter = '';

    if ($('#regionFilter').length)
        var regionFilter = $("#regionFilter").val();
    else
        regionFilter = '';

    $.ajax(
            {
                url: '?page=' + page + "&sortBy=" + sortBy + "&sortValue=" + sortValue + "&" + searchAry + "&groundFilter=" + groundFilter + "&regionFilter=" + regionFilter,
                type: "get",
                datatype: "html",
                beforeSend: function ()
                {
                    activateLoader();
                }
            })
            .done(function (data)
            {
                deactivateLoader();
//        console.log(data);

                $("#table_content").empty().html(data);

                if ($.trim(sortBy) !== '')
                {
                    if ($.trim(sortValue) == 'ASC')
                    {
                        $("#" + sortBy + "_sort").attr('class', 'sorting_asc');
                    } else if ($.trim(sortValue) == 'DESC')
                    {
                        $("#" + sortBy + "_sort").attr('class', 'sorting_desc');
                    }
                }


                jQuery('#page').val(page);
                jQuery('#sortValue').val(sortValue);
                jQuery('#sortBy').val(sortBy);

//        location.hash = page;
            })
            .fail(function (jqXHR, ajaxOptions, thrownError)
            {
                alert('No response from server');
            });
}


function uploadProfileImage() {
    $("#profileImageName").val('');
    $("#uploadedImg").addClass('hide');
    $("#uploadedImg").attr('src', '');
    $("#status").addClass('hide');
    $(".ajax-upload-dragdrop").removeClass('hide');
    $(".ajax-upload-dragdrop").show();
    $(".ajax-file-upload-container").removeClass('hide');
    $(".ajax-file-upload-container").show();
    $(".ajax-file-upload-statusbar").html('');
    $(".ajax-file-upload-statusbar").addClass('hide');
    $("#profile-image-uploader").attr('style', 'display:none');
    $("#profile-image-uploader").attr('style', 'display:block');
}

function closeUploadedImage() {
    $("#profileImageName").val('');
    $("#uploadedImg").addClass('hide');
    $("#uploadedImg").attr('src', '');
    $("#status").addClass('hide');
    $(".ajax-upload-dragdrop").removeClass('hide');
    $(".ajax-upload-dragdrop").show();
    $(".ajax-file-upload-container").removeClass('hide');
    $(".ajax-file-upload-container").show();
    $(".ajax-file-upload-statusbar").html('');
    $(".ajax-file-upload-statusbar").addClass('hide');
    $("#profile-image-uploader").attr('style', 'display:none');
}

function removeUploadedImage() {
    $("#profileImageName").val('');
    $("#uploadedImg").addClass('hide');
    $("#uploadedImg").attr('src', '');
    $("#status").addClass('hide');
    $(".ajax-upload-dragdrop").removeClass('hide');
    $(".ajax-upload-dragdrop").show();
    $(".ajax-file-upload-container").removeClass('hide');
    $(".ajax-file-upload-container").show();
    $(".ajax-file-upload-statusbar").html('');
    $(".ajax-file-upload-statusbar").addClass('hide');
}

function saveProfileImage() {
    var profileImageName = $("#szImageNewName").val();
    $("#upload-customer-image").addClass('hide');
    $("#szProfileImage").val('');
    $("#szProfileImage").val(profileImageName);
    $("#profile_image").attr('src', '/customers_images/' + profileImageName);
    $("#customer-image").removeClass('hide');
    closeUploadedImage();
}


function removeOldProfileImage() {
    $("#upload-customer-image").removeClass('hide');
    $("#customer-image").addClass('hide');
    uploadProfileImage();
}

function filterPlotList(isRegionFilter) {

    var groundFilter = $("#groundFilter").val();
    var regionFilter = $("#regionFilter").val();
    var page = $("#page").val();

    $.ajax(
            {
                url: '?page=' + page + "&groundFilter=" + groundFilter + "&regionFilter=" + regionFilter,
                type: "get",
                datatype: "html",
                beforeSend: function ()
                {
                    activateLoader();
                    if ($.trim(isRegionFilter) != '1')
                        getBurialRegions(parseInt(groundFilter));
                }
            })
            .done(function (data)
            {
                deactivateLoader();
//        console.log(data);
                $("#table_content").empty().html(data);
                jQuery('#page').val(page);
            })
            .fail(function (jqXHR, ajaxOptions, thrownError)
            {
                 deactivateLoader();
                alert('No response from server');
            });
     if(page==0)
     {
        window.location.reload();
     }       
}

function getBurialRegions(groundFilter) {

    jQuery.get(__BASE_URL__ + "/filteredBurialRegions/" + groundFilter, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $("#regionFilter").html('');
            $("#regionFilter").html(result_ary[1]);
        }
    });
}

function showAlreadyAddedMessage() {
    var szMessage = 'Plot already exists in your cart. Please check your cart.';
    var szType = 'error';
    showToasterMessage('', szMessage, szType);
    setTimeout(clearToast, 5000);
}

function removePlotConfirmation(idPlot) {
  
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#modal_confirmation_header").html("Remove Plot");
    $("#modal_confirmation_message").html("Are you sure you want to remove this Plot from your cart?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").attr("href", '');
    $("#confirmation_btn").attr("href", __BASE_URL__ + '/removePlot/' + idPlot);
}
function removeDesigneeFront(idPlot) {

    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#modal_confirmation_header").html('Remove Designee');
    $("#modal_confirmation_message").html("Are you sure you want to remove this Designee?");
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        removeDesigneeFrontConfirmation(idPlot)
    });
}
function removeDesigneeFrontConfirmation(idPlot)
{
    activateLoader();
    jQuery.get(__BASE_URL__ + "/removeFrontDesignee/" + idPlot, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            deactivateLoader();
            var szMessage = "Designee has been successfully removed.";
            var szType = 'success';
            showToasterMessage('Remove Designee', szMessage, szType);
            setTimeout(function(){
                redirect_url(__BASE_URL__ + result_ary[1])
            }, 3000);
            
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Remove Designee');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}
function removeDesignee(idDesignee) {

    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#modal_confirmation_header").html('Remove Designee');
    $("#modal_confirmation_message").html("Are you sure you want to remove this Designee?");
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        removeDesigneeFrontConfirmation(idDesignee)
    });
}
function removeDesigneeConfirmation(idDesignee)
{
    jQuery.get(__BASE_URL__ + "/removeDesignee/" + idDesignee, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL__ + result_ary[1]);
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Remove Designee');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}

function viewOrderedPlots(idOrder)
{
    var attr_class = $("#block_" + idOrder).attr('class');

    if ($.trim(attr_class) == "hide") {
        $("#block_" + idOrder).removeClass('hide');
        $("#view_icon_" + idOrder).removeClass('fa-eye');
        $("#view_icon_" + idOrder).addClass('fa-eye-slash');
        $("#view_icon_" + idOrder).attr('title', 'Hide Plot Details');

    } else {
        $("#block_" + idOrder).addClass('hide');
        $("#view_icon_" + idOrder).removeClass('fa-eye-slash');
        $("#view_icon_" + idOrder).addClass('fa-eye');
        $("#view_icon_" + idOrder).attr('title', 'View Plot Details');
    }
}

function removeLegacyPhoto(pro_ref, idContent) {
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#modal_confirmation_header").html('Remove Photo');
    $("#modal_confirmation_message").html("Are you sure you want to remove selected photo?");
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        confirmRemoveLegacyPhoto(pro_ref, idContent)
    });
}
function confirmRemoveLegacyPhoto(pro_ref, idContent)
{
    jQuery.get(__BASE_URL__ + "/removeLegacyPhoto/" + pro_ref + "/" + idContent, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL__ + result_ary[1]);
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Remove Photo');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}


function uploadNewLegacyImage(profile_ref) {
    $("#profile_ref").val(profile_ref);
    $("#szImageNewName").val('');
    $("#uploadedImg").addClass('hide');
    $("#uploadedImg").attr('src', '');
    $("#status").addClass('hide');
    $("#status-error").addClass('hide');
    $("#status-error").html('');
    $(".ajax-upload-dragdrop").removeClass('hide');
    $(".ajax-upload-dragdrop").show();
    $(".ajax-file-upload-container").removeClass('hide');
    $(".ajax-file-upload-container").show();
    $(".ajax-file-upload-statusbar").html('');
    $(".ajax-file-upload-statusbar").addClass('hide');
    $("#legacy-image-uploader").attr('style', 'display:none');
    $("#legacy-image-uploader").attr('style', 'display:block');
    $("#save-button").unbind("click");
    $('#save-button').click(function () {
        saveLegacyImage(profile_ref)
    });
}
function closeUploadedLegacyImage() {
    $("#szImageNewName").val('');
    $("#uploadedImg").addClass('hide');
    $("#uploadedImg").attr('src', '');
    $("#status").addClass('hide');
    $("#status-error").addClass('hide');
    $("#status-error").html('');
    $(".ajax-upload-dragdrop").removeClass('hide');
    $(".ajax-upload-dragdrop").show();
    $(".ajax-file-upload-container").removeClass('hide');
    $(".ajax-file-upload-container").show();
    $(".ajax-file-upload-statusbar").html('');
    $(".ajax-file-upload-statusbar").addClass('hide');
    $("#legacy-image-uploader").attr('style', 'display:none');
}
function removeUploadedLegacyImage() {

    $("#szImageNewName").val('');
    $("#uploadedImg").addClass('hide');
    $("#uploadedImg").attr('src', '');
    $("#status").addClass('hide');
    $("#status-error").addClass('hide');
    $("#status-error").html('');
    $(".ajax-upload-dragdrop").removeClass('hide');
    $(".ajax-upload-dragdrop").show();
    $(".ajax-file-upload-container").removeClass('hide');
    $(".ajax-file-upload-container").show();
    $(".ajax-file-upload-statusbar").html('');
    $(".ajax-file-upload-statusbar").addClass('hide');
}

function saveLegacyImage(profile_ref) {
    var szImageTitle = $("#szContentTitle").val();
    var szImageNewName = $("#szImageNewName").val();
    $("#status-error").addClass('hide');
    $("#status-error").html('');
    var form = $("#profileImageForm").serialize();
    if ($.trim(szImageNewName) != '') {
        jQuery.post(__BASE_URL__ + "/addLegacyPhoto", form, function (result) {
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                redirect_url(__BASE_URL__ + result_ary[1]);
            } else
            {
                closeUploadedLegacyImage();
                $("#popup_open_success").attr('style', 'display:none;');
                $("#popup_open_confirmation").attr('style', 'display:none;');
                $("#error_header").html('Uplaod New Photo');
                $("#error_message").html(result_ary[1]);
                $("#popup_open_error").attr('style', 'display:block;');
            }

        });
    } 
     else{
            if($.trim(szImageTitle) == '') 
            {
                $("#status-error").removeClass('hide');
                $("#status-error").html('');
                $("#status-error").html('Image title is required.');
            }
            if($.trim(szImageNewName) == '') 
            {
                $("#status-error").removeClass('hide');
                $("#status-error").html('');
                $("#status-error").html('Please upload image before save.');
            }
        }
    }

function removeLegacyVideo(pro_ref, idContent) {
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#modal_confirmation_header").html('Remove Video Link');
    $("#modal_confirmation_message").html("Are you sure you want to remove selected video link?");
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        confirmRemoveLegacyVideo(pro_ref, idContent)
    });
}
function confirmRemoveLegacyVideo(pro_ref, idContent)
{
    jQuery.get(__BASE_URL__ + "/removeLegacyVideo/" + pro_ref + "/" + idContent, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL__ + result_ary[1]);
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Remove Video Link');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}

function uploadNewLegacyVideo(profile_ref) {
    $("#profile_ref").val(profile_ref);
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#legacy-video-uploader").attr('style', 'display:block;');
    $("#save-button").unbind("click");
    $('#save-button').click(function () {
        saveLegacyVideo(profile_ref)
    });
    validate_form_fields();
}
function closeVideoLinkPopUp() {
    $("#szContentTitle").val('');
    $("#szContentName").val('');
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#legacy-video-uploader").attr('style', 'display:none;');
}
function saveLegacyVideo(profile_ref) {
    var szVideoTitle = $("#szContentTitle").val();
    var szVideoLink = $("#szContentName").val();
    $("#status-error").addClass('hide');
    $("#status-error").html('');
    var form = $("#profileVideoForm").serialize();
    
    if ($.trim(szVideoTitle) == '') {
        $("#status-error").removeClass('hide');
        $("#status-error").html('');
        $("#status-error").html('Video title is required.');
    } else if ($.trim(szVideoLink) == '') {
        $("#status-error").removeClass('hide');
        $("#status-error").html('');
        $("#status-error").html('Video link is required.');
    } else {
        jQuery.post(__BASE_URL__ + "/addLegacyVideo", form, function (result) {
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                redirect_url(__BASE_URL__ + result_ary[1]);
            } else
            {
                closeVideoLinkPopUp();
                $("#popup_open_success").attr('style', 'display:none;');
                $("#popup_open_confirmation").attr('style', 'display:none;');
                $("#error_header").html('Uplaod New Video');
                $("#error_message").html(result_ary[1]);
                $("#popup_open_error").attr('style', 'display:block;');
            }

        });
    }
}
function editPostedComment(profile_ref, idComment) {

    jQuery.get(__BASE_URL__ + "/getCommentDetails/" + profile_ref + "/" + idComment, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $("#profile_ref").val(profile_ref);
            $("#idComment").val(idComment);
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_error").attr('style', 'display:none;');
            $("#edit-comment").attr('style', 'display:block;');
            $("textarea#szComment").val(result_ary[1]);
            $("#save-button").unbind("click");
            $('#save-button').click(function () {
                saveEditComment()
            });
            validate_form_fields();
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Edit Comment');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }
    });
}
function saveEditComment() {
    var profile_ref = $("#profile_ref").val();
    var idComment = $("#idComment").val();
    var szComment = $("#szComment").val();
    $("#status-error").addClass('hide');
    $("#status-error").html('');
    var form = $("#editCommentForm").serialize();
    if ($.trim(profile_ref) == '' || $.trim(idComment) == '') {
        $("#status-error").removeClass('hide');
        $("#status-error").html('');
        $("#status-error").html('Something is missing. Please refresh and try again.');
    } else if ($.trim(szComment) == '') {
        $("#status-error").removeClass('hide');
        $("#status-error").html('');
        $("#status-error").html('Comment is required.');
    } else {
        jQuery.post(__BASE_URL__ + "/updateCommentDetails", form, function (result) {
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                redirect_url(__BASE_URL__ + result_ary[1]);
            } else
            {
                $("#popup_open_success").attr('style', 'display:none;');
                $("#popup_open_confirmation").attr('style', 'display:none;');
                $("#error_header").html('Edit Comment');
                $("#error_message").html(result_ary[1]);
                $("#popup_open_error").attr('style', 'display:block;');
            }

        });
    }
}

function deletePostedComment(profile_ref, idComment) {
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#modal_confirmation_header").html('Delete Comment');
    $("#modal_confirmation_message").html("Are you sure you want to delete selected comment?");
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        confirmDeleteComment(profile_ref, idComment)
    });
}
function confirmDeleteComment(pro_ref, idComment)
{
    jQuery.get(__BASE_URL__ + "/removeLegacyComment/" + pro_ref + "/" + idComment, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL__ + result_ary[1]);
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Delete Comment');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}
function moveUpDownAttribute(idAttribute, orderBy, profile_ref)
{
    jQuery.get(__BASE_URL__ + "/moveUpDownAttributeData/" + idAttribute + "/" + orderBy + "/" + profile_ref, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL__ + result_ary[1]);
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Photo Order Error');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}
function placeOrder() {
    var addressFormDataAry = jQuery('#orderAddressForm').serialize();
    activateLoader();
    jQuery.get(__BASE_URL__ + "/placeOrder", addressFormDataAry, function (result) {
        deactivateLoader();
        var result_ary = result.split("||||");

        if ($.trim(result_ary[0]) == "REDIRECT") {
            redirect_url(__BASE_URL__ + result_ary[1]);
        } else if ($.trim(result_ary[0]) == "SUCCESS") {
            
            $("#paymentToken").val(result_ary[1]);
            $("#load_payment").html('');
            $("#paymentiFrameFormPopUp").attr('style','display:block;');
            $("#paymentForm").submit();
            
        } else {
            showToasterMessage('Place Order',result_ary[1],'error','');
//            $("#popup_open_success").attr('style', 'display:none;');
//            $("#popup_open_confirmation").attr('style', 'display:none;');
//            $("#error_header").html('Place Order');
//            $("#error_message").html(result_ary[1]);
//            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}
function viewGroundContractForm(szContractForm) {
    var URL = __BASE_URL__ + "/viewGroundContractForm/" + szContractForm;
    window.open(URL, '_blank');
}
function billingAddSameAsShipping() {
    $('#cemetery-full-page-loader').show();
    getOrderBillingStatesByCountry($("#idBillingCountry").val(),'idShippingState')
    $("#szShippingFirstName").val($("#szBillingFirstName").val());
    $("#szShippingLastName").val($("#szBillingLastName").val());
    $("#szShippingAddress").val($("#szBillingAddress").val());
    $("#szShippingCity").val($("#szBillingCity").val());
    $("#idShippingCountry").val($("#idBillingCountry").val());
    $("#szShippingPostCode").val($("#szBillingPostCode").val());
    setTimeout(function(){ 
        $('#cemetery-full-page-loader').hide();
        $("#idShippingState").val($("#idBillingState").val())
    }, 2000);
}



function contractFormInfo(szContractForm) {
    $("#deed_form").attr('style', 'display:block');
    $("#view-deed-info").unbind("click");
    $('#view-deed-info').click(function () {
        viewGroundContractForm(szContractForm);
    });
}
function closeDeedPopUp() {
    $("#deed_form").attr('style', 'display:none');
}
function deedCheck()
{
    var isAgree = $('#isAgree').prop('checked');
    if(isAgree == true){
        $("#continue-order-button").removeClass('disabled');
    }else{
        $("#continue-order-button").addClass('disabled');
    }
}
function btndisable()
{
    var isAgree = $('#isAgree').prop('checked');
    if(isAgree == true){
        $("#continue-order-button").removeClass('btndisable');
        $('#hiddenVlaue').val(1);
    }else{
        $("#continue-order-button").addClass('btndisable');
        $('#hiddenVlaue').val(0);
        
    }
}


function share_comment(comment,idComment,profile_ref) {
    
    $("#comment").html(comment);
    $("#idComment").val(idComment);
    $("#profile_ref").val(profile_ref);
    $("#share_comments").attr('style', 'display:block');
}

function SubmitShareCommentForm()
{ 
   var role = $( "#idComment" ).val();
   var szEmail = document.getElementById("szShareToEmail").value
   var szName = document.getElementById("szShareToName").value
    if (!szEmail) {
       
            $('#email_error').html('Email Address is required.');
            $('#email_error').show();
            $("#email_error").addClass('fa fa-times-circle');  
    }
   if (!szName) {
       
            $('#name_error').html('Name is required.');
            $('#name_error').show();
            $("#name_error").addClass('fa fa-times-circle');  
    }
    else{
         var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

	    if (filter.test(szEmail)) {
                 $("#ShareCommentForm").submit();
	    }
        
     
    } 

}

function remove_emailError()
{ 
    $('#email_error').hide();  
}
function closeShareCommentPopUp() {
    $("#share_comments").attr('style', 'display:none');
}

function remove_nameError()
{ 
   $('#name_error').hide(); 
}
function share_photo(szContantName,profile_ref,idCustomer,flag) {
    $("#profile_ref").val(profile_ref);
    $("#flag").val(flag);
    $("#idCustomer").val(idCustomer);
    $("#szContantName").val(szContantName);
    $("#share_photos").attr('style', 'display:block');
}
function share_vedio(szContantName,profile_ref,idCustomer) {
    $("#profile_ref").val(profile_ref);
    $("#idCustomer").val(idCustomer);
    $("#szContantName").val(szContantName);
    $("#share_vedios").attr('style', 'display:block');
}

function SubmitSharePhotoForm()
{ 
  
   var szEmail = document.getElementById("szShareToEmail").value
   var szName = document.getElementById("szShareToName").value
    if (!szEmail) {
       
            $('#email_error').html('Email Address is required.');
            $('#email_error').show();
            $("#email_error").addClass('fa fa-times-circle');  
    }
   if (!szName) {
       
            $('#name_error').html('Name is required.');
            $('#name_error').show();
            $("#name_error").addClass('fa fa-times-circle');  
    }
    else{
         var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

	    if (filter.test(szEmail)) {
                 $("#SharePhotoForm").submit();
	    }
        
     
    } 

}
function SubmitShareVedioForm()
{ 
  
   var szEmail = document.getElementById("szShareToEmail").value
   var szName = document.getElementById("szShareToName").value
    if (!szEmail) {
       
            $('#email_error').html('Email Address is required.');
            $('#email_error').show();
            $("#email_error").addClass('fa fa-times-circle');  
    }
   if (!szName) {
       
            $('#name_error').html('Name is required.');
            $('#name_error').show();
            $("#name_error").addClass('fa fa-times-circle');  
    }
    else{
         var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

	    if (filter.test(szEmail)) {
                 $("#ShareVedioForm").submit();
	    }
        
     
    } 

}
function closeShareVedioPopUp() {
    $("#share_vedios").attr('style', 'display:none');
}
function closeSharePhotoPopUp() {
    $("#share_photos").attr('style', 'display:none');
}
function resendInvitation(idDesignee) {

    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#modal_confirmation_header").html('Resend Invitation');
    $("#modal_confirmation_message").html("Are you sure you want to resend the login information?");
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        resendInvitationConfirmation(idDesignee)
    });
}


function resendInvitationConfirmation(idDesignee)
{ 
    jQuery.get(__BASE_URL__ + "/resendInvitation/" + idDesignee, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL__ + result_ary[1]);
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Resend Designee Information');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}


function uploadNewVideo(profile_ref) 
{
    $("#profileRef").val(profile_ref);
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#legacy-video-uploader").attr('style', 'display:block;');
    $("#save-button").unbind("click");
    $('#save-button').click(function () {
        saveVideo(profile_ref)
    });
    validate_form_fields();
}


function saveVideo(profile_ref) 
{
    closeVideoLinkPopUp();

    var szVideoTitle = $("#szContentTitle").val();    
    var szVideoLink = $("#szContentName").val();    

    $("#status-error").addClass('hide');
    $("#status-error").html('');
    
    var form = $("#profileVideoForm").serialize();

    if ($.trim(szVideoTitle) == '') 
    {
        $("#status-error").removeClass('hide');
        $("#status-error").html('');
        $("#status-error").html('Video title is required.');
    } 
    else if ($.trim(szVideoLink) == '') 
    {
        $("#status-error").removeClass('hide');
        $("#status-error").html('');
        $("#status-error").html('Video link is required.');
    } 
    else
    {
        jQuery.post(__BASE_URL__ + "/uploadVideo", form, function (result) {
            
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                redirect_url(__BASE_URL__ + result_ary[1]);
            } 
            else
            {
                closeVideoLinkPopUp();
                $("#popup_open_success").attr('style', 'display:none;');
                $("#popup_open_confirmation").attr('style', 'display:none;');
                $("#error_header").html('Video Upload Failed');
                $("#error_message").html(result_ary[1]);
                $("#popup_open_error").attr('style', 'display:block;');
            }

        });
    }
}

function removeVideo(profile_ref, id) {
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#modal_confirmation_header").html('Remove Video Link');
    $("#modal_confirmation_message").html("Are you sure you want to remove selected video link?");
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        confirmRemoveVideo(profile_ref, id)
    });
}

function confirmRemoveVideo(profile_ref, id)
{
    jQuery.get(__BASE_URL__ + "/removeVideo/" + profile_ref + "/" + id, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL__ + result_ary[1]);
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Remove Video Link');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}

function uploadFamilyMemberImage()
{
    $("#profileImageName").val('');
    $("#uploadedImg").addClass('hide');
    $("#uploadedImg").attr('src', '');
    $("#status").addClass('hide');
    $(".ajax-upload-dragdrop").removeClass('hide');
    $(".ajax-upload-dragdrop").show();
    $(".ajax-file-upload-container").removeClass('hide');
    $(".ajax-file-upload-container").show();
    $(".ajax-file-upload-statusbar").html('');
    $(".ajax-file-upload-statusbar").addClass('hide');
    $("#Family-member-image-uploader").attr('style', 'display:none');
    $("#Family-member-image-uploader").attr('style', 'display:block');
}

function removeOldFamilyMemberImage() {
    $("#upload-familyMember-image").removeClass('hide');
    $("#familyMember-image").addClass('hide');
    uploadFamilyMemberImage();
}

function removeUploadedFamilyMemberImage() {
    $("#profileImageName").val('');
    $("#uploadedImg").addClass('hide');
    $("#uploadedImg").attr('src', '');
    $("#status").addClass('hide');
    $(".ajax-upload-dragdrop").removeClass('hide');
    $(".ajax-upload-dragdrop").show();
    $(".ajax-file-upload-container").removeClass('hide');
    $(".ajax-file-upload-container").show();
    $(".ajax-file-upload-statusbar").html('');
    $(".ajax-file-upload-statusbar").addClass('hide');
}


function saveFamilyMemberImage() {
    var profileImageName = $("#szImageNewName").val();
    $("#upload-familyMember-image").addClass('hide');
    $("#szProfileImage").val('');
    $("#szProfileImage").val(profileImageName);
    $("#FamilyMember_image").attr('src', '/FamilyMembers_Pic/' + profileImageName);
    $("#familyMember-image").removeClass('hide');
    closeUploadedFamilyMemberImage();
}

function closeUploadedFamilyMemberImage() {
    $("#profileImageName").val('');
    $("#uploadedImg").addClass('hide');
    $("#uploadedImg").attr('src', '');
    $("#status").addClass('hide');
    $(".ajax-upload-dragdrop").removeClass('hide');
    $(".ajax-upload-dragdrop").show();
    $(".ajax-file-upload-container").removeClass('hide');
    $(".ajax-file-upload-container").show();
    $(".ajax-file-upload-statusbar").html('');
    $(".ajax-file-upload-statusbar").addClass('hide');
    $("#Family-member-image-uploader").attr('style', 'display:none');
}


function deleteFamilyMember(memberId,profileRef) 
{
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#modal_confirmation_header").html('Remove Member');
    $("#modal_confirmation_message").html("Are you sure you want to remove selected Member ?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        deleteFamilyMemberConfirmation(memberId,profileRef)
    });
}


function deleteFamilyMemberConfirmation(memberId,profileRef)
{
    jQuery.get(__BASE_URL__ + "/deleteFamilyMember/"+ memberId+'/'+profileRef, function (result) {

        var result_ary = result.split("||||");
        
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL__ + result_ary[1]);
        } 
        else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Remove Member Confirmation');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}

function addFamilyMember(gender,relationId,parentSide,profileRef)
{
    jQuery.post(__BASE_URL__ + "/addfamilyMem",{profileRef:profileRef,gender:gender,relationId:relationId,parentSide:parentSide}, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {   
            redirect_url(__BASE_URL__ + result_ary[1]);

        } 
    });
}


function removeUploadedFamilyPic() {
    $("#profileImageName").val('');
    $("#szImageNewName").val('');
    $("#uploadedFile").attr('src','');
    $("#uploadedFamilyImage").attr('src','/images/defaultImage.png');
    $("#removePic").addClass('hide');
    $("#fileuploader").removeClass('hide');
    $("#fileuploader").show();

    $(".ajax-upload-dragdrop").removeClass('hide');
    $(".ajax-upload-dragdrop").show();
    $(".ajax-file-upload-container").removeClass('hide');
    $(".ajax-file-upload-container").show();
    $(".ajax-file-upload-statusbar").html('');
    $(".ajax-file-upload-statusbar").addClass('hide');
}
function removeProfileImage() {
    $("#profileImageName").val('');
    $("#szProfileImage").val('');
    $("#profile_image").attr('src','');
    $("#profile_image").attr('src','/images/defaultImage.png');
    $("#removePic").addClass('hide');
    $("#fileuploader").removeClass('hide');
    $("#fileuploader").show();

    $(".ajax-upload-dragdrop").removeClass('hide');
    $(".ajax-upload-dragdrop").show();
    $(".ajax-file-upload-container").removeClass('hide');
    $(".ajax-file-upload-container").show();
    $(".ajax-file-upload-statusbar").html('');
    $(".ajax-file-upload-statusbar").addClass('hide');
}

function removeAvatarImage() {
    $("#remove_div").remove();    
    $(".ajax-upload-dragdrop").removeClass('hide'); 
    $(".ajax-upload-dragdrop").show();
    $(".ajax-file-upload-container").removeClass('hide');
    $(".ajax-file-upload-container").show();
    $(".ajax-file-upload-statusbar").html('');
    $(".ajax-file-upload-statusbar").addClass('hide');
    
}

function removeGeoTagDesigneeFront(profile_ref) {

    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#modal_confirmation_header").html('Remove Designee');
    $("#modal_confirmation_message").html("Are you sure you want to remove this Designee?");
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        removeGeoTagDesigneeFrontConfirmation(profile_ref);
    });
}
function removeGeoTagDesigneeFrontConfirmation(profile_ref)
{
    jQuery.get(__BASE_URL__ + "/removeGeoTagFrontDesignee/" + profile_ref, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            var szMessage = "Designee has been successfully removed.";
            var szType = 'success';
            showToasterMessage('Remove Designee', szMessage, szType);
            setTimeout(function(){
                redirect_url(__BASE_URL__ + result_ary[1]);
            }, 3000);
        }
        else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Remove Memorial');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}

function viewGeoTagOnMap(profileRef) {
    jQuery.get(__BASE_URL__ + "/viewGeoTagOnMap/" + profileRef, function (result) {
        ar_result = result.split('||||');
        if ($.trim(ar_result[0]) == "SUCCESS") {
            $("#map_header").html('');
            $("#map").html('');
            $("#map_header").html("Burial Map View");
            $("#popup_map").attr('style', 'display:block;');
            var map;
            var bounds = new google.maps.LatLngBounds();
            var mapOptions = {
                mapTypeId: 'hybrid',
                draggable: false,
                zoomControl: true
            };
            map = new google.maps.Map(document.getElementById("map"), mapOptions);
            map.setTilt(45);
            var markers = [];
            var infoWindowContent = [];
            $.each($.parseJSON(ar_result[1]), function (i, plot) {
                var plotAry = [];
                plotAry[0] = 'Name: ' + plot.szFirstName + ' '+ plot.szLastName;
                plotAry[1] = plot.latitude;
                plotAry[2] = plot.longitude;
                plotAry[3] = plot.dtDOB;
                plotAry[4] = plot.id;
                markers.push(plotAry);

                var plotDetails = [];

                plotDetails[0] = '<div class="info_content" style="text-align: left;">' +
                        '<p><b>Name:</b> ' + plot.szFirstName+ ' '+ plot.szLastName + '</p>' +
                        '<p><b>Date of Birth:</b> ' + plot.dtDOB + '</p>' +
                        '<p><b>Date of Passing:</b> ' + plot.dtDied + '</p>' +
                        '<p><b>About' + plot.szFirstName+':</b> ' + plot.szAbout + '</p>' +
                        '</div>';
                infoWindowContent.push(plotDetails);

            });

            // Display multiple markers on a map
            var infoWindow = new google.maps.InfoWindow(), marker, i;

            // Loop through our array of markers & place each one on the map  
            for (i = 0; i < markers.length; i++) {
                var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
                bounds.extend(position);
                if (markers[i][3] == '1') {
                    if (idPlot == markers[i][4]) {
                        var icon = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
                    } else {
                        icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
                    }

                } else {
                    icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
                }
                marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    draggable: false,
                    title: markers[i][0],
                    icon: icon,
                    zoomControl: true
                });

                // Allow each marker to have an info window    
                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        infoWindow.setContent(infoWindowContent[i][0]);
                        infoWindow.open(map, marker);
                    }
                })(marker, i));

                // Automatically center the map fitting all markers on the screen
                map.fitBounds(bounds);
            }

            // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
            var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
                this.setZoom(22);
                google.maps.event.removeListener(boundsListener);
            });

        }
    });
}


function removeCommentPhoto(pro_ref, idComment) {
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#modal_confirmation_header").html('Remove Comment Attached Photo');
    $("#modal_confirmation_message").html("Are you sure you want to remove selected photo?");
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        confirmRemoveCommentPhoto(pro_ref, idComment)
    });
}
function confirmRemoveCommentPhoto(pro_ref, idComment)
{
    jQuery.get(__BASE_URL__ + "/removeCommentPhoto/" + pro_ref + "/" + idComment, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL__ + result_ary[1]);
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Remove Comment Attached Photo');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}

function showHidePurchaseTypeForm(iPurchaseType){
    if(parseInt(iPurchaseType) == 1){
        $("#pre-need-form").removeClass("hide");
        $("#attorney-question").addClass("hide");
        $("#at-need-form").addClass("hide");
    }else{
        $("#pre-need-form").addClass("hide");
        $("#attorney-question").removeClass("hide");
    }
    
    $(".idAttorneyQuestion").removeAttr("checked");
    $("#questions-list").addClass("hide");
    $(".iHavePowerAttorney").removeAttr("checked");
        
}

function showHidePowerAttorneyForm(iHavePowerAttorney){
    if(parseInt(iHavePowerAttorney) == 1){
        $("#at-need-form").removeClass("hide");
        $("#questions-list").addClass("hide");
    }else{
        $("#at-need-form").addClass("hide");
        $("#questions-list").removeClass("hide");
    }
    $(".idAttorneyQuestion").removeAttr("checked");
        
}

function checkAnsweredQuestionResponse(idQuestion){
    if(parseInt(idQuestion) == 0){
        var szMessage = 'Please contact us for more detail.';
        var szType = 'error';
        showToasterMessage('', szMessage, szType);
        setTimeout(clearToast, 5000);
        $("#at-need-form").addClass("hide");
    }else{
        $("#at-need-form").removeClass("hide");
    }
}

function removeError(idErrorDiv){
    $("#"+idErrorDiv).remove();
}

function stripeOrderPayment(){
    jQuery.get(__BASE_URL__ + "/stripeOrderValidation", function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            var isAgree = $('#full-payment').prop('checked');
            var iPaymentType = '1';
            if(isAgree == false){
                //iPaymentType = '2';
               iPaymentType = $("input[name='full-payment']:checked").val()
            }
            $("#stripePaymentModal").modal('show');
            var elements = stripe.elements();
            var card = elements.create('card');
            card.mount('#card-element');
            $('#card-errors').html('');
            $('#card-errors').removeClass("alert alert-danger");
            $("#subscribe-payment-btn").unbind("click");
            $('#subscribe-payment-btn').click(function () {
                confirmPayment(card,iPaymentType);
            });
        } 
        else
        {
            var szMessage = result_ary[1];
            var szType = 'error';
            showToasterMessage('Order Payment', szMessage, szType);
            setTimeout(clearToast, 5000);
        }

    });

}

function confirmPayment(card,iPaymentType){
    
    $("#paymentType").val();
    $("#stripePaymentModal").modal('hide');
    activateLoader();
    jQuery.post(__BASE_URL__ + "/confirmPayment?cardElement="+card+"&iPaymentType="+iPaymentType, function (result) {
        var result_ary = result.split("||||");
        
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
//            console.log(result_ary[1]);
            var clientSecret = result_ary[1];
            stripe.handleCardPayment(clientSecret, card).then(function(stripeResponse) {
//                    console.log("stripeResponse ====== "+ JSON.stringify(stripeResponse));
                jQuery.post(__BASE_URL__ + "/placeOrderAfterPayment?stripeResponse="+JSON.stringify(stripeResponse)+"&iPaymentType="+iPaymentType, function (result_order) {
                    var resultOrder_ary = result_order.split("||||");
                    deactivateLoader();
                    if (jQuery.trim(resultOrder_ary[0]) == 'SUCCESS')
                    {
                        redirect_url(__BASE_URL__ + resultOrder_ary[1]);
                    }
                    else{
                        var szMessage = resultOrder_ary[1];
                        var szType = 'error';
                        showToasterMessage('Order Payment', szMessage, szType);
                        setTimeout(clearToast, 5000);
                    }
                    
                });
                
            });
        }
        else if (jQuery.trim(result_ary[0]) == 'REDIRECT')
        {
            deactivateLoader();
            redirect_url(__BASE_URL__ + result_ary[1]);
        }
        else
        {
            deactivateLoader();
            var szMessage = result_ary[1];
            var szType = 'error';
            showToasterMessage('Order Payment', szMessage, szType);
            setTimeout(clearToast, 5000);
        }
    });
}


function stripeOrderPendingPayment(idOrder){
    jQuery.get(__BASE_URL__ + "/stripePendingOrderValidation",{'idOrder':idOrder}, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $("#stripePaymentModal").modal('show');
            var elements = stripe.elements();
            var card = elements.create('card');
            card.mount('#card-element');
            $('#card-errors').html('');
            $('#card-errors').removeClass("alert alert-danger");
            $("#subscribe-payment-btn").unbind("click");
            $('#subscribe-payment-btn').click(function () {
                confirmPendingPayment(card,idOrder);
            });
        } 
        else
        {
            var szMessage = result_ary[1];
            var szType = 'error';
            showToasterMessage('Order Payment', szMessage, szType);
            setTimeout(clearToast, 5000);
        }

    });

}

function confirmPendingPayment(card,idOrder){
    
    $("#paymentType").val();
    $("#stripePaymentModal").modal('hide');
    activateLoader();
    jQuery.post(__BASE_URL__ + "/confirmPendingPayment?cardElement="+card+"&idOrder="+idOrder, function (result) {
        var result_ary = result.split("||||");
        
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            var clientSecret = result_ary[1];
            stripe.handleCardPayment(clientSecret, card).then(function(stripeResponse) {
                jQuery.post(__BASE_URL__ + "/placeOrderAfterPendingPayment?stripeResponse="+JSON.stringify(stripeResponse)+"&idOrder="+idOrder, function (result_order) {
                    var resultOrder_ary = result_order.split("||||");
                    deactivateLoader();
                    if (jQuery.trim(resultOrder_ary[0]) == 'SUCCESS')
                    {
                        redirect_url(__BASE_URL__ + resultOrder_ary[1]);
                    }
                    else{
                        var szMessage = resultOrder_ary[1];
                        var szType = 'error';
                        showToasterMessage('Order Pending Payment', szMessage, szType);
                        setTimeout(clearToast, 5000);
                    }
                    
                });
                
            });
        }
        else if (jQuery.trim(result_ary[0]) == 'REDIRECT')
        {
            deactivateLoader();
            redirect_url(__BASE_URL__ + result_ary[1]);
        }
        else
        {
            deactivateLoader();
            var szMessage = result_ary[1];
            var szType = 'error';
            showToasterMessage('Order Pending Payment', szMessage, szType);
            setTimeout(clearToast, 5000);
        }
    });
}

function showPendingPaymentMessage(){
    var szMessage = "Please pay balance amount to manage your memorial profile.";
    var szType = 'error';
    showToasterMessage('Manage Memorial', szMessage, szType);
    setTimeout(clearToast, 5000);
}

function showAppDataImportModal(){
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#modal_confirmation_header").html("Import EverArk App Data");
    $("#modal_confirmation_message").html("We have detected you have saved memorial in EverArk app. Do you want to import app memorial into your this account?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    
    
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        confirmAppDataImport('YES');
    });
    $("#btn-confirm-popup-close").unbind("click");
    $('#btn-confirm-popup-close').click(function () {
        confirmAppDataImport('NO');
    });
    
}

function confirmAppDataImport(iWantImport){
    if($.trim(iWantImport) != '' && ($.trim(iWantImport) == "YES" || $.trim(iWantImport) == "NO"))
    {
        activateLoader();
        $("#popup_open_confirmation").attr('style', 'display:none;');
        jQuery.get(__BASE_URL__ + "/cust/confirmAppDataImport",{'iWantImport':iWantImport}, function (result) {
            var result_ary = result.split("||||");
            deactivateLoader();
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                redirect_url(__BASE_URL__ + result_ary[1]);
            } 
            else
            {
                var szMessage = result_ary[1];
                var szType = 'error';
                showToasterMessage('Import EverArk App Data', szMessage, szType);
                setTimeout(clearToast, 5000);
            }

        });
        
    }else{
        var szMessage = "Something is missing. Please refresh page and try again.";
        var szType = 'error';
        showToasterMessage('Import EverArk App Data', szMessage, szType);
        setTimeout(clearToast, 5000);
    }
}

function checkEmailExistOnOtherCemeteries(){
    activateLoader();
    jQuery.post(__BASE_URL__ + "/cust/checkEmailExistOnOtherCemeteries",$("#profileForm").serialize(), function (result) {
        var result_ary = result.split("||||");
        
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            deactivateLoader();
            var szMessage = "Your profile has been successfully updated.";
            var szType = 'success';
            showToasterMessage('Update Profile', szMessage, szType);
            setTimeout(function(){
                redirect_url(__BASE_URL__ + result_ary[1])
            }, 3000);
        }
        else if (jQuery.trim(result_ary[0]) == 'EMAIL_CONFIRMATION')
        {
            deactivateLoader();
            redirect_url(__BASE_URL__ + result_ary[1]);
        }
        else
        {
            deactivateLoader();
            var szMessage = result_ary[1];
            var szType = 'error';
            showToasterMessage('Update Profile', szMessage, szType);
            setTimeout(clearToast, 5000);
        }
    });
}


function stripeDonationPayment(profile_ref){
    var form = $("#donationDetailsForm").serialize();
    jQuery.post(__BASE_URL__ + "/stripeDonationValidation/"+profile_ref,form, function (result) {
        var result_ary = result.split("||||");

        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $("#stripePaymentModal").modal('show');
            var elements = stripe.elements();
            var card = elements.create('card');
            card.mount('#card-element');
            $('#card-errors').html('');
            $('#card-errors').removeClass("alert alert-danger");
            $("#subscribe-payment-btn").unbind("click");
            $('#subscribe-payment-btn').click(function () {
                confirmDonationPayment(card,result_ary[1],profile_ref);
            });
        } 
        else
        {
            var szMessage = result_ary[1];
            var szType = 'error';
            showToasterMessage('Donation', szMessage, szType);
            setTimeout(clearToast, 5000);
        }

    });

}

function confirmDonationPayment(card,order_ref,profile_ref){
    
    $("#paymentType").val();
    $("#stripePaymentModal").modal('hide');
    activateLoader();
    jQuery.post(__BASE_URL__ + "/confirmDonationPayment?cardElement="+card+"&order_ref="+order_ref+"&profile_ref="+profile_ref, function (result) {
        var result_ary = result.split("||||");
        
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
//            console.log(result_ary[1]);
            var clientSecret = result_ary[1];
            stripe.handleCardPayment(clientSecret, card).then(function(stripeResponse) {
//                    console.log("stripeResponse ====== "+ JSON.stringify(stripeResponse));
                jQuery.post(__BASE_URL__ + "/placeOrderAfterDonation?stripeResponse="+JSON.stringify(stripeResponse)+"&order_ref="+order_ref, function (result_order) {
                    var resultOrder_ary = result_order.split("||||");
                    deactivateLoader();
                    if (jQuery.trim(resultOrder_ary[0]) == 'SUCCESS')
                    {
                        redirect_url(__BASE_URL__ + resultOrder_ary[1]);
                    }
                    else{
                        var szMessage = resultOrder_ary[1];
                        var szType = 'error';
                        showToasterMessage('Donation Payment', szMessage, szType);
                        setTimeout(clearToast, 5000);
                    }
                    
                });
                
            });
        }
        else if (jQuery.trim(result_ary[0]) == 'REDIRECT')
        {
            deactivateLoader();
            redirect_url(__BASE_URL__ + result_ary[1]);
        }
        else
        {
            deactivateLoader();
            var szMessage = result_ary[1];
            var szType = 'error';
            showToasterMessage('Donation Payment', szMessage, szType);
            setTimeout(clearToast, 5000);
        }
    });
}


function UploadCustomerImage(data)
{
    if(data)
    {
        $('#cusomer_image').modal('show');
    }
}


