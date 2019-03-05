function readImageInfo(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var image = new Image();

            reader.onload = function (e) {
            image.src = e.target.result;
        }

        image.onload = function () {
            
            var height =  this.height;
            var width = this.width;
            
            if(width<600){
                 alert("Upload Another");
             }else if(width>600){
                 alert ("Crop It");
             }
             else{
                 alert("Image is of correct Width");
             }

        }

        reader.readAsDataURL(input.files[0]);
    }
}
