var i = 0;
var images = [];
var time = 2000;

images[0]= "images/goku.jpg";
images[1]= "images/black.jpg";
images[2]= "images/goku2.jpg";
images[3]= "images/b.jpg";


function changeImg(){
    document.slide.src = images[i];
    if(i< images.length -1){
        i++
    } else{
        i=0;
    }
    setTimeout('changeImg()',time);

}
window.onload = changeImg;

function nextImg(){
    document.slide.src = images[i];
    if(i< images.length -1){
        i++
    } else{
        i=0;
    }

}



function backImg(){
    document.slide.src = images[i];
    if(i> images.length -1 ){
        --i
    } else{
        i=0;
    }

}