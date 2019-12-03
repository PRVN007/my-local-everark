<div id="paymentiFrameFormPopUp" style="display:none" class="popupModals">
        <div id="popup-bg"></div>
        <div id="popup-container">
            <div class="popup clearfix modal-content" id="paymentFormInnerPopUp" style="min-width: 650px;height: 560px;">
                <div class="popup_text">
                    <div class="portlet">
                        <div class="modal-header">
                            <h4 class="modal-title" id="confirmation_header">Payment 
                                </h4>
                            
                        </div>
                    </div>
                    <br>
                    <br>
                    <br>
                    <div class='modal-body' id="confirmation_message">
                        <iframe id="load_payment" src="{{ url('/paymentCommunication') }}" class="embed-responsive-item" name="load_payment" width="100%" height="450px"  frameborder="0" scrolling="true">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
<div id="popup_open_success" style="display:none" class="popupModals">
    <div id="popup-bg"></div>
    <div id="popup-container">
        <div class="popup clearfix modal-content" id="popup_success_outside">
            <div class="popup_text">
                <div class="portlet">
                    <div class="modal-header">
                        <button type="button" class="close" onclick="cancelPopup('popup_open_success');">&times;</button>
                        <h4 class="modal-title" id="success_header"></h4>
                    </div>
                </div>
                <br>
                <br>
                <br>
                <br>
                <div class='modal-body alert alert-success' id="success_message">

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success  pull-right bcancel" id="btn-success-popup-close" onclick="cancelPopup('popup_open_success'); return false;">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="popup_open_error" style="display:none" class="popupModals">
    <div id="popup-bg"></div>
    <div id="popup-container">
        <div class="popup clearfix modal-content" id="popup_error_outside">
            <div class="popup_text">
                <div class="portlet">
                    <div class="modal-header">
                        <button type="button" class="close" onclick="cancelPopup('popup_open_error');">&times;</button>
                        <h4 class="modal-title" id="error_header"></h4>
                    </div>
                </div><br>
                <br>
                <br>
                <br>
                <div class='modal-body alert alert-danger'id="error_message">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn bclose btn-success  pull-right" id="btn-error-popup-close" onclick="cancelPopup('popup_open_error'); return false;">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="popup_open_confirmation" style="display:none" class="popupModals">
    <div id="popup-bg"></div>
    <div id="popup-container">
        <div class="popup clearfix modal-content" id="popup_confirmation_outside">
            <div class="popup_text">
                <div class="portlet">
                    <div class="modal-header">
                        <button type="button" class="close" id="btn-confirm-popup-close-icon bcancel " onclick="cancelPopup('popup_open_confirmation');">&times;</button>
                        <h4 class="modal-title" id="modal_confirmation_header"></h4>
                    </div>
                </div>
                <br>
                <br>
                <br>
                <div class='modal-body alert alert-warning' id="modal_confirmation_message" style="padding: 5px 5px 5px 5px;">
                </div>
                <div class="modal-footer">
                    <a href="javascript:void(0)" class="btn btn-danger bsave" id="confirmation_btn">Yes</a>  
                    <a href="javascript:void(0)" class="btn btn-success bcancel" id="btn-confirm-popup-close" onclick="cancelPopup('popup_open_confirmation'); return false;">No</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="popup_map" style="display:none" class="popupModals">
    <div id="popup-bg"></div>
    <div id="popup-container">
        <script language="javascript"  src='https://maps.google.com/maps/api/js?key=AIzaSyBlCdGIRfW0g_GwfNqVv6VXjGwcvzdSIYc'></script>
        <div class="popup clearfix modal-content modal-lg" id="popup_map_outside" style="overflow:hidden;">
            <div class="popup_text">
                <div class="portlet">
                    <div class="modal-header">
                        <button type="button" class="close" onclick="cancelPopup('popup_map');">&times;</button>
                        <h4 class="modal-title" id="map_header"></h4>
                    </div>
                </div>
                <br><br>
                <div class='modal-body' id="map" align="center" style="width: auto; height: 300px">

                </div>
            </div>
        </div>
    </div>
</div>
<div id="popup_description" style="display:none" class="popupModals">
    <div id="popup-bg"></div>
    <div id="popup-container">
        <div class="popup clearfix modal-content modal-lg" id="popup_description_outside">
            <div class="popup_text">
                <div class="portlet">
                    <div class="modal-header">
                        <button type="button" class="close" onclick="cancelPopup('popup_description');">&times;</button>
                        <h4 class="modal-title" id="description_header"></h4>
                    </div>
                </div>
                <br><br><br>
                <div class='modal-body' id="description_message">

                </div>
            </div>
        </div>
    </div>
</div>
<script>
    window.CommunicationHandler = {};
    
    function getPaymentSuccessURL(szOrderRef){
        jQuery.get(__BASE_URL__ + "/paymentSuccessURL/"+szOrderRef, function (result) {
            window.parent.parent.window.document.getElementById('paymentiFrameFormPopUp').setAttribute('style','display:none;');
            window.parent.parent.location.href = result;
//            return result;
        });
    }
    function parseQueryString(str) {
            var vars = [];
            var arr = str.split('&');
            var pair;
            for (var i = 0; i < arr.length; i++) {
                    pair = arr[i].split('=');
                    vars[pair[0]] = unescape(pair[1]);
            }
            return vars;
    }
    CommunicationHandler.onReceiveCommunication = function (argument) {
            params = parseQueryString(argument.qstr);
            parentFrame = argument.parent.split('/');
//            console.log(params);
//            console.log(parentFrame);
            //alert(params['height']);
            $frame = null;

            switch(params['action']){

                    case "transactResponse"	:   var transResponse = JSON.parse(params['response']);
                                                    getPaymentSuccessURL(transResponse.orderInvoiceNumber);
                                                    

            }
    }
	
</script>
<?php if((trim($title) != 'Edit Legacy Profile') && (trim($title)!='Add Legacy Profile') && (trim($title)!='3D Avatar') && (trim($title)!='Add Trust')) { ?>
<script>

$(document).ready(function()
{
    var settings = {
            url: "<?php echo url('/'); ?>/cust/uploadCustomeImage",
            method: "POST",
            allowedTypes:"jpg,png,gif,jpe,jpeg,JPEG,JPG,PNG",
            fileName: "profileImage",
            multiple: true,
            onSuccess:function(files,data)
            {  
                data = JSON.parse(data);
                var imgclassNameArr = data.profileImageName;
                var htmldata = '<div class="" id="custome_image">'+
                                        '<div class="uploadedFileSuccess image-sizefix">'+
                                        '<img src="'+''+'/customers_images/'+imgclassNameArr+'" id="'+imgclassNameArr+'" class="'+imgclassNameArr+'" alt="custome Image" >'+
                                    '</div>'+
                                    '<br>'+
                                '</div>';       
                $('#custome_success_image_profile').html(htmldata);
                $(".ajax-file-upload-container").hide();
                $(".ajax-file-upload-statusbar").html('');
                $("#uploadedImg").show();
                $("#uploadedImg").removeClass('hide');
                setTimeout(function(){location.reload();}, 2000) 
 
       }
    }
    $("#customerImageUpload").uploadFile(settings);

});
        

</script>
  <?php } ?>

<footer>
    <div class="container-fluid">
        <div class="icon-bar-everark">
            <hr/>
            <figure><img src="/images/fav-ever.png" alt="EverArk"/></figure>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-3">
                <h3>Location</h3>
                <div class="address">
                    <p>Eternal Legacy Company, LLC</p>
                    <p>3301 Industrial Avenue</p>
                    <p>Rocklin, CA 95765</p>
                </div>
                <div class="address">
                    <p>916.625.3800</p>
                    <p>info@everark.com</p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6">
                <h3>Helpful Links</h3>
                <ul class="footer-nav">
<!--                    <li><a href="https://www.everafterly.com/" class="{{($title == 'Home' || $title == 'Home' || $title =='Home'?'active':'')}}">HOME</a></li>-->
                    <li><a href="{{url('/legacy_profiles')}}" class="{{($title == 'Digital Legacies'?'active':'')}}">Digital Legacy</a></li>
<!--                    <li><a href="https://www.everafterly.com/contact.html">CONTACT</a></li>-->
                    <li><a href="{{url('/')}}" class="{{($title == 'Plots' || $title == 'Plot Details' || $title =='Buy a Plot'?'active':'')}}">BUY A PLOTS</a></li>
<!--                    <li><a href="https://www.everafterly.com/about.html">ABOUT</a></li>
                    <li><a href="https://www.everafterly.com/faq.html">FAQ</a></li>-->
                    <?php 
                    $szFirstName = Session::get('cust_credn.custFirstName');
                    if (empty($szFirstName)) { ?>
                        <li><a href="{{url('/cust/login')}}" class="{{($title == 'Customer Login' || $title == 'Customer Signup' || $title == 'Forgot Password'?'active':'')}}">LOGIN | REGISTER</a></li>
                    <?php } ?>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-3">
                <h3>Quick Contact</h3>
                <form  id="newsletterForm" action="{{ url('/quick_contact') }}" name="custSignupForm" method="post">
                    <div class="form-group {{( trim($errors->has('szEmail')) != '' ? 'has-error':'')}}">
                        <label>Email<span class="form-required">*</span><span class="input-spot"></span></label>
                        <input type="email" name="szEmail" id="szEmailNewsletter" class="form-control required" placeholder="Your email address" value="{{ old('szEmail') }}" required="required">
                        @if ($errors->has('szEmail'))
                        <span class="help-block">
                            <strong><i class="fa fa-times-circle"></i> {{ $errors->first('szEmail') }}</strong>
                        </span>
                        @endif
                    </div>

                    <input type="submit" value="Submit" class="btn-sbmt">
                </form>
                <br>
                <span id="siteseal"><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=AdcPVUILFQ6NvC2Khy22Yx4mkqhz39HnwKSOszje22GVQgE4CKlTSKzErooo"></script></span>
            </div>
        </div>
        <div class="copy-write">© <?php echo date('Y');?> Eternal Legacy Company, LLC.  All Rights Reserved.<br><span class="powered-text">Powered by EverArk</span></div>
        
    </div>
</footer>
