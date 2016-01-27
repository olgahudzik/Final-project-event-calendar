/**
 * Created by Jacek on 2015-12-16.
 */

$(document).ready(function(){
    var ul = $(".slider ul");
    var firestUlChild = ul.children().first();
    var lastUlChild = ul.children().last();

    firestUlChild.before(lastUlChild.clone());
    lastUlChild.after(firestUlChild.clone());

    var pictures = $(".slider img");
    var nextPicture = $("#nextPicture");
    var prevPicture = $("#prevPicture");
    var imageWidth = 400;
    var currentImage = 1;

    ul.css("width", imageWidth * pictures.length + "px");
    ul.css("left", -currentImage * imageWidth + "px");

    nextPicture.on("click", function(event){
        currentImage++;
        console.log("I want to start animate " + currentImage);
        ul.animate({
            "left" :  -currentImage * imageWidth + "px"
        }, 1000, function(){
            console.log("I ended animation " + currentImage);
            if(currentImage >= pictures.length -1){
                currentImage = 1;
                ul.css("left", -currentImage * imageWidth + "px");
            }
        });
    });

    prevPicture.on("click", function(event){
        currentImage--;
        ul.animate({
            "left" :  -currentImage * imageWidth + "px"
        }, 1000, function(){
            if(currentImage === 0){
                currentImage = pictures.length - 2;
                ul.css("left", -currentImage * imageWidth + "px");
            }
        });
    });
});