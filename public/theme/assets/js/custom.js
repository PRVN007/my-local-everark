/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $(".popupModals").click(function (event) {
        if ($('#popup_outside,#popup_error_outside,#popup_success_outside,#popup_map_outside,#popup_description_outside').is(":visible")) {
            if (!$(event.target).closest('#popup_outside,#popup_error_outside,#popup_success_outside,#popup_map_outside,#popup_description_outside').length) {
                $('#popup_open_success').attr('style', 'display:none;');
                $('#popup_open_error').attr('style', 'display:none;');
                $('#popup_open_confirmation').attr('style', 'display:none;');
                $('#popup_map').attr('style', 'display:none;');
                $('#popup_description').attr('style', 'display:none;');
            }
        }
    });
    $(document).on('click', '.pagination a', function (event)
    {
        $('li').removeClass('active');
        $(this).parent('li').addClass('active');
        event.preventDefault();
        var myurl = $(this).attr('href');
        var page = $(this).attr('href').split('page=')[1];
        getPaginationData(page);
    });
});
$(window).on('hashchange', function () {
    if (window.location.hash) {
        var page = window.location.hash.replace('#', '');
        if (page == Number.NaN || page <= 0) {
            return false;
        } else {
            getPaginationData(page);
        }
    }
});
function cancelPopup(id_popup, clearHTML)
{
    if ($.trim(clearHTML) != '')
    {
        jQuery('#' + id_popup).html('');
    }

    jQuery('#' + id_popup).attr("style", 'display:none;');
}

function redirect_url(page_url)
{
    if (page_url != '')
    {
        window.location = page_url;
    } else
    {
        return false;
    }
}

function redirect_url_new_tab(page_url)
{
    if (page_url != '')
    {
        window.open(page_url);
        return false;
    } else
    {
        return false;
    }
}

function getBurialGround(idCemetery) {

    if(idCemetery!='')
    {
         $('#full-page-loader').height($(window).height());
        $('#full-page-loader').width($(window).width());
        $('#full-page-loader').show();
        jQuery.get(__ADMIN_BASE_URL__ + "/burialGroundsByCemetery/" + idCemetery, function (result) {
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                $('#full-page-loader').hide();
                $("#idBurialGrounds").html('');
                $("#idBurialGrounds").html(result_ary[1]);
                // $("#idBurialRegions").html('');
                $('#idBurialRegions option:contains("Select Burial Garden")').prop('selected',true);
                getPlotSizeById(idCemetery)
                
            } else
            {
                $('#full-page-loader').hide();
                $("#popup_open_success").attr('style', 'display:none;');
                $("#popup_open_confirmation").attr('style', 'display:none;');
                $("#error_header").html('Burial Gardens');
                $("#error_message").html(result_ary[1]);
                $("#popup_open_error").attr('style', 'display:block;');
            }
        });
        validate_form_fields();
    }
    else
    {
        // $("#idBurialGrounds").html('');
        // $("#idBurialRegions").html('');
        $('#idBurialGrounds option:contains("Select Burial Ground")').prop('selected',true);
        $('#idBurialRegions option:contains("Select Burial Garden")').prop('selected',true);
    }
}

function getBurialRegions(idBurialGround) {
    if(idBurialGround!='')
    {
        $('#full-page-loader').height($(window).height());
        $('#full-page-loader').width($(window).width());
        $('#full-page-loader').show();
        jQuery.get(__ADMIN_BASE_URL__ + "/burialRegions/" + idBurialGround, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $('#full-page-loader').hide();
           // $("#idBurialRegions").html('');
            $('#idBurialRegions option:contains("Select Burial Garden")').prop('selected',true);
            $("#idBurialRegions").html(result_ary[1]);
        } else
        {
            $('#full-page-loader').hide();
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Burial Regions');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }
        });
        validate_form_fields();
    }
    else
    {
        //$("#idBurialRegions").html('');
        $('#idBurialRegions option:contains("Select Burial Garden")').prop('selected',true);
    }
}



function getPlotSizeById(idCemetery) {
    if(idCemetery!='')
    {
        $('#full-page-loader').height($(window).height());
        $('#full-page-loader').width($(window).width());
        $('#full-page-loader').show();
        jQuery.get(__ADMIN_BASE_URL__ + "/getPlotSize/" + idCemetery, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $('#full-page-loader').hide();
            $("#idPlotSizes").html(result_ary[1]);
        } else
        {
            $('#full-page-loader').hide();
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Plot size');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }
        });
        validate_form_fields();
    }
    else
    {
        $("#idPlotSizes").html('');
    }
}





function addNewBurialGround() {
    validate_form_fields();
    $("#new-ground-form-group").removeClass('has-error');
    $(".help-block").remove();
    $("#addBurialGroundModal").modal('show');
    $("#addBurialRegionModal").modal('hide');
    $("#szGroundName").val('');
}

function saveNewBurialGround() {
    var szGroundName = $("#szGroundName").val();

    if ($.trim(szGroundName) != '') {
        var form = $("#newBurialGroundForm").serialize();
        jQuery.post(__ADMIN_BASE_URL__ + "/saveBurialGround", form, function (result) {
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                $("#idBurialGrounds").html('');
                $("#idBurialGrounds").html(result_ary[1]);
                $("#idBurialRegions").html('');
                $("#idBurialRegions").html("<option value=''>Select Burial Region</option>");
                $("#success_header").html('Burial Ground');
                $("#success_message").html(result_ary[2]);

                $("#addBurialGroundModal").modal('hide');
                $("#addBurialRegionModal").modal('hide');
                $("#popup_open_error").attr('style', 'display:none;');
                $("#popup_open_success").attr('style', 'display:block;');

            } else
            {
                $("#addBurialGroundModal").modal('hide');
                $("#addBurialRegionModal").modal('hide');
                $("#popup_open_success").attr('style', 'display:none;');
                $("#error_header").html('Burial Ground');
                $("#error_message").html(result_ary[1]);
                $("#popup_open_error").attr('style', 'display:block;');
            }
        });
    } else {
        $("#addBurialGroundModal").modal('hide');
    }
}


function addNewBurialRegion() {
    var idBurialGrounds = $("#idBurialGrounds").val();
    if ($.trim(idBurialGrounds) != '') {
        validate_form_fields();
        $("#new-region-form-group").removeClass('has-error');
        $(".help-block").remove();
        $("#addBurialRegionModal").modal('show');
        $("#szRegionName").val('');
    } else {
        $("#addBurialGroundModal").modal('hide');
        $("#addBurialRegionModal").modal('hide');
        $("#popup_open_success").attr('style', 'display:none;');
        $("#error_header").html('Burial Region');
        $("#error_message").html("Please select burial ground first.");
        $("#popup_open_error").attr('style', 'display:block;');
    }

}

function saveNewBurialRegion() {
    var szRegionName = $("#szRegionName").val();
    var idBurialGrounds = $("#idBurialGrounds").val();
    if ($.trim(szRegionName) != '' && $.trim(idBurialGrounds) != '') {
        var form = $("#newBurialRegionForm").serialize();
        var newVal = form + "&idBurialGrounds=" + idBurialGrounds;
        jQuery.post(__ADMIN_BASE_URL__ + "/saveBurialRegion", newVal, function (result) {
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                $("#idBurialRegions").html('');
                $("#idBurialRegions").html(result_ary[1]);
                $("#success_header").html('Burial Region');
                $("#success_message").html(result_ary[2]);

                $("#addBurialGroundModal").modal('hide');
                $("#addBurialRegionModal").modal('hide');
                $("#popup_open_error").attr('style', 'display:none;');
                $("#popup_open_success").attr('style', 'display:block;');

            } else
            {
                $("#addBurialGroundModal").modal('hide');
                $("#addBurialRegionModal").modal('hide');
                $("#popup_open_success").attr('style', 'display:none;');
                $("#error_header").html('Burial Region');
                $("#error_message").html('Please select burial ground first.');
                $("#popup_open_error").attr('style', 'display:block;');
            }
        });
    } else {
        $("#addBurialGroundModal").modal('hide');
    }
}

function removeDescriptionError() {
    $("#plot-image-group").removeClass('has-error');
    $("#plot-image-help-block").remove();
    $("#description-group").removeClass('has-error');
    $("#description-help-block").remove();
}

function removeGroundNameError(obj) {
    $("#szGroundName_error").removeClass('has-error');
    $("#szGroundName-help-block").remove();
    $('#szGroundName_error').parent().next().remove();

}
function removeGroundDescriptionError(obj) {
    $("#szGroundDescription_error").removeClass('has-error');
    $("#szGroundDescription-help-block").remove();
    $('#szGroundDescription_error').parent().next().remove();

}

function removePlotImage(data) {
    $("#remove_div" + data).remove();
}

function removeImageBlockByClass(className){
    $("."+className).remove();
}

function removeImageError(idDiv) {

    $("#" + idDiv).removeClass('has-error');
    $("#" + idDiv + "-block").remove();
}

function deletePlotRecord(idPlot) {
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_header").html('Delete Plot');
    $("#confirmation_message").html("This action is not reversible. Are you sure you want to delete this Plot?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        deletePlotConfirmation(idPlot)
    });
}
function deletePlotConfirmation(idPlot)
{
    jQuery.get(__ADMIN_BASE_URL__ + "/deletePlot/" + idPlot, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__ADMIN_BASE_URL__ + result_ary[1]);
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

function loginAsCustomer(idCustomer)
{
    jQuery.get(__ADMIN_BASE_URL__ + "/loginAsCustomer/" + idCustomer, function (result) {
        ar_result = result.split('||||');
        if (ar_result[0] == "SUCCESS") {
            window.open(__BASE_URL__ + '/' + ar_result[1], '_blank');
        }
    });
}


function view_designee(idCustomer)
{
    var attr_class = $("#block_" + idCustomer).attr('class');

    if ($.trim(attr_class) == "hide") 
    {
        $("#block_" + idCustomer).removeClass('hide');

        $("#view_icon_" + idCustomer).attr('title', 'Hide Designee');

    } 
    else 
    {
        $("#block_" + idCustomer).addClass('hide');

        $("#view_icon_" + idCustomer).attr('title', 'View Designee');
    }
   
}


function viewAdminPlotOnMap(idPlot, idBurialGrounds) {
    jQuery.get(__ADMIN_BASE_URL__ + "/viewAdminPlotOnMap/" + idBurialGrounds+'/'+idPlot, function (result) {
        ar_result = result.split('||||');
        if ($.trim(ar_result[0]) == "SUCCESS") {
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
                } else if (plot.iAvailable == '2') {
                    status = "Pending";
                    BookedBy = '<p><b>Plot Owner:</b> ' + plot.ownerName + '</p>';
                }
                else if (plot.iAvailable == '3') {
                    status = "Unavailable or Booked";
                    BookedBy = '<p><b>Plot Owner:</b> ' + plot.ownerName + '</p>';
                }
                else if (plot.iAvailable == '0') {
                    status = "On Hold";
                    BookedBy = '';
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

        }
    });
}

function viewPlotOnMap(idPlot, idBurialGrounds) {
    jQuery.get(__BASE_URL__ + "/viewPlotOnMap/" + idBurialGrounds+'/'+idPlot, function (result) {
        ar_result = result.split('||||');
        if ($.trim(ar_result[0]) == "SUCCESS") {
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
                } else if (plot.iAvailable == '2') {
                    status = "Pending";
                    BookedBy = '<p><b>Plot Owner:</b> ' + plot.ownerName + '</p>';
                }
                else if (plot.iAvailable == '3') {
                    status = "Unavailable or Booked";
                    BookedBy = '<p><b>Plot Owner:</b> ' + plot.ownerName + '</p>';
                }
                else if (plot.iAvailable == '0') {
                    status = "On Hold";
                    BookedBy = '';
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

        }
    });
}

function viewPlotFullDescription(idPlot) {
    jQuery.get(__BASE_URL__ + "/plotDescription/" + idPlot, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#popup_map").attr('style', 'display:none;');
            $("#description_header").html('');
            $("#description_message").html('');
            $("#description_header").html(result_ary[1]);
            $("#description_message").html(result_ary[2]);
            $("#popup_description").attr('style', 'display:block;');
        } else {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#popup_map").attr('style', 'display:none;');
            $("#popup_description").attr('style', 'display:none;');
            $("#error_header").html(result_ary[1]);
            $("#error_message").html(result_ary[2]);
            $("#popup_open_error").attr('style', 'display:block;');
        }
    });
}

function removeDesigneeRecord(idDesignee, custId) {
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_message").html("Are you sure you want to remove this Designee?");
    $("#confirmation_header").html('Remove Designee');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        removeDesigneeConfirmation(idDesignee, custId)
    });
}
function removeDesigneeConfirmation(idDesignee, custId)
{
    jQuery.get(__ADMIN_BASE_URL__ + "/removeDesignee/" + idDesignee+"/"+custId, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__ADMIN_BASE_URL__ + result_ary[1] + "/" + custId);
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

function viewPlotImages() {
    $("#ImagesModal").modal('show');
}
function viewPlotImagesFront(idPlot) {
    jQuery.get(__BASE_URL__ + "/plotImages/" + idPlot, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $("#ImagesModal").modal('show');
            $("#plot_images").html('');
            $("#plot_images").html(result_ary[1]);
        } else {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#popup_map").attr('style', 'display:none;');
            $("#popup_description").attr('style', 'display:none;');
            $("#error_header").html(result_ary[1]);
            $("#error_message").html(result_ary[2]);
            $("#popup_open_error").attr('style', 'display:block;');
        }
    });
}

function saveNewRelationship(idDesignee, custId) {
    var szRelationship = jQuery('#szRelationship').val();
    if (szRelationship == '') {
        $('#error_Id').html('Dispatch quantity must be greater than 0.');
    } else {
        var form = $("#updateRelationshipForm").serialize();
        var newVal = form + "&idDesignee=" + idDesignee;
        jQuery.post(__ADMIN_BASE_URL__ + "/saveRelationshipStatus", newVal, function (result) {
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                redirect_url(__ADMIN_BASE_URL__ + result_ary[1] + "/" + custId);

            } else
            {
                $("#popup_open_success").attr('style', 'display:none;');
                $("#popup_open_confirmation").attr('style', 'display:none;');
                $("#error_header").html('change Relationship');
                $("#error_message").html(result_ary[1]);
                $("#updateRelationshipModal").modal('hide');
                $("#popup_open_error").attr('style', 'display:block;');
            }
        });

    }

}
function removeProfileImage() {
    $("#old_profile_image").attr("style", "display:none;");
    $("#admin-profile-upload-new").attr("style", "display:none;");
    $("#file-7").attr("required", "required");
    $("#szProfileImage").attr("style", "display:block;");
}
function removeCemeteryImage() {
    $("#old_cemetery_image").attr("style", "display:none;");
    $("#cemetery-upload-new").attr("style", "display:none;");
    $("#file-7").attr("required", "required");
    $("#szImage").attr("style", "display:block;");
}
function removeGroundImage() {
    $("#old_szContractFormName1").attr("style", "display:none;");
    $("#admin-profile-upload-new").attr("style", "display:none;");
    $("#old_szContractFormName").val('');
    $("#file-7").attr("required", "required");
    $("#szContractFormName").attr("style", "display:block;");
}


function removeImage() 
{
    $("#old_szPlotDeed1").attr("style", "display:none;");
    $("#old_szPlotDeed").val('');
    $("#szPlotDeed").attr("required", "required");
    $("#szPlotDeed").attr("style", "display:block;");
}


function addNewsletter() {
    $("#addNewsletter").modal('show');
}
function saveNewNewsletter()
{
    var szEmail = $("#szEmail_id").val();
    if (szEmail == '') {
        $("#szEmail_id").addClass('requires');
    }
    jQuery.get(__ADMIN_BASE_URL__ + "/addNewNewsletter/" + szEmail, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__ADMIN_BASE_URL__ + result_ary[1]);
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
function deleteGroundRecord(idGround) {
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_header").html('Delete Burial Ground');
    $("#confirmation_message").html("Are you sure you want to delete this burial ground?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        deleteBurialGroundConfirmation(idGround)
    });
}
function deleteBurialGroundConfirmation(idGround)
{
    jQuery.get(__ADMIN_BASE_URL__ + "/deleteGround/" + idGround, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__ADMIN_BASE_URL__ + result_ary[1]);
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
function deleteRegionRecord(idRegion, idGround) {

    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_header").html('Delete Burial Region');
    $("#confirmation_message").html("Are you sure you want to delete this burial region?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        deleteBurialRegionConfirmation(idRegion, idGround)
    });
}
function deleteBurialRegionConfirmation(idRegion, idGround) {
    jQuery.get(__ADMIN_BASE_URL__ + "/deleteRegion/" + idRegion + "/" + idGround, function (result) {

        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__ADMIN_BASE_URL__ + result_ary[1]);
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

function deleteUserRecord(idUser) {
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_header").html('Delete User');
    $("#confirmation_message").html("Are you sure you want to delete this User?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        deleteUserConfirmation(idUser)
    });
}
function deleteUserConfirmation(idUser)
{
    jQuery.post(__ADMIN_BASE_URL__ + "/deleteUser/" + idUser, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__ADMIN_BASE_URL__ + result_ary[1]);
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
function userStatus(idUser, flag) {

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
        userStatusConfirmation(idUser, flag)
    });
}
function userStatusConfirmation(idUser, flag)
{
    jQuery.get(__ADMIN_BASE_URL__ + "/changeUserStatus/" + idUser + "/" + flag, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__ADMIN_BASE_URL__ + result_ary[1]);
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
function loginAsUser(idUser)
{
    jQuery.get(__ADMIN_BASE_URL__ + "/loginAsUser/" + idUser, function (result) {
        ar_result = result.split('||||');
        if (ar_result[0] == "SUCCESS") {
            window.open(__BASE_URL__ + '/' + ar_result[1], '_blank');
        }
    });
}
function moveGroundUpDownAttribute(idAttribute, orderBy)
{
    jQuery.get(__ADMIN_BASE_URL__ + "/moveGroundUpDownAttributeData/" + idAttribute + "/" + orderBy, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL__ + result_ary[1]);
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Ground Order Error');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}
function removeContractErrorForm() {

    var szGroundName = $("#szGroundName").val();
    var szGroundDescription = $("#szGroundDescription").val();
    var file = $("#file-7").val();

    if (!szGroundName) {

        $('#error_form1').html('Please add ground name.');
        $('#error_form1').show();
        $("#error_form1").addClass('fa fa-times-circle');
    } else {
        $('#error_form1').hide();
    }
    if (!szGroundDescription) {

        $('#error_form2').html('Please add ground description.');
        $('#error_form2').show();
        $("#error_form2").addClass('fa fa-times-circle');
    } else {
        $('#error_form2').hide();
    }

    if (!file) {

        $('#error_form').html('Please select a pdf file.');
        $('#error_form').show();
        $("#error_form").addClass('fa fa-times-circle');
    } else {
        var fileExtention = (/[.]/.exec(file)) ? /[^.]+$/.exec(file) : undefined;
        if (fileExtention == 'pdf') {
            $('#error_form').hide();

        } else {
            $('#error_form').html('File extention must be pdf only.');
            $('#error_form').show();
            $("#error_form").addClass('fa fa-times-circle');
            return false;
        }
    }
    if ($.trim(szGroundName) != '' && $.trim(szGroundDescription) != '' && $.trim(file) != '') {
        {
            $("#GroundForm").submit();
        }
    }
}
function remove_formError1()
{
    $('#error_form1').hide();
}
function remove_formError2()
{
    $('#error_form2').hide();
}
function remove_pdfError()
{
    $('#error_form').hide();
    $('#Plot_Deed').removeClass('has-error');
    $('#contract-group').removeClass('has-error');
}
function editGroundForm() {

    var szGroundName = $("#szGroundName").val();
    var szGroundDescription = $("#szGroundDescription").val();
    var file_old = $("#old_szContractFormName").val();
    var file_new = $("#szContractFormName").val();

    if (file_old) {
        var file = file_old;
    } else {
        var file = file_new;
    }
    if (!szGroundName) {

        $('#error_form1').html('Please add ground name.');
        $('#error_form1').show();
        $("#error_form1").addClass('fa fa-times-circle');
    } else {
        $('#error_form1').hide();
    }
    if (!szGroundDescription) {

        $('#error_form2').html('Please add ground description.');
        $('#error_form2').show();
        $("#error_form2").addClass('fa fa-times-circle');
    } else {
        $('#error_form2').hide();
    }

    if (!file) {

        $('#error_form_contract').html('Please select a pdf file.');
        $('#error_form_contract').show();
        $("#error_form_contract").addClass('fa fa-times-circle');
    } else {
        var fileExtention = (/[.]/.exec(file)) ? /[^.]+$/.exec(file) : undefined;
        if (fileExtention == 'pdf') {
            $('#error_form_contract').hide();

        } else {
            $('#error_form_contract').html('File extention must be pdf only.');
            $('#error_form_contract').show();
            $("#error_form_contract").addClass('fa fa-times-circle');
            return false;
        }
    }
    if ($.trim(szGroundName) != '' && $.trim(szGroundDescription) != '' && $.trim(file) != '') {
        {
            $("#editrGoundForm").submit();
        }
    }
}
function checkRole(obj) {
    var role = $("#iRole").val();
    if (role == '3') {
        jQuery('#pages').attr('style', 'display:block');
    } else {
        jQuery('#pages').attr('style', 'display:none');
    }
}

function submitAddAdminForm() {
    var role = $("#iRole").val();
    if ((role == 1) || (role == 2) || (role == '')) {
        $("#addUserForm").submit();
    } else {
        var szGroundName = $("#szGroundName").val();
        var szGroundDescription = $("#szGroundDescription").val();
        var file = $("#szContractFormName").val();

        if (!szGroundName) {

            $('#error_form1').html('Please add ground name.');
            $('#error_form1').show();
            $("#error_form1").addClass('fa fa-times-circle');
        } else {
            $('#error_form1').hide();
        }
        if (!szGroundDescription) {

            $('#error_form2').html('Please add ground description.');
            $('#error_form2').show();
            $("#error_form2").addClass('fa fa-times-circle');
        } else {
            $('#error_form2').hide();
        }

        if (!file) {

            $('#error_form').html('Please select a pdf file.');
            $('#error_form').show();
            $("#error_form").addClass('fa fa-times-circle');
        } else {
            var fileExtention = (/[.]/.exec(file)) ? /[^.]+$/.exec(file) : undefined;
            if (fileExtention == 'pdf') {
                $('#error_form').hide();

            } else {
                $('#error_form').html('File extention must be pdf only.');
                $('#error_form').show();
                $("#error_form").addClass('fa fa-times-circle');
                return false;
            }
        }
        if ($.trim(szGroundName) != '' && $.trim(szGroundDescription) != '' && $.trim(file) != '') {
            {
                $("#GroundForm").submit();
            }
        }
    }

}
function removePagesError() {
    $("#page-group").removeClass('has-error');
    $(".row").removeClass('has-error');
    $("#page-help-block").remove();
//    $('#page-group').parent().next().remove();

}
//function showPermissionRadio(obj){
////   jQuery('#permissionType_'+obj).attr('style', 'display:block'); 
////   jQuery('#permissionType_'+obj).attr('style', 'display:none');    
//}
function showPermissionRadio(idPage)
{
    var attr_class = $("#permissionType_" + idPage).attr('class');

    if ($.trim(attr_class) == "hide") {
        $("#permissionType_" + idPage).removeClass('hide');


    } else {
        $("#permissionType_" + idPage).addClass('hide');
    }
}
function removeProfileImageError() {
    $("#profile-image-group").removeClass('has-error');
    $("#profile-image-help-block").remove();
    $('#profile-image-group').parent().next().remove();

}
function checkEmailExist(email, idAdmin, flag)
{

    jQuery.get(__ADMIN_BASE_URL__ + "/CheckAdminEmailExist/" + email + "/" + idAdmin + "/" + flag, function (result) {
        var result_ary = result.split("||||");

        if (jQuery.trim(result_ary[0]) == 'ERROR')
        {
            $('#email_form').html(result_ary[1]);
            $("#email_form").removeClass('hide');
            $("#email_form").addClass('fa fa-times-circle');
        }



    });
}
//function view_order_report(orderType,dtFromOrder,dtToOrder){
//  jQuery.get(__ADMIN_BASE_URL__+"/view_order_report/"+orderType+"/"+dtFromOrder+"/"+dtToOrder,function(result){
//        var result_ary = result.split("||||");
//        var URL = __BASE_URL__ + "/reporting/" + result_ary[1];
//        window.open(URL, '_blank');
//     
//    }); 
//   
//}
function adminFilterPlotList(isRegionFilter) {

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
                        adminGetBurialRegions(parseInt(groundFilter));
                }
            })
            .done(function (data)
            {
                deactivateLoader();
//        console.log(data);


            })

}
function adminGetBurialRegions(groundFilter) {

    jQuery.get(__BASE_URL__ + "/filteredBurialRegions/" + groundFilter, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $("#regionFilter").html('');
            $("#regionFilter").html(result_ary[1]);
        }
    });
}
function ReportSearchForm() {

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
function remove_dateError()
{
    $('#dt_error').hide();
}
function ReportOrderSearchForm() {

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
function removeEmailError()
{
     $("#email_form").addClass('hide');
      $("#email_form").addClass('hide');
}

function deletePlotImage(idImage,idPlot,flag) {
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
        deletePlotImageConfirmation(idImage,idPlot,flag)
    });
}
function deletePlotImageConfirmation(idImage,idPlot,flag)
{
        jQuery.get(__ADMIN_BASE_URL__ + "/deletePlotImage/" + idImage + "/"+ idPlot + "/" + flag, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__ADMIN_BASE_URL__ + result_ary[1]);
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Delete Plot Image');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}
function setAsDefaultImage(idImage,idPlot,flag) {
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_header").html('Set as default');
    $("#confirmation_message").html("Are you sure you want to set this image as default?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        setAsDefaultImageConfirmation(idImage,idPlot,flag)
    });
}
function setAsDefaultImageConfirmation(idImage,idPlot,flag)
{
   jQuery.get(__ADMIN_BASE_URL__ + "/setAsDefaultImage/" + idImage + "/"+ idPlot + "/" + flag, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__ADMIN_BASE_URL__ + result_ary[1]);
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Delete Plot Image');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}

function deleteAccountInfo(idAccountInfo) 
{
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#modal_confirmation_header").html('Delete Social Account');
    $("#modal_confirmation_message").html("Are you sure you want to delete selected Social account?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        deleteAccountInfoConfirmation(idAccountInfo)
    });
}


function deleteAccountInfoConfirmation(idAccountInfo)
{
    jQuery.get(__BASE_URL__ + "/socialAccountInfo/deleteAccountInfo/" + idAccountInfo, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL__ + result_ary[1]);
        } 
        else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Delete Social Account Confirmation');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}

function deleteAssignedAccountInfo(idAccountInfo) 
{
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#modal_confirmation_header").html('Delete Social Account');
    $("#modal_confirmation_message").html("Are you sure you want to delete selected Social account?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        deleteAssignedAccountInfoConfirmation(idAccountInfo)
    });
}


function deleteAssignedAccountInfoConfirmation(idAccountInfo)
{
    jQuery.get(__BASE_URL__ + "/assingedSocialAccountInfo/deleteAccountInfo/" + idAccountInfo, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL__ + result_ary[1]);
        } 
        else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Delete Social Account Confirmation');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}


function infoVisibleToDesignee(idAccountInfo,iVisibleToDesignee) 
{ 
    if(iVisibleToDesignee!= 1)
        var text = 'Show' ;
    else
        text = 'Hide' ;
    
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#modal_confirmation_header").html('Social Account Status');
    $("#modal_confirmation_message").html("Are you sure you want to "+text+" selected Social account to your plot designee?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        infoVisibleToDesigneeConfirmation(idAccountInfo);
    });
}


function infoVisibleToDesigneeConfirmation(idAccountInfo)
{
    jQuery.get(__BASE_URL__ + "/socialAccountInfo/infoVisibleToDesignee/" +idAccountInfo, function (result) {
        var result_ary = result.split("||||");
        
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL__ + result_ary[1]);
        }
        else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Social Account Status');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}


function removeEulogyImage() 
{
    $("#remove_div").remove();
    $("#remove_div_btn").remove();
    $("#fileuploader2").removeClass('hide');
    $(".ajax-upload-dragdrop").removeClass('hide');
    $(".ajax-upload-dragdrop").attr('style','display:block;');
    $("#old_szEulogyFile").val('');
    $("#upload-Eulogy-File").val('');

}

function removeTrustImage() 
{
    $("#remove_div").remove();
    $("#fileuploader2").removeClass('hide');
    $(".ajax-upload-dragdrop").removeClass('hide');
    $(".ajax-upload-dragdrop").attr('style','display:block;');
    $("#old_szEulogyFile").val('');
    $("#upload-Eulogy-File").val('');

}

function deleteCharity(idCharity) 
{
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#modal_confirmation_header").html('Delete Charity');
    $("#modal_confirmation_message").html("Are you sure you want to delete selected charity details?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        deleteCharityConfirmation(idCharity)
    });
}


function deleteCharityConfirmation(idCharity)
{
    jQuery.get(__BASE_URL__ + "/deleteCharityDetails/"+ idCharity, function (result) {
        
        var result_ary = result.split("||||");
        
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL__ + result_ary[1]);
        } 
        else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Delete Charity Confirmation');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}

function deleteContact(idContact) 
{
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#modal_confirmation_header").html('Delete Contact');
    $("#modal_confirmation_message").html("Are you sure you want to delete selected contact ?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        deleteContactConfirmation(idContact)
    });
}


function deleteContactConfirmation(idContact)
{
    jQuery.get(__BASE_URL__ + "/deleteContactDetails/"+ idContact, function (result) {
        
        var result_ary = result.split("||||");
        
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL__ + result_ary[1]);
        } 
        else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Delete Contact Confirmation');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}


function deleteTrust(idTrust) 
{
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#modal_confirmation_header").html('Delete Trust');
    $("#modal_confirmation_message").html("Are you sure you want to delete selected trust ?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        deleteTrustConfirmation(idTrust)
    });
}


function deleteTrustConfirmation(idTrust)
{
    jQuery.get(__BASE_URL__ + "/deleteTrust/"+ idTrust, function (result) {
        
        var result_ary = result.split("||||");
        
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__BASE_URL__ + result_ary[1]);
        } 
        else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Delete Trust Confirmation');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}


function addNewFamilyMember()
{
    var countMember = $("#countMember").val();
    $("#add-member-btn").addClass('hide');
    $.post(__BASE_URL__ + "/addFamilyMembers",{countMember:countMember} , function (result) {
        
       var result_ary = result.split("||||");
       $("#add-member-btn").removeClass('hide');
       if (jQuery.trim(result_ary[0]) == 'SUCCESS')
       {
           $('#countMember').val(result_ary[1]);
           $('#addNewMember').append(result_ary[2]);
       } 
    });
}


function removeFamilyMember(countMember)
{
  $('#addedMember_'+$.trim(countMember)).remove();
}


function sendFuneralNotice()
{
    var funeralNoticeAry = $('#sendFuneralNoticeForm').serialize();

    jQuery.get(__BASE_URL__ + "/sendFuneralNotice", funeralNoticeAry, function (result) {

        var ar_result = result.split('||||');

        if ($.trim(ar_result[0]) == "SUCCESS") 
        {
             redirect_url(__BASE_URL__ + ar_result[1]);
        }
        else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Send Funeral Notice');
            $("#error_message").html(ar_result[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }
    });
}


function viewAvatar()
{
    var avatarDetails = $('#avatarForm').serialize();

    jQuery.get(__BASE_URL__ + "/avatars", avatarDetails, function (result) {

    });
}

function delete_Customer(idCustomer) {
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#confirmation_header").html('Delete Customer');
    $("#confirmation_message").html("Are you sure you want to delete this Customer?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        deleteCustomerConfirmation(idCustomer)
    });
}
function deleteCustomerConfirmation(idCustomer)
{
    jQuery.get(__ADMIN_BASE_URL__ + "/delete_Customer/" + idCustomer, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            redirect_url(__ADMIN_BASE_URL__ + result_ary[1]);
        } 
        else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Delete Customer');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}


function hasPassedAwayCheck()
{
    var checkHasPassedAway = $('#hasPassedAway').prop('checked');

    if(checkHasPassedAway === true)
    {
        $('#idDOP').removeClass('hide');
    }
    else
    {
        $('#idDOP').addClass('hide');
    }
    
}


function deletePlotBuyerDesignee(idDeleteDesignee) 
{
    $("#popup_open_confirmation").attr('style', 'display:block;');
    $("#modal_confirmation_header").html('Delete Designee');
    $("#modal_confirmation_message").html("Are you sure you want to delete selected Designee?");
    $("#popup_open_success").attr('style', 'display:none;');
    $("#popup_open_error").attr('style', 'display:none;');
    $("#confirmation_btn").unbind("click");
    $('#confirmation_btn').click(function () {
        deletePlotBuyerDesigneeConfirmation(idDeleteDesignee)
    });
}


function deletePlotBuyerDesigneeConfirmation(idDeleteDesignee)
{
    jQuery.get(__BASE_URL__ + "/deletePlotBuyerDesignee/"+ idDeleteDesignee, function (result) {
        
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
            $("#error_header").html('Delete Designee Confirmation');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }

    });
}


function selectBulkRows() {

    var propValue = $('#bulkActionPlots').prop('checked');

    if (propValue == true) {
        $('.bulk_checkboxes').prop('checked', true);
    } else
    {
        $(".bulk_checkboxes").prop('checked', false);
    }
}

function checkBulkBtnStatus(){
    
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
        $("#bulk-action-btn").removeAttr('disabled');
    }else{
        $("#bulk-action-btn").attr('disabled','disabled');
    }
}

function bulkActionForPlots() {

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
        var value = jQuery("#bulkChkboxPlotsForm").serialize();
        var idGround = $('#idBurialGrounds').find(":selected").val();
        $.post(__ADMIN_BASE_URL__ + "/sendBulkActionIds", value, function (result) {

            var result_ary = result.split("||||");
            if ($.trim(result_ary[0]) == 'SUCCESS') {
                redirect_url(__ADMIN_BASE_URL__ + result_ary[1]);
            }
            else if($.trim(result_ary[0]) == 'ERROR')
            {
                $("#adminBulkActions").val(0);
                showToasterMessage("Bulk Action", "Sorry, no bulk actions can be applied across Burial Grounds. Please select one Burial Ground to make your changes for.", 'error');
            }
        });
    } else
    {
        $("#popup_open_success").attr('style', 'display:none;');
        $("#popup_open_confirmation").attr('style', 'display:none;');
        $("#error_header").html('Bulk Action');
        $("#error_message").html('Please select the plots to update.');
        $("#popup_open_error").attr('style', 'display:block;');
        $("#adminBulkActions option").prop("selected", false);
    }
}

function bulkActionForAllPlots() {

    var idCemetery = $('#idCemetery').find(":selected").val();
    if(idCemetery)
    {
         redirect_url(__ADMIN_BASE_URL__ + '/bulkallplot/'+idCemetery);
    }else{
        showToasterMessage("Select Cemetery", "Select cemetery from dropdown menu", 'error');
    }
}

function AdminBulkAction()
{
    $('#full-page-loader').height($(window).height());
    $('#full-page-loader').width($(window).width());
    $('#full-page-loader').show();
    var bulkActionValue = $('#adminBulkActions').val();

    if(bulkActionValue!='')
    {
        if(bulkActionValue==1)
        {
            $('#full-page-loader').hide();
            var idCemetery = $('#idCemetery').find(":selected").val();
            var idGround = $('#idBurialGrounds').find(":selected").val();
            if(idCemetery)
            {
                if(idGround)
                {
                    redirect_url(__ADMIN_BASE_URL__ + '/bulkallplot/'+idCemetery+'/'+idGround);
                }
                else
                {
                    $("#adminBulkActions").val(0);
                    showToasterMessage("Select Burial Ground", "Select burial ground from dropdown menu", 'error');
                }
            }else{
                $("#adminBulkActions").val(0);
                showToasterMessage("Select Cemetery", "Select cemetery from dropdown menu", 'error');
            }
        }
        else if(bulkActionValue==2)
        {
           $('#full-page-loader').hide();
           bulkActionForPlots();
        }
        else if(bulkActionValue==3)
        {
            var idCemetery = $('#idCemetery').find(":selected").val();
            if(idCemetery)
                {
                    $('#full-page-loader').hide();
                    $("#popup_open_confirmation").attr('style', 'display:block;');
                    $("#confirmation_header").html('Delete plot(s)');   
                    $("#confirmation_message").html("Are you sure want to delete all plots? ");
                    $("#popup_open_success").attr('style', 'display:none;');
                    $("#popup_open_error").attr('style', 'display:none;');
                    $("#confirmation_btn").unbind("click");
                    $('#confirmation_btn').click(function () {
                       confirmAllDeleteAdminBulkAction(idCemetery);
                    });
                }
                else
                {
                    $('#full-page-loader').hide();
                     $("#adminBulkActions").val(0);
                    showToasterMessage("Select Cemetery", "Select cemetery from dropdown menu", 'error');
                }
        }
        else if(bulkActionValue==4)
        {
            $("#adminBulkActions").val(0);
            $('#full-page-loader').hide();
            $("#popup_open_confirmation").attr('style', 'display:block;');
            $("#confirmation_header").html('Delete plots');   
            $("#confirmation_message").html("Are you sure you want to delete the selected plot(s)?");
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_error").attr('style', 'display:none;');
            $("#confirmation_btn").unbind("click");
            $('#confirmation_btn').click(function () {
                confirmDeleteAdminBulkAction();
            });
        }
        else if(bulkActionValue==5)
        {
            var idCemetery = $('#idCemetery').find(":selected").val();
            if(idCemetery)
            {
                var idGround = $('#idBurialGrounds').find(":selected").val();
                if(idGround)
                {
                    $('#searchForm').attr('action', "/admin/allFilterUpdate").submit();
                }
                else
                {
                     $('#full-page-loader').hide();
                    $("#adminBulkActions").val(0);
                    showToasterMessage("Select Burial Ground", "Please select burial ground from dropdown", 'error')
                }

            }
            else
            {
                 $('#full-page-loader').hide();
                $("#adminBulkActions").val(0);
                showToasterMessage("Select Cemetery", "Select cemetery from dropdown menu", 'error');
            }

        }
        else if(bulkActionValue==0)
        {
            $("#adminBulkActions").val(0);
            $('#full-page-loader').hide(); 

        }
    }
    else
    {
        $("#popup_open_confirmation").attr('style', 'display:none;');
        showToasterMessage("Delete Plots", "Please select option value ", 'error')
    }
}

function confirmDeleteAdminBulkAction()
{
    $("#popup_open_confirmation").attr('style', 'display:none;');
    $('#full-page-loader').height($(window).height());
    $('#full-page-loader').width($(window).width());
    $('#full-page-loader').show();
    var value = jQuery("#bulkChkboxPlotsForm").serialize();
    $.post(__ADMIN_BASE_URL__ + "/bulkPlotDelete", value, function (result) {

        var result_ary = result.split("||||");
        if ($.trim(result_ary[0]) == 'SUCCESS') {
            setTimeout(function(){  location.reload(true); }, 2000);
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#confirmation_header").html('');   
            $("#confirmation_message").html("");
            showToasterMessage("Delete Plots", "Plot have been deleted successfully.", 'success')
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
             $('#full-page-loader').hide();
            $("#adminBulkActions").val(0);
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#confirmation_header").html('');   
            $("#confirmation_message").html("");
            showToasterMessage("Delete Plots", "Please select atleast one plot for delete ? ", 'error')
        }
    });

}


function confirmAllDeleteAdminBulkAction(idCemetery)
{
    $('#full-page-loader').height($(window).height());
    $('#full-page-loader').width($(window).width());
    $('#full-page-loader').show();
    var value = idCemetery;
    $.post(__ADMIN_BASE_URL__ + "/allBulkPlotDelete/"+idCemetery, function (result) {

        var result_ary = result.split("||||");
        if ($.trim(result_ary[0]) == 'SUCCESS') {
            setTimeout(function(){  location.reload(true); }, 2000);
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#confirmation_header").html('');   
            $("#confirmation_message").html("");
            showToasterMessage("Delete Plots", "All plots are deleted except the ones that are already sold.", 'success')
        }else{
             $('#full-page-loader').hide();
            $("#adminBulkActions").val(0);
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#confirmation_header").html('');   
            $("#confirmation_message").html("");
            showToasterMessage("Delete Plots", "Please select atleast one plot for delete ? ", 'error')
        }
    });

}
function undoLastImportPlots() {

    $('#full-page-loader').height($(window).height());
    $('#full-page-loader').width($(window).width());
    $('#full-page-loader').show();
    
    $.post(__ADMIN_BASE_URL__ + "/UndoImport", function (result) {
        var result_ary = result.split("||||");

        if ($.trim(result_ary[0]) == 'SUCCESS') {
            redirect_url(__ADMIN_BASE_URL__ + result_ary[1]);
            $('#full-page-loader').hide();

        } else {
            redirect_url(__ADMIN_BASE_URL__ + result_ary[1]);
            $('#full-page-loader').hide();
        }
    });
}

function saveImportPlots() {
    
    $('#full-page-loader').height($(window).height());
    $('#full-page-loader').width($(window).width());
    $('#full-page-loader').show();
       
    //$("#importPlotsForm").submit();

}

function removeImportPlotImage() {
    $("#remove_div").remove();
    $(".ajax-upload-dragdrop").show();
}

function viewPlotsOnMap(idBurialGround) {
    $('#full-page-loader').height($(window).height());
    $('#full-page-loader').width($(window).width());
    $('#full-page-loader').show();
    var selected_burial_ground = $("#selected_burial_ground").val();
    jQuery.get(__ADMIN_BASE_URL__ + "/plots_map/" + idBurialGround, function (result) {
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
            $('#full-page-loader').hide();
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

function changePlotMapView(iStatus,order) {
    var idBurialGround = $("#idBurial").val();
    var selected_status = $("#selected_status").val();
    $('#full-page-loader').height($(window).height());
    $('#full-page-loader').width($(window).width());
    $('#full-page-loader').show();
    if(order == '1'){
        var url_req = "/order_map_view/";
    }
    else
    {
        url_req = "/plots_map/";
    }
    jQuery.get(__ADMIN_BASE_URL__ + url_req +idBurialGround+"/"+iStatus, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $("#selected_status").val(iStatus);
            $("#table_content").html('');
            $("#table_content").html(result_ary[1]);
            loadPlotsMap();
        } 
        else
        {
            $('#full-page-loader').hide();
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Plots');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
            $(".plot_status_selection").prop('checked', false);
            $("#iPlotStatus_"+selected_status).prop('checked',true);
        }
    });
    validate_form_fields();
}

function showHideOrderReportFieldSelectionBox(div_id)
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

function downloadOrderReport()
{
    $('#full-page-loader').height($(window).height());
    $('#full-page-loader').width($(window).width());
    $('#full-page-loader').show();
    var form = $("#searchForm").serialize();
    jQuery.post(__ADMIN_BASE_URL__ + "/view_order_report",form, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $('#full-page-loader').hide();
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

function downloadDonationReport()
{
    $('#full-page-loader').height($(window).height());
    $('#full-page-loader').width($(window).width());
    $('#full-page-loader').show();
    var form = $("#searchForm").serialize();
    jQuery.post(__ADMIN_BASE_URL__ + "/view_donation_report",form, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            $('#full-page-loader').hide();
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

function showUpdatePlotOrderStatusModal() {

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

function updateBulkPlotOrderStatus() {

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
            $.post(__ADMIN_BASE_URL__ + "/updatePlotsOrderStatus", newValue, function (result) {
                $('#full-page-loader').hide();
                var result_ary = result.split("||||");
                if ($.trim(result_ary[0]) == 'SUCCESS') {
                    redirect_url(__ADMIN_BASE_URL__ + result_ary[1]);
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
            $('#full-page-loader').hide();
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Update Order Status');
            $("#error_message").html("Please select order status.");
            $("#popup_open_error").attr('style', 'display:block;');
        }
            
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

function openupdatePasswordForm()
{
    $("#updatepassword").addClass('hide');
    $("#updatePasswordform").removeClass('hide');
}

function changeApproveStatus(iCurrentStatus, idCemetery, iPendingAdminApproval,comapnayName,isConformationByLink,isPage){
    $("#updateApproveStatusModal").modal('show');
    $("#idSelectedCemetery").val(idCemetery);
    $("#pending-approval-btn").addClass('hide');
    var apporveMessage = '';
    if(isPage)
    {
        $("#Approval_heading").text('Change Approval Status of '+'('+comapnayName+') ? '); 
    }
    else
    {
        $("#Approval_heading").text('Change Approval Status of '+'('+comapnayName+')'); 
    }

    
    if(parseInt(iPendingAdminApproval) == 1)
    {
        if(isPage)
            apporveMessage = 'Request domain ' +isConformationByLink;
        else
        apporveMessage = "Please select your cemetery permission.";
        $("#pending-approval-btn").removeClass('hide');
        $("#pending-approval-btn").unbind("click");
        $('#pending-approval-btn').click(function () { saveApproveStatus('0');});
        $("#pending-approval-btn").html("Decline");
        $("#new-status-btn").unbind("click");
        $('#new-status-btn').click(function () { saveApproveStatus('1');});
        $("#new-status-btn").html("Approve");
    }
    else{
        if(parseInt(iCurrentStatus) == 1){
            apporveMessage = "Are you sure you want to <b>Decline</b> domain approval request?";
            $("#new-status-btn").unbind("click");
            $('#new-status-btn').click(function () { saveApproveStatus('0');});
            $("#new-status-btn").html("Decline");
        }else {
            
            apporveMessage = "Are you sure you want to <b>Approve</b> domain approval request?";
            $("#new-status-btn").unbind("click");
            $('#new-status-btn').click(function () { saveApproveStatus('1');});
            $("#new-status-btn").html("Approve");
        }
    }
        
    $("#apporveMessage").html('');
    $("#apporveMessage").html(apporveMessage);
}

function saveApproveStatus(iNewStatus){
    $('#full-page-loader').height($(window).height());
    $('#full-page-loader').width($(window).width());
    $('#full-page-loader').show();
    $("#updateApproveStatusModal").modal('hide'); 
    var idCemetery =  $("#idSelectedCemetery").val();
    
    if(parseInt(idCemetery) > 0){
        jQuery.get(__ADMIN_BASE_URL__ + "/saveApproveStatus/"+idCemetery+"/"+iNewStatus, function (result) {
            $('#full-page-loader').hide();
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                $("#popup_open_success").attr('style', 'display:block;');
                $("#success_header").html('Change Approval Status');
                $("#success_message").html("Status has been successfully changed.");
                $("#btn-success-popup-close-icon").unbind("click");
                $('#btn-success-popup-close-icon').click(function () {
                    redirect_url(__ADMIN_BASE_URL__ + result_ary[1]);
                });
                $("#btn-success-popup-close").unbind("click");
                $('#btn-success-popup-close').click(function () {
                    redirect_url(__ADMIN_BASE_URL__ + result_ary[1]);
                });

            } 
            else
            {
                $("#popup_open_success").attr('style', 'display:none;');
                $("#popup_open_confirmation").attr('style', 'display:none;');
                $("#error_header").html('Change Approval Status');
                $("#error_message").html(result_ary[1]);
                $("#popup_open_error").attr('style', 'display:block;');
            }
        });
    }
    else{
        $('#full-page-loader').hide();
        $("#popup_open_success").attr('style', 'display:none;');
        $("#popup_open_confirmation").attr('style', 'display:none;');
        $("#error_header").html('Change Approval Status');
        $("#error_message").html("Something is missing. Please refresh page and try again.");
        $("#popup_open_error").attr('style', 'display:block;');
    }
        

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

function getStatesByCountry(idCountry,selectionId) {

    jQuery.get(__BASE_URL__ + "/getStatesByCountry/" + idCountry, function (result) {
        var result_ary = result.split("||||");
        if (jQuery.trim(result_ary[0]) == 'SUCCESS')
        {
            if(selectionId){
                $("#"+selectionId).html('');
                $("#"+selectionId).html(result_ary[1]);
            }else{
                $("#idState").html('');
                $("#idState").html(result_ary[1]);
            }
            if(selectionId == 'pre_szPurchaserStateId')
            $('#pre_szPurchaserStateId').removeAttr("disabled"); 
            if(selectionId == 'at_szPurchaserStateId')
            $('#at_szPurchaserStateId').removeAttr("disabled");
            if(selectionId == 'at_szDeceasedStateId')
            $('#at_szDeceasedStateId').removeAttr("disabled");     
            
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Select State');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }
    });
    validate_form_fields();
}


function getOrderBillingStatesByCountry(idCountry,selectionId) {

    jQuery.get(__BASE_URL__ + "/getStatesByCountry/" + idCountry, function (result) {
        var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                
            if($.trim(selectionId) == 'idBillingState'){
                $('#idBillingState').removeAttr("disabled");
                $("#idBillingCountry").val(idCountry);
                $("#idBillingState").html('');
                $("#idBillingState").html(result_ary[1]);
            }
            if($.trim(selectionId) == 'idShippingState'){
                $("#idShippingCountry").val(idCountry);
                $("#idShippingState").html('');
                $("#idShippingState").html(result_ary[1]);
            }

            if($.trim(selectionId) == 'idShippingState'){
                $('#idShippingState').removeAttr("disabled");
            }

            
            
        } else
        {
            $("#popup_open_success").attr('style', 'display:none;');
            $("#popup_open_confirmation").attr('style', 'display:none;');
            $("#error_header").html('Select State');
            $("#error_message").html(result_ary[1]);
            $("#popup_open_error").attr('style', 'display:block;');
        }
    });
    validate_form_fields();
}

function AdminOpenSendDeepPopUp(szRefrenceNumber, iOrderNumber, idPlot , isPlotDetailspage, idCemetery, selectedPlotNumber)
{
    $('input:checkbox').removeAttr('checked');
    $('#full-page-loader').height($(window).height());
    $('#full-page-loader').width($(window).width());
    $('#full-page-loader').show();
    if(isPlotDetailspage)
    {
        $('#full-page-loader').hide();
        $("#show-plot-refrence").text(szRefrenceNumber);
         $("#show-plot-number").text(selectedPlotNumber);
        $("#szRefrenceNumber").val(szRefrenceNumber);
        $("#iOrder").val(iOrderNumber);
        $("#plotDeedIdCemetery").val(idCemetery);
        $("#idPlot").val(idPlot);
        $('#sendDeedToUser').modal('show');
        $('input:checkbox').removeAttr('checked');
    }
    else if(szRefrenceNumber!='')
    {
        $('input:checkbox').removeAttr('checked');
        jQuery.get(__ADMIN_BASE_URL__ + "/getPlotOrdersDetails/",{szRefrenceNumber:szRefrenceNumber,idPlot:idPlot} , function (result) {
            $('#full-page-loader').hide();
            var result_ary = result.split("||||");
            if (jQuery.trim(result_ary[0]) == 'SUCCESS')
            {
                $('#sendDeedToUser').modal('show');
                $("#show-plot-number").text(selectedPlotNumber);
                $("#szRefrenceNumber").val(szRefrenceNumber);
                $("#plotDeedIdCemetery").val(idCemetery);
                $("#szRefrenceNumber").val(szRefrenceNumber);
                $("#iOrder").val(iOrderNumber);
                $("#idPlot").val(idPlot);
            } 
            else
            {
                $("#iRedirectOrderId").val(iOrderNumber);
                $('#ErrorMesaagePLots').modal('show');
             // window.location.href = __ADMIN_BASE_URL__+"/view_order_details/"+iOrderNumber+"#portlet_tab2";
            }
        });
        
    }
    
}
function adminGoOrderListPage()
{
   var iOrderNumber = $("#iRedirectOrderId").val();
   window.location.href = __ADMIN_BASE_URL__+"/view_order_details/"+iOrderNumber+"#portlet_tab2"; 
}

