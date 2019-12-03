/* 
    Created on : Apr 4, 2019, 3:42:51 PM
    Author     : Inderjeet
    Description: This file contain all the functions related to Cemetery Site.
*/

function cancelPopup(id_popup, clearHTML)
{
    if ($.trim(clearHTML) != '')
    {
        jQuery('#' + id_popup).html('');
    }

    jQuery('#' + id_popup).attr("style", 'display:none;');
}

function showUpdateDomainModal(szCurrentDomain){

    validate_form_fields();
    $("#szDomainName").val(szCurrentDomain);
    $("#domain-error-form-group").removeClass('has-error');
    $(".help-block").remove();
    $("#addDomainModal").modal('show');
    $("#cardDetailModal").modal('hide');
    $("#additionalDetailModal").modal('hide');
}

function showCardDetailModal(){

    $('#cemetery-full-page-loader').show();
    
    jQuery.get(__BASE_URL_CEMETERY__ + "/showCardDetail" , function (result) {
        $('#cemetery-full-page-loader').hide();
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $("#addDomainModal").modal('hide');
            $("#additionalDetailModal").modal('hide');
            $("#cardDetailModal").modal('show');
            $("#card-detail-content").html('');
            $("#card-detail-content").html(result_ary[1]);
        } 
        else if (jQuery.trim(result_ary[0]) == 'REDIRECT')
        {
            redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
        } 
        else if (jQuery.trim(result_ary[0]) == 'ERROR')
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Card Detail');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }
    });
}

function addCemeteryDomain(){
    $("#addDomainModal").modal('hide'); 
    $('#cemetery-full-page-loader').show();
    var szDomainName = $("#szDomainName").val();
    
    if ($.trim(szDomainName) != '') {
        jQuery.get(__BASE_URL_CEMETERY__ + "/addCemeteryDomain/",{szDomainName:szDomainName} , function (result) {
            $('#cemetery-full-page-loader').hide();
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
            } 
            else
            {
                $("#popup_open_success").attr('style', 'display:none;');
                $("#popup_open_confirmation").attr('style', 'display:none;');
                $("#error_header").html('Add Domain');
                $("#error_message").html(result_ary[1]);
                $("#popup_open_error").attr('style', 'display:block;');
            }
        });
    }
    else{
        $('#cemetery-full-page-loader').hide();
    }
}

function updateRecieptEmail(szCurrentEmail){
    $("#addDomainModal").modal('hide');
    $("#cardDetailModal").modal('hide');
    $("#additionalDetailModal").modal('hide');
    $("#updateRecieptModal").modal('show');
    $("#szRecieptEmail").val(szCurrentEmail);
    $("#reciept-error-form-group").removeClass('has-error');
    $(".help-block").remove();
    validate_form_fields();
}

function showPublishkeyModel(szCurrentId)
{
    console.log('hello'); 
    $("#addDomainModal").modal('hide');
    $("#cardDetailModal").modal('hide');
    $("#additionalDetailModal").modal('hide');
    $("#updateRecieptModal").modal('hide');
    $("#idStripePublishableKey").modal('show');
    $("#idStrpeKey").val(szCurrentId);
    $("#public-error-form-group").removeClass('has-error');
    $(".help-block").remove();
    validate_form_fields();
}   

function updateStripeKeyModel(SecretKey)
{
    $("#addDomainModal").modal('hide');
    $("#cardDetailModal").modal('hide');
    $("#additionalDetailModal").modal('hide');
    $("#updateRecieptModal").modal('hide');
    $("#idStripePublishableKey").modal('hide');
    $("#idStripeSecretKey").modal('show');
    $("#idStrpeSecretKey").val(SecretKey);
    $("#Stripe-error-form-group").removeClass('has-error');
    $(".help-block").remove();
    validate_form_fields();
}  

function saveRecieptEmail(){
    $("#updateRecieptModal").modal('hide'); 
    $('#cemetery-full-page-loader').show();
    var szRecieptEmail = $("#szRecieptEmail").val();
    
    if ($.trim(szDomainName) != '') {
        jQuery.get(__BASE_URL_CEMETERY__ + "/saveRecieptEmail/",{szRecieptEmail:szRecieptEmail} , function (result) {
            $('#cemetery-full-page-loader').hide();
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
            } 
            else
            {
                $("#popup_open_success").attr('style', 'display:none;');
                $("#popup_open_confirmation").attr('style', 'display:none;');
                $("#error_header").html('Edit Receipt Email');
                $("#error_message").html(result_ary[1]);
                $("#popup_open_error").attr('style', 'display:block;');
            }
        });
    }
    else{
        $('#cemetery-full-page-loader').hide();
    }
}

function addUpdateAdditionalDetail(szAdditionalDetail){
    $("#addDomainModal").modal('hide');
    $("#cardDetailModal").modal('hide');
    $("#updateRecieptModal").modal('hide');
    $("#additionalDetailModal").modal('show');
    $("#szAdditionalDetail").val(szAdditionalDetail);
    $("#detail-error-form-group").removeClass('has-error');
    $(".help-block").remove();
    validate_form_fields();
}

function saveAdditionalDetail(){
    $("#additionalDetailModal").modal('hide'); 
    $('#cemetery-full-page-loader').show();
    var szAdditionalDetail = $("#szAdditionalDetail").val();
    
    if ($.trim(szAdditionalDetail) != '') {
        jQuery.get(__BASE_URL_CEMETERY__ + "/saveAdditionalDetail/",{szAdditionalDetail:szAdditionalDetail} , function (result) {
            $('#cemetery-full-page-loader').hide();
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
            } 
            else
            {
                $("#popup_open_success").attr('style', 'display:none;');
                $("#popup_open_confirmation").attr('style', 'display:none;');
                $("#error_header").html('Additional Detail');
                $("#error_message").html(result_ary[1]);
                $("#popup_open_error").attr('style', 'display:block;');
            }
        });
    }
    else{
        $('#cemetery-full-page-loader').hide();
    }
}

function showCemeteryPagePermissionRadio(idPage)
{
    var attr_class = $("#permissionType_" + idPage).attr('class');

    if ($.trim(attr_class) == "hide") {
        $("#permissionType_" + idPage).removeClass('hide');


    } else {
        $("#permissionType_" + idPage).addClass('hide');
    }
}

function cemeteryUserStatus(idUser, flag) {

    $("#popup_open_confirmation").attr('style', 'display:block;');

    if (flag == 1) {
        $("#confirmation_message").html("Are you sure you want to Deactivate this Administrator?");
        $("#confirmation_header").html('Update Status');
    } else {
        $("#confirmation_header").html('Update Status');
        $("#confirmation_message").html("Are you sure you want to Activate this Administrator?");
    }

    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        cemeteryUserStatusConfirmation(idUser, flag);
    });
}

function cemeteryUserStatusConfirmation(idUser, flag)
{
     $("#popup_open_confirmation").attr('style', 'display:none;');
    $('#cemetery-full-page-loader').show();
    jQuery.get(__BASE_URL_CEMETERY__ + "/changeUserStatus/" + idUser + "/" + flag, function (result) {
        var result_ary = result.split("||||");
        $('#cemetery-full-page-loader').hide();
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Delete User');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}

function deleteCemeteryUserRecord(idUser) {
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_header").html('Delete User');
    $("#confirmation_message").html("Are you sure you want to delete this User?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        deleteCemeteryUserConfirmation(idUser)
    });
}

function deleteCemeteryUserConfirmation(idUser)
{
    $('#cemetery-full-page-loader').show();
    
    $("#popup_open_confirmation").attr('style', 'display:none;');
    jQuery.post(__BASE_URL_CEMETERY__ + "/deleteUser/" + idUser, function (result) {
        var result_ary = result.split("||||");
        $('#cemetery-full-page-loader').hide();
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
        } 
        else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Delete User');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}

function deleteCemeteryGroundRecord(idGround) {
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_header").html('Delete Burial Ground');
    $("#confirmation_message").html("Are you sure you want to delete this burial ground?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        deleteCemeteryBurialGroundConfirmation(idGround)
    });
}

function deleteCemeteryBurialGroundConfirmation(idGround)
{
    $("#popup_open_confirmation").attr('style', 'display:none;');
    $('#cemetery-full-page-loader').show();
    jQuery.get(__BASE_URL_CEMETERY__ + "/deleteGround/" + idGround, function (result) {
        var result_ary = result.split("||||");
        $('#cemetery-full-page-loader').hide();
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Delete Burial Ground');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}

function deleteCemeteryRegionRecord(idRegion, idGround) {

    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_header").html('Delete Burial Region');
    $("#confirmation_message").html("Are you sure you want to delete this burial region?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        deleteCemeteryBurialRegionConfirmation(idRegion, idGround)
    });
}

function deleteCemeteryBurialRegionConfirmation(idRegion, idGround) {
    $("#popup_open_confirmation").attr('style', 'display:none;');
    $('#cemetery-full-page-loader').show();
    jQuery.get(__BASE_URL_CEMETERY__ + "/deleteRegion/" + idRegion + "/" + idGround, function (result) {
        $('#cemetery-full-page-loader').hide();
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Delete Burial Region');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}

function selectCemeteryBulkRows() {

    var propValue = $('#bulkActionPlots').prop('checked');

    if (propValue == true) {
        $('.bulk_checkboxes').prop('checked', true);
    } else
    {
        $(".bulk_checkboxes").prop('checked', false);
    }
}

function getCemeteryBurialRegions(idBurialGround) {

    if(idBurialGround!='')
    {
        $('#cemetery-full-page-loader').show();
        jQuery.get(__BASE_URL_CEMETERY__ + "/burialRegions/" + idBurialGround, function (result) {
            var result_ary = result.split("||||");
            $('#cemetery-full-page-loader').hide();
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                $("#idBurialRegions").html('');
                $("#idBurialRegions").html(result_ary[1]);
                $("#bulkActions").val(0);
            } else
            {
                $("#popup_open_success").attr('style', 'display:none;');
                $("#popup_open_confirmation").attr('style', 'display:none;');
                $("#error_header").html('Burial Regions');
                $("#error_message").html(result_ary[1]);
                $("#popup_open_error").attr('style', 'display:block;');
            }
        });
        //validate_form_fields();
    }
    else
    {
        //$("#idBurialRegions").html('');
        $('#idBurialRegions option:contains("Select Burial Garden")').prop('selected',true);
    }

}

function removeCemeteryPlotImage(data) {
    $("#remove_div" + data).remove();
}

function removeCemeteryGroundImage(data) {
    $("#remove_div" + data).remove();
}

function removeCemeteryPlotDescriptionError() {
    $("#description-group").removeClass('has-error');
    $("#description-help-block").remove();
}

function removeCemeteryPlotImagesError() {
    $("#plot-image-group").removeClass('has-error');
    $("#plot-image-help-block").remove();
}

function deleteCemeteryPlotRecord(idPlot) {
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_header").html('Delete Plot');
    $("#confirmation_message").html("This action is not reversible. Are you sure you want to delete this Plot?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        deleteCemeteryPlotConfirmation(idPlot)
    });
}

function deleteCemeteryPlotConfirmation(idPlot)
{
    $("#popup_open_confirmation").attr('style', 'display:none;');
    $('#cemetery-full-page-loader').show();
    jQuery.get(__BASE_URL_CEMETERY__ + "/deletePlot/" + idPlot, function (result) {
        var result_ary = result.split("||||");
        $('#cemetery-full-page-loader').hide();
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Delete Plot');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}

function viewCemeteryPlotOnMap(idPlot, idBurialGrounds) {
    $('#cemetery-full-page-loader').show();
    jQuery.get(__BASE_URL_CEMETERY__ + "/viewPlotOnMap/" + idBurialGrounds +'/'+ idPlot, function (result) {
        $('#cemetery-full-page-loader').hide();
        ar_result = result.split('||||');
        if (jQuery.trim(ar_result[0]) == 'REDIRECT')
        {
            redirect_url(__BASE_URL_CEMETERY__ + ar_result[1]);
        }
        else if ($.trim(ar_result[0]) == "SUCCESS") {
            $("#map_header").html('');
            $("#map").html('');
            $("#map_header").html("Plot Map View");
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
                plotAry[0] = 'Plot Number: ' + plot.szPlotNumber;
                plotAry[1] = plot.latitude;
                plotAry[2] = plot.longitude;
                plotAry[3] = plot.iAvailable;
                plotAry[4] = plot.id;
                markers.push(plotAry);

                var plotDetails = [];

                if (plot.iAvailable == '1') {
                    var status = "Available";
                    var BookedBy = '';
                } else {
                    status = "Booked";
                    BookedBy = '<p><b>Plot Owner:</b> ' + plot.ownerName + '</p>';
                }

                plotDetails[0] = '<div class="info_content" style="text-align: left;">' +
                        '<h3><b>Plot Number</b> ' + plot.szPlotNumber + '</h3>' +
                        '<p><b>Plot Status:</b> ' + status + '</p>' +
                        BookedBy +
                        '<p><b>Plot Details:</b> ' + plot.showDescription + '</p>' +
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
                this.setZoom(14);
                google.maps.event.removeListener(boundsListener);
            });

        }else {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#popup_map").attr('style', 'display:none;');
            $("#popup_description").attr('style', 'display:none;');
            $("#error_header").html("Plot Map View");
            $("#error_message").html(ar_result[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }
    });
}

function viewCemeteryGroundOnMap(idBurialGround) {
    $('#cemetery-full-page-loader').show();
    var selected_burial_ground = $("#selected_burial_ground").val();
    jQuery.get(__BASE_URL_CEMETERY__ + "/plots_map/" + idBurialGround, function (result) {
        var result_ary = result.split("||||");
        $('#cemetery-full-page-loader').hide();
        console.log(result_ary[0]);
        if (jQuery.trim(result_ary[0]) == 'REDIRECT')
        {
            redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
        }
        else if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $('#cemetery-full-page-loader').hide();
            $("#selected_burial_ground").val(idBurialGround);
            $("#table_content").html('');
            $("#table_content").html(result_ary[1]);
            loadPlotsMap();
        } 
        else
        {
            $('#cemetery-full-page-loader').hide();
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Plots');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
            $("#idBurial").val(selected_burial_ground);
        }
    });
    validate_form_fields();
}

function changeCemeteryPlotMapView(iStatus,order) {
    var idBurialGround = $("#idBurial").val();
    var selected_status = $("#selected_status").val();
    $('#cemetery-full-page-loader').show();
    if(order == '1'){
        var url_req = "/order_map_view/";
    }
    else
    {
        url_req = "/plots_map/";
    }
    jQuery.get(__BASE_URL_CEMETERY__ + url_req +idBurialGround+"/"+iStatus, function (result) {
        $('#cemetery-full-page-loader').hide();
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'REDIRECT')
        {
            redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
            $('#cemetery-full-page-loader').hide();
        }
        else if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $("#selected_status").val(iStatus);
            $("#table_content").html('');
            $("#table_content").html($.trim(result_ary[1]));
            loadPlotsMap();
            $('#cemetery-full-page-loader').hide();
        } 
        else
        {
            $('#cemetery-full-page-loader').hide();
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Plots');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
            $(".plot_status_selection").prop('checked', false);
            $("#iPlotStatus_"+selected_status).prop('checked',true);
            $('#cemetery-full-page-loader').hide();
        }
    });
    validate_form_fields();
}

function setAsDefaultImageCemetery(idImage,idPlot,flag) {
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_header").html('Set as default');
    $("#confirmation_message").html("Are you sure you want to set this image as default?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        setAsDefaultImageConfirmationCemetery(idImage,idPlot,flag)
    });
}

function setAsDefaultImageConfirmationCemetery(idImage,idPlot,flag)
{
    $("#popup_open_confirmation").attr('style', 'display:none;');
    $('#cemetery-full-page-loader').show();
   jQuery.get(__BASE_URL_CEMETERY__ + "/setAsDefaultImage/" + idImage + "/"+ idPlot + "/" + flag, function (result) {
        var result_ary = result.split("||||");
        $('#cemetery-full-page-loader').hide();
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
        }
        else if (jQuery.trim(result_ary[0]) == 'REDIRECT')
        {
            redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
        }
        else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Delete Plot Image');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}

function deleteCemeteryPlotImage(idImage,idPlot,flag) {
    $("#popup_open_confirmation").attr('style', 'display:block;');
    if(flag==1){
        $("#confirmation_header").html('Delete Plot Image');   
        $("#confirmation_message").html("Are you sure you want to delete the selected plot image?");
    }
    else if(flag==2){
        $("#confirmation_header").html('Delete Ground Image');   
        $("#confirmation_message").html("Are you sure you want to delete the selected ground image?");
    }
    else{
        $("#confirmation_header").html('Delete Region Image');  
        $("#confirmation_message").html("Are you sure you want to delete the selected region image?");
    }
    
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        deleteCemeteryPlotImageConfirmation(idImage,idPlot,flag);
    });
}

function deleteCemeteryPlotImageConfirmation(idImage,idPlot,flag)
{
    $("#popup_open_confirmation").attr('style', 'display:none;');
    $('#cemetery-full-page-loader').show();
    jQuery.get(__BASE_URL_CEMETERY__ + "/deletePlotImage/" + idImage + "/"+ idPlot + "/" + flag, function (result) {
        var result_ary = result.split("||||");
        $('#cemetery-full-page-loader').hide();
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
        }
        else if (jQuery.trim(result_ary[0]) == 'REDIRECT')
        {
            redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
        }
        else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Delete Plot Image');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}

function saveCemeteryImportPlots() {
    $('#cemetery-full-page-loader').show();
    $("#importPlotsForm").submit();

}


function bulkActionForCemeteryPlots() {
   $("#bulkActionType").val('0');
    $("#bulkChkboxPlotsForm").submit();
}

function bulkAction()
{
    $('#cemetery-full-page-loader').show();
    var bulkActionValue = $('#bulkActions').val();
    if(bulkActionValue!='')
    {
        if(bulkActionValue==1)
        {
            var idGround = $('#idBurialGrounds').find(":selected").val();
            if(idGround)
            {
                $('#cemetery-full-page-loader').hide();
                window.location.href = __BASE_URL_CEMETERY__+"/bulkallplot"+'/'+idGround;
            }
            else
            {
                 $("#bulkActions").val(0);
                 $('#cemetery-full-page-loader').hide();
                showToasterMessage("Select Burial Ground", "Please select burial ground from dropdown", 'error')
            }
        }
        else if(bulkActionValue==2)
        {

            var bulk_checkboxes = false;
            for (var count = 0; count <= 100; count++)
            {
                var plotCheckBox = $(".checkBox_count_" + count).prop('checked');
                if (plotCheckBox == true)
                {
                    bulk_checkboxes = true;
                    break;
                }
            }
            if(bulk_checkboxes)
            {
                $("#bulkActions").val(0);
                $("#bulkChkboxPlotsForm").submit();
            }
            else
            {
                $("#bulkActions").val(0);
                $("#popup_open_success").attr('style', 'display:none;');
                $("#popup_open_confirmation").attr('style', 'display:none;');
                $("#error_header").html('Bulk Action');
                $("#error_message").html('Please select the plots to update.');
                $("#popup_open_error").attr('style', 'display:block;');
            }

        }
        else if(bulkActionValue==3)
        {
            $("#bulkActions").val(0);
            $('#cemetery-full-page-loader').hide();
            $("#popup_open_confirmation").attr('style', 'display:block;');
            $("#confirmation_header").html('Delete plots');   
            $("#confirmation_message").html("Are you sure you want to delete the all plots? ");
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_error").attr('style', 'display:none;');
            $("#confirmation_btn").unbind("click");
            $('#confirmation_btn').click(function () {
                confirmAllDeleteBulkAction();
            });
            
        }
        else if(bulkActionValue==4)
        {
            $("#bulkActions").val(0);
            $('#bulkActionType option:contains("Bulk Action")').prop('selected',true);
            $('#cemetery-full-page-loader').hide();
            $("#popup_open_confirmation").attr('style', 'display:block;');
            $("#confirmation_header").html('Delete plot(s)');   
            $("#confirmation_message").html("Are you sure you want to delete the selected plot(s)? ");
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_error").attr('style', 'display:none;');
            $("#confirmation_btn").unbind("click");
            $('#confirmation_btn').click(function () {
                confirmDeleteBulkAction();
            });
            ;
        }
        else if(bulkActionValue==5)
        {
            var idGround = $('#idBurialGrounds').find(":selected").val();
            if(idGround)
            {
                // e.preventDefault();
                $('#searchForm').attr('action', "/cemetery/allFilterUpdate").submit();
                
            }
            else
            {
                 $("#bulkActions").val(0);
                 $('#cemetery-full-page-loader').hide();
                showToasterMessage("Select Burial Ground", "Please select burial ground from dropdown", 'error')
            }
        }
        $('#cemetery-full-page-loader').hide();
    }
    else
    {
        $("#bulkActionType").val('0');
        $('#cemetery-full-page-loader').hide();
        $("#popup_open_confirmation").attr('style', 'display:none;');
        showToasterMessage("Delete Plots", "Please select option value ", 'error')
    }

}

function confirmAllDeleteBulkAction()
{

   $('#cemetery-full-page-loader').show(); 
   $.post(__BASE_URL_CEMETERY__ + "/allPlotDelete", function (result) {

        var result_ary = result.split("||||");
        if ($.trim(result_ary[0]) == 'SUCCESS') {
            setTimeout(function(){  location.reload(true); }, 2000);
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#confirmation_header").html('');   
            $("#confirmation_message").html("");
            showToasterMessage("Delete Plots", "Plots have been deleted successfully.", 'success')
        }else{
             $('#cemetery-full-page-loader').hide();
            $("#bulkActions").val(0);
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#confirmation_header").html('');   
            $("#confirmation_message").html("");
            showToasterMessage("Delete Plots", "Something is missing.", 'error')
        }
    });
}

function confirmDeleteBulkAction()
{
    $('#cemetery-full-page-loader').show();
    var value = jQuery("#bulkChkboxPlotsForm").serialize();
    $.post(__BASE_URL_CEMETERY__ + "/bulkPlotDelete", value, function (result) {

        var result_ary = result.split("||||");
        if ($.trim(result_ary[0]) == 'SUCCESS') {
            setTimeout(function(){  location.reload(true); }, 2000);
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#confirmation_header").html('');   
            $("#confirmation_message").html("");
            showToasterMessage("Delete Plots", "All plots are deleted except the ones that are already sold.", 'success')
        }
        else if($.trim(result_ary[0]) == 'SOLD')
        {
            setTimeout(function(){  location.reload(true); }, 2000);
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#confirmation_header").html('');   
            $("#confirmation_message").html("");
            showToasterMessage("Delete Plots", result_ary[1], 'error')
        }
        else{
             $('#cemetery-full-page-loader').hide();
            $("#bulkActions").val(0);
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#confirmation_header").html('');   
            $("#confirmation_message").html("");
            showToasterMessage("Delete Plots", "Please select at least one plot for deletion.", 'error')
        }
    });

}

function undoLastCemeteryImportPlots() {

    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_header").html('Undo Last Import');   
    $("#confirmation_message").html("This action is not reversible. Are you sure you want to undo last import?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        confirmUndoBulkAction();
    });
    
}

function confirmUndoBulkAction(){
    $("#popup_open_confirmation").attr('style', 'display:none;');
    $('#cemetery-full-page-loader').show();
    $.post(__BASE_URL_CEMETERY__ + "/UndoImport", function (result) {
        var result_ary = result.split("||||");
        $('#cemetery-full-page-loader').hide();
        if ($.trim(result_ary[0]) == 'SUCCESS') {
            redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
            $('#cemetery-full-page-loader').hide();

        } else {
            redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
            $('#cemetery-full-page-loader').hide();
        }
    });
}

function showCemeterySubscriptionPlans(){
    if($("#subscription-plans").hasClass("hide")){
        $("#subscription-plans").removeClass('hide');
         $('html, body').animate({
            scrollTop: $("#subscription-plans").offset().top
        }, 1000);
    }else{
        $("#subscription-plans").addClass('hide');
    }
}

function selectPaymentPlan(planId){
    
    if(planId != '')  {
        $("#plan").val(planId);
        $(".help-block").remove();
        $("#stripePaymentModal").modal('show');
        $("#cardDetailModal").modal('hide');
        $("#additionalDetailModal").modal('hide');
        var elements = stripe.elements();
        var card = elements.create('card');
        card.mount('#card-element');
        $('#card-errors').html('');
        $('#card-errors').removeClass("alert alert-danger");
        
        $("#subscribe-payment-btn").unbind("click");
        $('#subscribe-payment-btn').click(function () {
            submitPaymentDetails(card,planId);
        });
        
    }else{
        $("#popup_open_success").attr('style', 'display:none;');
        $("#popup_open_confirmation").attr('style', 'display:none;');
        $("#error_header").html('EverArk Cemetery Subscription');
        $("#error_message").html("Something required is missing. Please refresh page and try again.");
        $("#popup_open_error").attr('style', 'display:block;');
    }

}

function submitPaymentDetails(card,planId){
    $("#stripePaymentModal").modal('hide');
    stripe.createToken(card).then(function(result) {
        if (result.error) {
            $('#card-errors').html('');
            $('#card-errors').html(result.error.message);
            $('#card-errors').addClass("alert alert-danger");
        }else{
            $('#cemetery-full-page-loader').show();
            jQuery.post(__BASE_URL_CEMETERY__ + "/subscribeToPaymentPlan",{stripeToken:result.token.id,plan:planId}, function (result) {
                var result_ary = result.split("||||");
                $('#cemetery-full-page-loader').hide();
                if (jQuery.trim(result_ary[0]) == 'SUCCESS')
                {
                    $("#popup_open_success").attr('style', 'display:block;');
                    $("#success_header").html('EverArk Cemetery Subscription');
                    $("#success_message").html("Your selected plan has been successfully subscribed.");
                    $("#btn-success-popup-close-icon").unbind("click");
                    $('#btn-success-popup-close-icon').click(function () {
                        redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
                    });
                    $("#btn-success-popup-close").unbind("click");
                    $('#btn-success-popup-close').click(function () {
                        redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
                    });
                }
                else if (jQuery.trim(result_ary[0]) == 'REDIRECT')
                {
                    redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
                }
                else
                {
                    $("#popup_open_success").attr('style', 'display:none;');
                    $("#popup_open_confirmation").attr('style', 'display:none;');
                    $("#error_header").html('EverArk Cemetery Subscription');
                    $("#error_message").html(result_ary[1]);
                    $("#popup_open_error").attr('style', 'display:block;');
                }
            });
        }
    });
}


function updateCardDetails(){
    
    $(".help-block").remove();
    $("#updatePaymentModal").modal('show');
    $("#cardDetailModal").modal('hide');
    $("#additionalDetailModal").modal('hide');
    var elements = stripe.elements();
    var card = elements.create('card');
    card.mount('#update-card-element');
    $('#card-errors').html('');
    $('#card-errors').removeClass("alert alert-danger");

    $("#update-payment-btn").unbind("click");
    $('#update-payment-btn').click(function () {
        updatePaymentDetails(card);
    });

}

function updatePaymentDetails(card){
    
    $("#updatePaymentModal").modal('hide');
    stripe.createToken(card).then(function(result) {
        if (result.error) {
            $('#card-errors').html('');
            $('#card-errors').html(result.error.message);
            $('#card-errors').addClass("alert alert-danger");
        }else{
            
            $('#cemetery-full-page-loader').show();
            jQuery.post(__BASE_URL_CEMETERY__ + "/updatePaymentData",{stripeToken:result.token.id}, function (result) {
                $('#cemetery-full-page-loader').hide();
                var result_ary = result.split("||||");
                if (jQuery.trim(result_ary[0]) == 'SUCCESS')
                {
                    $("#popup_open_success").attr('style', 'display:block;');
                    $("#success_header").html('Edit Card Detail');
                    $("#success_message").html("Your card detail has been successfully updated.");
                    $("#btn-success-popup-close-icon").unbind("click");
                    $('#btn-success-popup-close-icon').click(function () {
                        redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
                    });
                    $("#btn-success-popup-close").unbind("click");
                    $('#btn-success-popup-close').click(function () {
                        redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
                    });
                        
                }
                else if (jQuery.trim(result_ary[0]) == 'REDIRECT')
                {
                    redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
                }
                else
                {
                    $("#popup_open_success").attr('style', 'display:none;');
                    $("#popup_open_confirmation").attr('style', 'display:none;');
                    $("#error_header").html('Edit Card Detail');
                    $("#error_message").html(result_ary[1]);
                    $("#popup_open_error").attr('style', 'display:block;');
                }
            });
        }
    });
}

function updateSubscriptionPlan(planId){
    if(planId != '')  {
        $("#popup_open_confirmation").attr('style', 'display:block;');
        $("#confirmation_message").html("Are you sure you want change subscription plan?");
        $("#confirmation_header").html('Change Subscription Plan');
        $("#popup_open_success").attr('style', 'display:none;');
        $("#popup_open_error").attr('style', 'display:none;');
        $("#confirmation_btn").unbind("click");
        $('#confirmation_btn').click(function () {
            confirmUpdateSubscriptionPlan(planId);
        });
        
    }else{
        $("#popup_open_success").attr('style', 'display:none;');
        $("#popup_open_confirmation").attr('style', 'display:none;');
        $("#error_header").html('Change Subscription Plan');
        $("#error_message").html("Something required is missing. Please refresh page and try again.");
        $("#popup_open_error").attr('style', 'display:block;');
    }
}

function confirmUpdateSubscriptionPlan(planId){
   $("#popup_open_confirmation").attr('style', 'display:none;');
    
    $('#cemetery-full-page-loader').show();
    jQuery.post(__BASE_URL_CEMETERY__ + "/updateSubscriptionPlan",{plan:planId}, function (result) {
        var result_ary = result.split("||||");
        $('#cemetery-full-page-loader').hide();
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $("#popup_open_success").attr('style', 'display:block;');
            $("#success_header").html('Change Subscription Plan');
            $("#success_message").html("Your plan has been successfully updated.");
            $("#btn-success-popup-close-icon").unbind("click");
            $('#btn-success-popup-close-icon').click(function () {
                redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
            });
            $("#btn-success-popup-close").unbind("click");
            $('#btn-success-popup-close').click(function () {
                redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
            });
        }
        else if (jQuery.trim(result_ary[0]) == 'REDIRECT')
        {
            redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
        }
        else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Change Subscription Plan');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }
    });
}

function deleteCemeteryCustomer(idCustomer) {
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_header").html('Delete Customer');
    $("#confirmation_message").html("Are you sure you want to delete this Customer?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        deleteCemeteryCustomerConfirmation(idCustomer)
    });
}
function deleteCemeteryCustomerConfirmation(idCustomer)
{
    $("#popup_open_confirmation").attr('style', 'display:none;');
    $('#cemetery-full-page-loader').show();
    jQuery.get(__BASE_URL_CEMETERY__ + "/delete_Customer/" + idCustomer, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $('#cemetery-full-page-loader').hide();
            $("#popup_open_success").attr('style', 'display:block;');
            $("#success_header").html('Delete Customer');
            $("#success_message").html("Customer has been successfully deleted.");
            $("#btn-success-popup-close-icon").unbind("click");
            $('#btn-success-popup-close-icon').click(function () {
                redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
            });
            $("#btn-success-popup-close").unbind("click");
            $('#btn-success-popup-close').click(function () {
                redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
            });
            
        } 
        else
        {
            $('#cemetery-full-page-loader').hide();
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Delete Customer');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}

function removeCemeteryDesigneeRecord(idDesignee, custId) {
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_message").html("Are you sure you want to remove this Designee?");
    $("#confirmation_header").html('Remove Designee');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        removeCemeteryDesigneeConfirmation(idDesignee, custId)
    });
}
function removeCemeteryDesigneeConfirmation(idDesignee, custId)
{
    $("#popup_open_confirmation").attr('style', 'display:none;');
    $('#cemetery-full-page-loader').show();
    jQuery.get(__BASE_URL_CEMETERY__ + "/removeDesignee/" + idDesignee+"/"+custId, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $("#popup_open_success").attr('style', 'display:block;');
            $("#success_header").html('Remove Designee');
            $("#success_message").html("Designee has been successfully removed.");
            $("#btn-success-popup-close-icon").unbind("click");
            $('#btn-success-popup-close-icon').click(function () {
                redirect_url(__BASE_URL_CEMETERY__ + result_ary[1] + "/" + custId);
            });
            $("#btn-success-popup-close").unbind("click");
            $('#btn-success-popup-close').click(function () {
                redirect_url(__BASE_URL_CEMETERY__ + result_ary[1] + "/" + custId);
            });
            
        } 
        else
        {
            $('#cemetery-full-page-loader').hide();
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Remove Designee');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}

function showCemeteryUpdatePlotOrderStatusModal() {

    var bulk_checkboxes = false;

    for (var count = 0; count <= 100; count++)
    {
        var plotCheckBox = $(".checkBox_count_" + count).prop('checked');
        if (plotCheckBox == true)
        {
            bulk_checkboxes = true;
            break;
        }
    }

    if (bulk_checkboxes == true)
    {
        validate_form_fields();
        $("#order-status").removeClass('has-error');
        $(".help-block").remove();
        $("#updatePlotOrderStatusModal").modal('show');
        $("#popup_open_success").attr('style', 'display:none;');
        $("#popup_open_error").attr('style', 'display:none;');
        $("#status").val('');
    }
    else
    {
        $("#popup_open_success").attr('style', 'display:none;');
        $("#popup_open_confirmation").attr('style', 'display:none;');
        $("#error_header").html('Update Order Status');
        $("#error_message").html("Please select at least one checkbox to perform bulk action.");
        $("#popup_open_error").attr('style', 'display:block;');
    }
}

function updateCemeteryBulkPlotOrderStatus() {

    $('#cemetery-full-page-loader').show();
    $("#updatePlotOrderStatusModal").modal('hide');
    var bulk_checkboxes = false;

    for (var count = 0; count <= 100; count++)
    {
        var plotCheckBox = $(".checkBox_count_" + count).prop('checked');
        if (plotCheckBox == true)
        {
            bulk_checkboxes = true;
            break;
        }
    }

    if (bulk_checkboxes == true)
    {
        
        var value = jQuery("#bulkChkboxPlotsOrdersForm").serialize();
        var currentStatus = $("#status").val();
        if(parseInt(currentStatus) > 0)
        {
            
            $('#full-page-loader').height($(window).height());
            $('#full-page-loader').width($(window).width());
            $('#full-page-loader').show();
            var newValue  = value+"&status="+currentStatus;
            $.post(__BASE_URL_CEMETERY__ + "/updatePlotsOrderStatus", newValue, function (result) {
                $('#cemetery-full-page-loader').hide();
                var result_ary = result.split("||||");
                if ($.trim(result_ary[0]) == 'SUCCESS') {
                    $("#popup_open_success").attr('style', 'display:block;');
                    $("#success_header").html('Update Order Status');
                    $("#success_message").html("Order status has been successfully updated.");
                    $("#btn-success-popup-close-icon").unbind("click");
                    $('#btn-success-popup-close-icon').click(function () {
                        redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
                    });
                    $("#btn-success-popup-close").unbind("click");
                    $('#btn-success-popup-close').click(function () {
                        redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
                    });

                    
                }
                else
                {
                    $('#full-page-loader').hide();
                    $("#popup_open_success").attr('style', 'display:none;');
                    $("#popup_open_confirmation").attr('style', 'display:none;');
                    $("#error_header").html('Update Order Status');
                    $("#error_message").html(result_ary[1]);
                    $("#popup_open_error").attr('style', 'display:block;');
                }
            });
        }
        else
        {
            $('#cemetery-full-page-loader').hide();
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Update Order Status');
            $("#error_message").html("Please select order status.");
            $("#popup_open_error").attr('style', 'display:block;');
        }
            
    } 
    else
    {
        $('#cemetery-full-page-loader').hide();
        $("#popup_open_success").attr('style', 'display:none;');
        $("#popup_open_confirmation").attr('style', 'display:none;');
        $("#error_header").html('Update Order Status');
        $("#error_message").html("Please select at least one checkbox to perform bulk action.");
        $("#popup_open_error").attr('style', 'display:block;');
    }
    
}

function viewCemeteryPlotsOnMap(idBurialGround) {
    $('#cemetery-full-page-loader').show();
    var selected_burial_ground = $("#selected_burial_ground").val();
    jQuery.get(__BASE_URL_CEMETERY__ + "/plots_map/" + idBurialGround, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $("#selected_burial_ground").val(idBurialGround);
            $("#table_content").html('');
            $("#table_content").html(result_ary[1]);
            loadPlotsMap();
        } 
        else
        {
            $('#cemetery-full-page-loader').hide();
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Plots');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
            $("#idBurial").val(selected_burial_ground);
        }
    });
    validate_form_fields();
}

// function changeCemeteryPlotMapView(iStatus,order) {
//     var idBurialGround = $("#idBurial").val();
//     var selected_status = $("#selected_status").val();
//     $('#cemetery-full-page-loader').show();
//     if(order == '1'){
//         var url_req = "/order_map_view/";
//     }
//     else
//     {
//         url_req = "/plots_map/";
//     }
//     jQuery.get(__BASE_URL_CEMETERY__ + url_req +idBurialGround+"/"+iStatus, function (result) {
//         var result_ary = result.split("||||");
//         if (jQuery.trim(result_ary[0]) == 'SUCCESS')
//         {
//             $("#selected_status").val(iStatus);
//             $("#table_content").html('');
//             $("#table_content").html(result_ary[1]);
//             loadPlotsMap();
//         } 
//         else
//         {
//             $('#cemetery-full-page-loader').hide();
//             $("#popup_open_success").attr('style', 'display:none;');
//             $("#popup_open_confirmation").attr('style', 'display:none;');
//             $("#error_header").html('Plots');
//             $("#error_message").html(result_ary[1]);
//             $("#popup_open_error").attr('style', 'display:block;');
//             $(".plot_status_selection").prop('checked', false);
//             $("#iPlotStatus_"+selected_status).prop('checked',true);
//         }
//     });
//     validate_form_fields();
// }

function cemeteryFilterPlotList(isRegionFilter) {

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
                    $('#cemetery-full-page-loader').show();
                    if ($.trim(isRegionFilter) != '1')
                        cemeteryGetBurialRegions(parseInt(groundFilter));
                }
            })
            .done(function (data)
            {
                $('#cemetery-full-page-loader').hide();
            })

}
function cemeteryGetBurialRegions(groundFilter) {

    jQuery.get(__BASE_URL_CEMETERY__ + "/burialRegions/" + groundFilter, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $("#regionFilter").html('');
            $("#regionFilter").html(result_ary[1]);
        }
    });
}
function CemeteryReportSearchForm() {

    var dtFromDonation = $("#dtFromDonation").val();
    var dtToDonation = $("#dtToDonation").val();
    if ((dtFromDonation != '') && (dtToDonation != '')) {
        var from = Date.parse(dtFromDonation);
        var to = Date.parse(dtToDonation);

        if (to < from) {

            $('#dt_error').html('Donation to date must be greater than from date.');
            $('#dt_error').show();
            $("#dt_error").addClass('fa fa-times-circle');
        } else {

            $('#dt_error').hide();
            $("#searchForm").submit();
        }

    } else {
        $('#dt_error').hide();
        $("#searchForm").submit();
    }
}
function cemetery_remove_dateError()
{
    $('#dt_error').hide();
}
function CemeteryReportOrderSearchForm() {

    var dtFromOrder = $("#dtFromOrder").val();
    var dtToOrder = $("#dtToOrder").val();
    if ((dtFromOrder != '') && (dtToOrder != '')) {
        var from = Date.parse(dtFromOrder);
        var to = Date.parse(dtToOrder);

        if (to < from) {

            $('#dt_error').html('Order To date must be greater than from date.');
            $('#dt_error').show();
            $("#dt_error").addClass('fa fa-times-circle');
        } else {

            $('#dt_error').hide();
            $("#searchForm").submit();
        }

    } else {
        $('#dt_error').hide();
        $("#searchForm").submit();
    }
}

function showHideCemeteryOrderReportFieldSelectionBox(div_id)
{
    if($("#"+div_id).hasClass('show'))
    {
        $("#"+div_id).addClass('hide');
        $("#"+div_id).removeClass('show');
    }
    else
    {
        $("#"+div_id).removeClass('hide');
        $("#"+div_id).addClass('show');
    }
}

function cemeteryDownloadOrderReport()
{
    $('#cemetery-full-page-loader').show();
    var form = $("#searchForm").serialize();
    jQuery.post(__BASE_URL_CEMETERY__ + "/view_order_report",form, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $('#cemetery-full-page-loader').hide();
            window.location = result_ary[1];
        } 
        else
        {
            $('#cemetery-full-page-loader').hide();
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Download Report');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }
    });
}


function downloadCemeteryDonationReport()
{
    $('#cemetery-full-page-loader').show();
    var form = $("#searchForm").serialize();
    jQuery.post(__BASE_URL_CEMETERY__ + "/view_donation_report",form, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $('#cemetery-full-page-loader').hide();
            window.location = result_ary[1];
        } 
        else
        {
            $('#full-page-loader').hide();
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Download Report');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }
    });
}

function closeCemeteryAccount()
{
    $("#addDomainModal").modal('hide');
    $("#cardDetailModal").modal('hide');
    $("#updateRecieptModal").modal('hide');
    $("#additionalDetailModal").modal('hide');
    $("#closeAccountModal").modal('show');
}

function confirmCloseCemeteryAccount()
{
    $('#cemetery-full-page-loader').show();
    $("#closeAccountModal").modal('hide');

    jQuery.post(__BASE_URL_CEMETERY__ + "/confirmCloseCemeteryAccount", function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $('#cemetery-full-page-loader').hide();
            $("#popup_open_success").attr('style', 'display:block;');
            $("#success_header").html('Close Account');
            $("#success_message").html("Your account has been successfully closed.");
            $("#btn-success-popup-close-icon").unbind("click");
            $('#btn-success-popup-close-icon').click(function () {
                redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
            });
            $("#btn-success-popup-close").unbind("click");
            $('#btn-success-popup-close').click(function () {
                redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
            });
        } 
        else
        {
            $('#full-page-loader').hide();
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Close Account');
            $("#error_message").html(result_ary[1]);
            //$("#popup_open_error").attr('style', 'display:block;');
            showToasterMessage('Close Account',result_ary[1],'error');
        }
    });
}

function showStripStepsExplanation()
{
    $('#stripeStepExplanationModal').modal('show');
}

function showPlotDataMissingRequired(){
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_confirmation").attr('style', 'display:none;');
    $("#error_header").html('Plot Data is Incomplete');
    $("#error_message").html('All required plot data needs to be completed before the status can be set to Available');
    $("#popup_open_error").attr('style', 'display:block;');
}

function getCurrencyName(szCurrencyName) {
    $('#cemetery-full-page-loader').show();
    jQuery.get(__BASE_URL_CEMETERY__ + "/getcurrency/" + szCurrencyName, function (result) {
        var result_ary = result.split("||||");
        $('#cemetery-full-page-loader').hide();
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $("#szCurrencyFormat").html('');
            $("#szCurrencyFormat").html(result_ary[1]);
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Currency');
            $("#error_message").html(result_ary[1]);
            //$("#popup_open_error").attr('style', 'display:block;');
            showToasterMessage('Currency',result_ary[1],'error'); 
        }
    });
    validate_form_fields();
}

function saveStripePublishableKey(){
    $("#idStripePublishableKey").modal('hide'); 
    $('#cemetery-full-page-loader').show();
    var szStripeKey = $("#idStrpeKey").val();
    
    if ($.trim(szDomainName) != '') {
        jQuery.get(__BASE_URL_CEMETERY__ + "/updateStripekeys/",{szStripeKey:szStripeKey} , function (result) {
            $('#cemetery-full-page-loader').hide();
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {

                redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
            } 
            else
            {
                $("#popup_open_success").attr('style', 'display:none;');
                $("#popup_open_confirmation").attr('style', 'display:none;');
                $("#error_header").html('Edit Stripe Publishable Key');
                $("#error_message").html(result_ary[1]);
               /// $("#popup_open_error").attr('style', 'display:block;');
               showToasterMessage('Edit Stripe Publishable Key',result_ary[1],'error'); 
            }
        });
    }
    else{
        $('#cemetery-full-page-loader').hide();
    }
}

function saveStripeSecretKey()
{
    $("#idStripeSecretKey").modal('hide'); 
    $('#cemetery-full-page-loader').show();
    var szStripeSecretKey = $("#idStrpeSecretKey").val();
    
    if ($.trim(szDomainName) != '') {
        jQuery.get(__BASE_URL_CEMETERY__ + "/updateStripekeys/",{szStripeSecretKey:szStripeSecretKey} , function (result) {
            $('#cemetery-full-page-loader').hide();
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                redirect_url(__BASE_URL_CEMETERY__ + result_ary[1]);
            } 
            else
            {
                $("#popup_open_success").attr('style', 'display:none;');
                $("#popup_open_confirmation").attr('style', 'display:none;');
                $("#error_header").html('Edit Stripe Secret Key');
                $("#error_message").html(result_ary[1]);
               // $("#popup_open_error").attr('style', 'display:block;');
               showToasterMessage('Edit Stripe Secret Key',result_ary[1],'error'); 
            }
        });
    }
    else{
        $('#cemetery-full-page-loader').hide();
    }
}

function addCemetryNewBurialGround()
{
    $('#cemetery-full-page-loader').show();
    jQuery.post(__BASE_URL_CEMETERY__ + "/newburialmodel",'', function (result) { 
     var result_ary = result.split("||||");
       if (jQuery.trim(result_ary[0]) == 'SUCCESS')
       {
            validate_form_fields();
            $('#cemetery-full-page-loader').hide();
            $('#add-burial-div').html(result_ary[1]);
            $("#addBurialRegionModal").modal('hide');
            $('#addBurialGroundModal').modal('show');
       }
       else
       {
           $('#cemetery-full-page-loader').hide();
            $("#error_header").html('Burial Ground');
            $("#error_message").html('Some things is missing');
            //$("#popup_open_error").attr('style', 'display:block;');
            showToasterMessage('Burial Ground','Some things is missing','error'); 
       }
    }); 
}

function saveCemetryNewBurialGround() {
    var szGroundName = $("#szGroundName").val();
    validate_form_fields();
    $('#cemetery-full-page-loader').show();
    if ($.trim(szGroundName) != '') {
        var form = $("#newBurialGroundForm").serialize();
        jQuery.post(__BASE_URL_CEMETERY__ + "/saveBurialGround", form, function (result) {
            $('#cemetery-full-page-loader').hide();
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                validate_form_fields();
                $("#idBurialGrounds").html('');
                $("#idBurialGrounds").html(result_ary[1]);
                $("#idBurialRegions").html('');
                $("#idBurialRegions").html("<option value=''>Select Burial Region</option>");
                $("#success_header").html('Burial Ground');
                $("#success_message").html(result_ary[2]);

                $("#addBurialGroundModal").modal('hide');
                $("#addBurialRegionModal").modal('hide');
                $("#popup_open_error").attr('style', 'display:none;');
                //$("#popup_open_success").attr('style', 'display:block;');
                showToasterMessage('Burial Ground',result_ary[2],'success');

            } else
            {
                $('#cemetery-full-page-loader').hide();
                $("#addBurialGroundModal").modal('hide');
                $("#addBurialRegionModal").modal('hide');
                $("#popup_open_success").attr('style', 'display:none;');
                $("#error_header").html('Burial Ground');
                $("#error_message").html(result_ary[1]);
                //$("#popup_open_error").attr('style', 'display:block;');
                showToasterMessage('Burial Ground',result_ary[1],'error'); 
            }
        });
    } else {
        $('#cemetery-full-page-loader').hide();
        $("#addBurialGroundModal").modal('hide');
    }
}

function addCemeteryNewBurialRegion() {
    var idBurialGrounds = $("#idBurialGrounds").val();
    $('#cemetery-full-page-loader').show();
    if ($.trim(idBurialGrounds) != '') {
        $('#cemetery-full-page-loader').hide();
        validate_form_fields();
         jQuery.post(__BASE_URL_CEMETERY__ + "/newburialgarden", '', function (result) {
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                validate_form_fields();
                $("#new-region-form-group").removeClass('has-error');
                $(".help-block").remove();
                $('#add-burial-region-div').html(result_ary[1]);
                $("#addBurialRegionModal").modal('show');
                $("#szRegionName").val('');
            }
         });
    } else {
        $('#cemetery-full-page-loader').hide();
        $("#addBurialGroundModal").modal('hide');
        $("#addBurialRegionModal").modal('hide');
        $("#popup_open_success").attr('style', 'display:none;');
        $("#error_header").html('Burial Region');
        $("#error_message").html("Please select burial ground first.");
        //$("#popup_open_error").attr('style', 'display:block;');
        showToasterMessage('Burial Region','Please select burial ground first.', 'error'); 
    }

}

function saveCemetryNewBurialRegion() {
    var szRegionName = $("#szRegionName").val();
    var idBurialGrounds = $("#idBurialGrounds").val();
    $('#cemetery-full-page-loader').show();
    if ($.trim(idBurialGrounds) != '' && $.trim(szRegionName) != '') {
        var form = $("#newBurialRegionForm").serialize();
        var newVal = form + "&idBurialGrounds=" + idBurialGrounds;
        jQuery.post(__BASE_URL_CEMETERY__ + "/saveburialregion", newVal, function (result) {
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                validate_form_fields();
                $('#cemetery-full-page-loader').hide();
                $("#idBurialRegions").html('');
                $("#idBurialRegions").html(result_ary[1]);
                $("#success_header").html('Burial Region');
                $("#success_message").html(result_ary[2]);

                $("#addBurialGroundModal").modal('hide');
                $("#addBurialRegionModal").modal('hide');
                $("#popup_open_error").attr('style', 'display:none;');
                //$("#popup_open_success").attr('style', 'display:block;');
                showToasterMessage('Burial Region',result_ary[2],'success'); 

            } else
            {
                $('#cemetery-full-page-loader').hide();
                $("#addBurialGroundModal").modal('hide');
                $("#addBurialRegionModal").modal('hide');
                $("#popup_open_success").attr('style', 'display:none;');
                $("#error_header").html('Burial Region');
                $("#error_message").html('Please select burial ground first.');
                //$("#popup_open_error").attr('style', 'display:block;');
                showToasterMessage('Burial Region','Please select burial ground first.','error'); 
            }
        });
    } else {
        $('#cemetery-full-page-loader').hide();
        $("#addBurialRegionModal").modal('hide');
    }
}

function openPlotModel()
{
   
$('#cemetery-full-page-loader').show();   
jQuery.post(__BASE_URL_CEMETERY__ + "/openplotmodel", '', function (result) { 
    
     var result_ary = result.split("||||");
     if(jQuery.trim(result_ary[0]) == 'SUCCESS')
     {
        validate_form_fields();
        $('#cemetery-full-page-loader').hide();
        $("#newPlotSize").removeClass('has-error');
        $(".help-block").remove();
        $('#addNewPlotSize-div').html(result_ary[1]);
        $("#addNewPlotSize").modal('show');
        $("#height").val('');
        $("#width").val('');
     }

});

    
}

function CemeteryAddNewPlotSize()
{
    var height = $("#height").val();
    var width = $("#width").val();
    var isPerfrancePage = $("#isPerfrancePage").val();

    $('#cemetery-full-page-loader').show();
    validate_form_fields();

    if(!isNaN(height) && !isNaN(width))
    {
        if(height >0.0 && width>0.0)
        {
            if(isPerfrancePage>0)
            {
                $("#iPerfrancePage").val("1");
            }
            var form = $("#newPlotSize").serialize();
            jQuery.post(__BASE_URL_CEMETERY__ + "/savenewplotsize", form, function (result) {
                var result_ary = result.split("||||");
                if (jQuery.trim(result_ary[0]) == 'SUCCESS')
                {
                    
                    $('#cemetery-full-page-loader').hide();
                    $("#idPlotSizes").html('');
                    if(isPerfrancePage)
                    {
                       
                        $("#idplotsizes").html(result_ary[1]).selectpicker('refresh');  
                        //setTimeout( function() {  $('#idplotsizes').val(arSelectedPlot)}, 5000);
                        $('.selectpicker').selectpicker('refresh'); 
                       

                    }else{
                        $("#idPlotSizes").html(result_ary[1]); 
                    }
                  
                    $("#popup_open_success").attr('style', 'display:none;');
                    // $("#addBurialRegionModal").modal('hide');
                    // $("#success_header").html('Plot size');
                    // $("#success_message").html('Plot size has been successfully added. ');
                    showToasterMessage("Plot size ", "Plot size has been successfully added.", 'success');    
                    $("#addNewPlotSize").modal('hide');
                    $("#addBurialRegionModal").modal('hide');
                    $("#popup_open_error").attr('style', 'display:none;');
                    // $("#popup_open_success").attr('style', 'display:block;');

                } 
                else if(jQuery.trim(result_ary[0]) == 'ALREADY')
                {
                    $('#cemetery-full-page-loader').hide();
                    $('#cemetery-full-page-loader').hide();
                    $("#addNewPlotSize").modal('hide');
                    $("#idPlotConformation-div").html(result_ary[1]);
                    $("#idPlotConformation").modal('show');
                    $('#conformationWidth').val(width);
                    $('#conformationHeight').val(height);
                }
                else
                {
                    $('#cemetery-full-page-loader').hide();
                    $("#addNewPlotSize").modal('hide');
                    $("#addBurialRegionModal").modal('hide');
                    $("#popup_open_success").attr('style', 'display:none;');
                    // $("#error_header").html('Plot size');
                    // $("#error_message").html('Some thing is missing ');
                    //$("#popup_open_error").attr('style', 'display:block;');
                    showToasterMessage('Plot size','Some thing is missing','error');
                }
            });   
        }
        else
        {
            showToasterMessage('Plot size','Length and width will be grater than zero','error');
            $("#addNewPlotSize").modal('hide');
            $("#idPlotConformation").modal('hide');
            $('#cemetery-full-page-loader').hide();
        }
    }
    else
    {
        $('#cemetery-full-page-loader').hide();
        $("#addNewPlotSize").modal('hide');
        $("#idPlotConformation").modal('hide');
        $('#cemetery-full-page-loader').hide();
        showToasterMessage('Plot size','Length and width will be in numeric formate','error');   
    }
}

function plotConformation()
{
    var height = $("#height").val();
    var width = $("#width").val();
    $('#cemetery-full-page-loader').show();
    var isPerfrancePage = $("#isPerfrancePage").val();
    if(height!='' && width!='')
    {
        var form = $("#plotConformation").serialize()+"&height="+ height+"&width="+ width+"&iPerfrancePage="+ isPerfrancePage;
        jQuery.post(__BASE_URL_CEMETERY__ + "/plotsizeconformnation", form, function (result) { 
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                validate_form_fields();
                $('#cemetery-full-page-loader').hide();
                $("#addNewPlotSize").modal('hide');
                $("#idPlotConformation").modal('hide');
                $("#popup_open_error").attr('style', 'display:none;');
               // $("#popup_open_success").attr('style', 'display:block;');
                $('#conformationWidth').val('');
                $('#conformationHeight').val('');
                
                
                $("#idPlotConformation").html('');
                if(isPerfrancePage)
                {
                   
                    $("#idplotsizes").html(result_ary[1]).selectpicker('refresh');  
                    //setTimeout( function() {  $('#idplotsizes').val(arSelectedPlot)}, 5000);
                    $('.selectpicker').selectpicker('refresh'); 
                   

                }else{
                    $("#idPlotSizes").html(result_ary[1]); 
                }
                // $("#success_header").html('Plot size');
                // $("#success_message").html('Plot has been mapped to your preferences ');
                showToasterMessage('Plot size','Plot has been mapped to your preferences ','success');

                
            } 
        });  
    }
    else
    {
        $('#cemetery-full-page-loader').hide();
        $("#idPlotConformation").modal('hide');
    }
}
function checkedCemeteryMapviewID() {

    $("#bulkActionType").val('1');
    $("#isMapView").val('1');
    $("#bulkChkboxPlotsForm").submit();
}

$(document).ready(function(){
    $('#information_icon').tooltip(); 
    $('[data-toggle="tooltip"]').tooltip()
});

function OpenProfileModelPopUp()
{
    $('#cemterImageModelPopup').modal('show');
}

function OpenSendDeepPopUp(szRefrenceNumber, iOrderNumber, idPlot , isPlotDetailspage, selectedPlotNumber)
{

    $('#cemetery-full-page-loader').show();
    if(isPlotDetailspage)
    {
        $('#cemetery-full-page-loader').hide();
        $("#show-plot-refrence").text(szRefrenceNumber);
         $("#show-plot-number").text(selectedPlotNumber);
        $("#szRefrenceNumber").val(szRefrenceNumber);
        $("#iOrder").val(iOrderNumber);
        $("#idPlot").val(idPlot);
        $('#sendDeedToUser').modal('show');
        $('input:checkbox').removeAttr('checked');
    }
    else if(szRefrenceNumber!='')
    {
        $('input:checkbox').removeAttr('checked');
        jQuery.get(__BASE_URL_CEMETERY__ + "/getPlotOrdersDetails/",{szRefrenceNumber:szRefrenceNumber,idPlot:idPlot} , function (result) {
            $('#cemetery-full-page-loader').hide();
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                $('#sendDeedToUser').modal('show');
                $("#show-plot-number").text(szRefrenceNumber);
                $("#show-plotNumber").text(selectedPlotNumber);
                $("#szRefrenceNumber").val(szRefrenceNumber);
                $("#iOrder").val(iOrderNumber);
                $("#idPlot").val(idPlot);
            } 
            else
            {
                $("#iRedirectOrderId").val(iOrderNumber);
                $('#ErrorMesaagePLots').modal('show');
            }
        });
        
    }
    
}

function goOrderListPage()
{
  var iOrderNumber = $("#iRedirectOrderId").val();
   window.location.href = __BASE_URL_CEMETERY__+"/view_order_details/"+iOrderNumber+"#portlet_tab2"; 
}

function openAddpagepopup()
{
    $('#pagenation').modal('show');
}
function addPagination()
{
    var pagniatioValue = $('#idCustoPagenation').val();
    $('#cemetery-full-page-loader').show();
    if(pagniatioValue!='')
    {
        if(!isNaN(pagniatioValue))
        {
            if(pagniatioValue<11)
            {
                $('#cemetery-full-page-loader').hide();
                $("#idCustoPagenation").val(''); 
                showToasterMessage('Records Limit','Records limit should be greater than 10.','error'); 
            }
            else
            {
                if(pagniatioValue<=1000)
                {
                    var isExits = false;                     
                    var values = $("#perPageRecord>option").map(function() { 
                        if($(this).val()==pagniatioValue)
                        {
                           isExits= true;  
                           $("#pagenation").modal("hide");
//                           $("#perPageRecord").val(pagniatioValue);
                            $('#perPageRecord').val(pagniatioValue).change();
                           $("#idCustoPagenation").val(''); 
                        }
                    
                    });
                    if(!isExits)
                    {
                        $("#idCustoPagenation").val('');
                        var html ='<option value="'+pagniatioValue+'" >'+pagniatioValue+'</option>'; 
                        $("#perPageRecord").append(html);
                        $("#perPageRecord").val(pagniatioValue);
                        setTimeout(function(){  sortListingData(); }, 500);
                       
                        $("#pagenation").modal("hide");
                        $('#cemetery-full-page-loader').hide();
                    }
                }
                else
                {
                    $("#pagenation").modal("hide");
                     $("#idCustoPagenation").val('');
                    $('#cemetery-full-page-loader').hide();
                    showToasterMessage('Records Limit','Records limit should be less than 1000.','error');
                }
            }
        }
        else
        {
            $('#cemetery-full-page-loader').hide();
             $("#idCustoPagenation").val('');
            showToasterMessage('Records Limit','Records limit should be a number.','error');
        }
        
    }
    else
    {
        $('#cemetery-full-page-loader').hide();
        showToasterMessage('Records Limit','Records limit is required.','error');
    }
}
