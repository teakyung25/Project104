$(function(){
  var nav_stick = $("nav").scrollTop();
  var position = $(window).scrollTop();
    if(position >= nav_stick){
      $("nav").addClass("stick");
    } else {
      $("nav").removeClass("stick");
    }

    window.onpopstate=function(){
      location.reload();
    }
});
