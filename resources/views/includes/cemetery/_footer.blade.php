<div id="add-burial-div"></div>
<div id="add-burial-region-div"></div>
<div id="addNewPlotSize-div"></div>
<div id="idPlotConformation-div"></div>
<input type="hidden" id="conformationWidth" value="">
<input type="hidden" id="conformationHeight" value="">
<div id="popup_open_success" style="display:none" class="popupModals">
    <div id="popup-bg"></div>
    <div id="popup-container">
        <div class="popup clearfix modal-content" id="popup_success_outside">
            <div class="popup_text">
                <div class="portlet">
                    <div class="modal-header">
                        <button type="button" class="close"  id="btn-success-popup-close-icon" onclick="cancelPopup('popup_open_success');">&times;</button>
                        <h4 class="modal-title" id="success_header"></h4>
                    </div>
                </div>
                <div class='modal-body alert alert-success' id="success_message">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success  bcancel" id="btn-success-popup-close" onclick="cancelPopup('popup_open_success'); return false;">Close</button>
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
                        <button type="button" class="close" onclick="cancelPopup('popup_open_confirmation');">&times;</button>
                        <h4 class="modal-title" id="confirmation_header"></h4>
                    </div>
                </div>
                <div class='modal-body alert alert-warning' id="confirmation_message" style="padding: 5px 5px 5px 5px;">
                </div>
                <div class="modal-footer">
                    <a href="javascript:void(0)" class="btn update bsave" id="confirmation_btn">Yes</a>  
                    <a href="javascript:void(0)" class="btn btn-success bcancel" id="btn-success-popup-close" onclick="cancelPopup('popup_open_confirmation'); return false;">No</a>
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
                </div>
                <div class='modal-body alert alert-danger'id="error_message">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success  bcancel pull-right" id="btn-error-popup-close" onclick="cancelPopup('popup_open_error'); return false;">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="admin-footer-iner"> 
        &copy; {{date('Y')}} Eternal Legacy Company LLC.  All Rights Reserved. 
    <span class="pull-right">
        <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a> | <a href="#">Site Map</a>
    </span>
</div>
<div class="scroll-to-top">
    <i class="icon-arrow-up"></i>
</div>

 <?php
if(Session::get('arCemetery.szImage') && trim(Session::get('arCemetery.szImage')) != '')
{
    $szImage = "/cemetery_images/".Session::get('arCemetery.szImage');
}
else
{
    $szImage = "/admin_images/default_profile_image.jpg";
}
?>

<!----------------Cemetery Profile Image Pop--------------------->
<!--<div class="modal" id="cemterImageModelPopup">
  <div class="modal-dialog">
    <div class="modal-content">
       Modal Header 
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Upload Profile Image</h5>
      </div>
      
       Modal body 
      <div class="modal-body cemetry-profile-img">
          <div id="galleryImages">
              <img src="<?php echo $szImage; ?>" width="200" />
          </div>
            <label class="btn center-block btn-file image-upload-style">
                <i class="fa fa-upload" aria-hidden="true"></i> <span id="upload-text">Choose a file…</span>
                <input type="file" id="imageCropFileInput" multiple="" accept=".jpg,.jpeg,.png">
            </label>
            <input type="hidden" id="profile_img_data" >
            <input type="hidden" name="szProfilePic" id="szImageNewName" value="">
            <div class="img-preview"></div>
            
            <div id="cropper">
                <canvas id="cropperImg" width="0" height="0"></canvas>
                <a href="javascript:void(0);" class="cropImageBtn uppercase cropButton" id="cropImageBtn">Crop</a>
            </div>
            <p style="color: #A8A8A8;" class="recommend-picture-size">Recommend Size - 421x537 px </p>
            <div id="gal-imgs"></div>
            <div id="uploadedImg" >
                <div class="uploadedFileSuccess"> </div>
            </div>
      </div>

       Modal footer 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>-->

<script type="text/javascript" defer>
//var c;
//var galleryImagesContainer = document.getElementById('galleryImages');
//var imageCropFileInput = document.getElementById('imageCropFileInput');
//var cropperImageInitCanvas = document.getElementById('cropperImg');
//var cropImageButton = document.getElementById('cropImageBtn');
//var idSelectedImage; 
//var image = new Array(); 
//// Crop Function On change
//  function imagesPreview(input) {
//    var cropper;
//    galleryImagesContainer.innerHTML = '';
//    var img = [];
//    if(cropperImageInitCanvas.cropper){
//      cropperImageInitCanvas.cropper.destroy();
//      cropImageButton.style.display = 'none';
//      cropperImageInitCanvas.width = 0;
//      cropperImageInitCanvas.height = 0;
//    }
//    if (input.files.length) {
//      var i = 0;
//      var index = 0;
//      for (let singleFile of input.files) {
//        var reader = new FileReader();
//        reader.onload = function(event) {
//          var blobUrl = event.target.result;
//          img.push(new Image());
//          img[i].onload = function(e) {
//            // Canvas Container
//            var singleCanvasImageContainer = document.createElement('div');
//            singleCanvasImageContainer.id = 'singleImageCanvasContainer'+index;
//            singleCanvasImageContainer.className = 'singleImageCanvasContainer';
//            // Canvas Close Btn
//            var singleCanvasImageCloseBtn = document.createElement('button');
//            var singleCanvasImageCloseBtnText = document.createTextNode('Close');
//            var singleCanvasImageCloseBtnText = document.createElement('i');
//            singleCanvasImageCloseBtnText.className = 'fa fa-trash';
//            singleCanvasImageCloseBtn.id = 'singleImageCanvasCloseBtn'+index;
//            singleCanvasImageCloseBtn.className = 'singleImageCanvasCloseBtn';
//            singleCanvasImageCloseBtn.onclick = function() { removeSingleCanvas(this) };
//            singleCanvasImageCloseBtn.appendChild(singleCanvasImageCloseBtnText);
//            singleCanvasImageContainer.appendChild(singleCanvasImageCloseBtn);
//            // Image Canvas
//            var canvas = document.createElement('canvas');
//            canvas.id = 'imageCanvas'+index;
//            canvas.className = 'imageCanvas singleImageCanvas';
//            canvas.width = e.currentTarget.width;
//            canvas.height = e.currentTarget.height;
//            canvas.onclick = function() { cropInit(canvas.id); };
//            singleCanvasImageContainer.appendChild(canvas)
//            // Canvas Context
//            var ctx = canvas.getContext('2d');
//            ctx.drawImage(e.currentTarget,0,0);
//            // galleryImagesContainer.append(canvas);
//            galleryImagesContainer.appendChild(singleCanvasImageContainer);
//            while (document.querySelectorAll('.singleImageCanvas').length == input.files.length) {
//              var allCanvasImages = document.querySelectorAll('.singleImageCanvas')[0].getAttribute('id');
//              cropInit(allCanvasImages);
//              break;
//            };
//            urlConversion();
//            index++;
//          };
//          img[i].src = blobUrl;
//          i++;
//        }
//        reader.readAsDataURL(singleFile);
//      }
//      // addCropButton();
//      // cropImageButton.style.display = 'block';
//    }
//  }
//  imageCropFileInput.addEventListener("change", function(event){
//    imagesPreview(event.target);
//  });
//// Initialize Cropper
//  function cropInit(selector) {
//    idSelectedImage = selector; 
//    c = document.getElementById(selector);
//    idSelectedImage = document.getElementById(selector); 
//    //console.log(document.getElementById(selector));
//    if(cropperImageInitCanvas.cropper){
//        cropperImageInitCanvas.cropper.destroy();
//    }
//    var allCloseButtons = document.querySelectorAll('.singleImageCanvasCloseBtn');
//    for (let element of allCloseButtons) {
//      element.style.display = 'block';
//    }
//    c.previousSibling.style.display = 'none';
//    // c.id = croppedImg;
//    var ctx=c.getContext('2d');
//    var imgData=ctx.getImageData(0, 0, c.width, c.height);
//    var image = cropperImageInitCanvas;
//    image.width = c.width;
//    image.height = c.height;
//    var ctx = image.getContext('2d');
//    ctx.putImageData(imgData,0,0);
//    cropper = new Cropper(image, {
//      aspectRatio: NaN,
//      preview: '.img-preview',
//      crop: function(event) {
//        cropImageButton.style.display = 'block';
//      }
//    });
//
//  }
//
//// Crop Image
//  function image_crop() {
//    if(cropperImageInitCanvas.cropper){
//      var cropcanvas = cropperImageInitCanvas.cropper.getCroppedCanvas({width: 250, height: 250});
//        img = cropperImageInitCanvas.cropper.url;
//        
//         $('#cemetery-full-page-loader').show();
//      // document.getElementById('cropImages').appendChild(cropcanvas);
//        var ctx=cropcanvas.getContext('2d');
//        var imgData=ctx.getImageData(0, 0, cropcanvas.width, cropcanvas.height);
//        // var image = document.getElementById(c);
//        c.width = cropcanvas.width;
//        c.height = cropcanvas.height;
//        var ctx = c.getContext('2d');
//        ctx.putImageData(imgData,0,0);
//        cropper.getCroppedCanvas().toBlob(function (blob) {
//                var formData = new FormData();
//                formData.append('szProfilePic', blob);
//                // Use `jQuery.ajax` method
//                $.ajax("<?php echo url('/'); ?>/cemetery/uploadprofilepic", {
//                  method: "POST",
//                  allowedTypes: "jpg,png,gif,jpe,jpeg,JPEG,JPG,PNG",
//                  data: formData,
//                  multiple: false,
//                  processData: false,
//                  contentType: false,
//                  success: function (data) {
//                      data = JSON.parse(data);
//                      if(data)
//                      {
//                           $('#cemetery-full-page-loader').hide();
//                           window.setTimeout(function(){location.reload()},3000)
////                            var imgclassNameArr = data.plotImageName.split('.');
////                            var htmldata = '<div class="image-sizefix remove-image-div overflow-image-size" id="remove_div'+imgclassNameArr[0]+'"><img src="'+data.plotImagePath+'" id="'+imgclassNameArr[0]+'" class="'+imgclassNameArr[0]+'" alt="Plot Image" width="200px;">'+'<input type="hidden" name="szImageNewName[]" id="szImageName'+imgclassNameArr[0]+'" value="'+data.plotImageName+'" /><a href="javascript:void(0);" class="remove-plot-image" onclick="removePlotImage(\''+imgclassNameArr[0]+'\');" title="Remove Image"></a><br></div>';
////                            $('#old_cemetery_image').append(htmldata);
////                            $("#uploadedImg").show();
////                            removeSingleCanvas(idSelectedImage); 
////                            $("#szErrorMessageGroundPiture").html(''); 
//
//                      }
//                  },
//                  error: function () {
//                   $('#cemetery-full-page-loader').hide();
//                   // console.log('Upload error');
//                   $('#fileuploader2').val(''); 
//                   $('#cropped_result').attr('src', '');
//                   showToasterMessage("Image Error ", "Something is missing.", 'error')
//                }
//                });
//          });
//        
//        cropperImageInitCanvas.cropper.destroy();
//        cropperImageInitCanvas.width = 0;
//        cropperImageInitCanvas.height = 0;
//        cropImageButton.style.display = 'none';
//        var allCloseButtons = document.querySelectorAll('.singleImageCanvasCloseBtn');
//        for (let element of allCloseButtons) {
//          element.style.display = 'block';
//        }
//        urlConversion();
//        // cropperImageInitCanvas.style.display = 'none';
//        
//    } else {
//      alert('Please select any Image you want to crop');
//    }
//  }
//  cropImageButton.addEventListener("click", function(){
//    image_crop();
//  });
//// Image Close/Remove
//  function removeSingleCanvas(selector) {
//    selector.parentNode.remove();
//    urlConversion();
//  }
//// Dynamically Add Crop Btn
//  // function addCropButton() {
//  //   // add crop button
//  //     var cropBtn = document.createElement('button');
//  //     cropBtn.setAttribute('type', 'button');
//  //     cropBtn.id = 'cropImageBtn';
//  //     cropBtn.className = 'btn btn-block crop-button';
//  //     var cropBtntext = document.createTextNode('crop');
//  //     cropBtn.appendChild(cropBtntext);
//  //     document.getElementById('cropper').appendChild(cropBtn);
//  //     cropBtn.onclick = function() { image_crop(cropBtn.id); };
//  // }
//// Get Converted Url
//  function urlConversion() {
//    var allImageCanvas = document.querySelectorAll('.singleImageCanvas');
//    var convertedUrl = '';
//    for (let element of allImageCanvas) {
//      convertedUrl += element.toDataURL('image/jpeg');
//      convertedUrl += 'img_url';
//    }
//    document.getElementById('profile_img_data').value = convertedUrl;
//  }
//
//   
</script>