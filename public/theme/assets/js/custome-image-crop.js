function readImageURL(input, id) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) { 
            $('#'+id).attr("src", e.target.result); 
            cropper.destroy(); 
        }  
        reader.readAsDataURL(input.files[0]);
        setTimeout(initCropper(id), 1000);
    }
}
function initCropper(id){
    var image = document.getElementById(id);
    cropper = new Cropper(image, {
    aspectRatio: NaN,
    replace: true,
    crop: function(e) {
        $('#x_cordinate').val(event.detail.x); 
        $('#y_cordinate').val(event.detail.y);
        $('#width').val(event.detail.width);
        $('#height').val(event.detail.height);
        $('#rotation').val(event.detail.rotate);
        $("#rotate-right").css("display", "block");
    }
  })
}

function destroy()
{
    var cropperImageInitCanvas = document.getElementById('cropperImg');
    if(cropperImageInitCanvas.cropper){
        cropperImageInitCanvas.cropper.destroy();
    }

}