/**
 * Created by Jacek on 2015-12-16.
 */

$(document).ready(function(){
    var nav = $("nav");
    var menu = nav.find(".menu");
    var navDistanceFromTop = menu.position().top;

    $(window).on("scroll", function(event){
        var curentDistanceFromTop = $(document).scrollTop();
        if(curentDistanceFromTop > navDistanceFromTop){
            menu.addClass("sticky");
        }
        else {
          menu.removeClass("sticky");
        }
    });


    $( window ).resize(function() {
        if(nav.hasClass("sticky")){
            navDistanceFromTop = $('.menu').position().top;
        }
        else{
            navDistanceFromTop = nav.position().top;
        }
    });
});


/**
 * Created by Jacek on 2015-12-16.
 */

// $(document).ready(function(){
//     var nav = $(".nav");
//     var navDistanceFromTop = nav.position().top;
//     var placeholder = $("<div></div>");
//     placeholder.css("height", nav.outerHeight());
//
//     $( window ).resize(function() {
//         if(nav.hasClass("sticky")){
//             navDistanceFromTop = placeholder.position().top;
//         }
//         else{
//             navDistanceFromTop = nav.position().top;
//         }
//     });
//
//     $(window).on("scroll", function(event){
//         var curentDistanceFromTop = $(document).scrollTop();
//         if(curentDistanceFromTop > navDistanceFromTop){
//             nav.addClass("sticky");
//             if(placeholder.parent().length === 0){
//                 placeholder.insertBefore(nav);
//             }
//         }
//         else{
//             nav.removeClass("sticky");
//             if(placeholder.parent().length !== 0){
//                 placeholder.detach();
//             }
//         }
//     });
// });
