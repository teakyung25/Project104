$(function(){
  var nav_stick = $("nav").scrollTop();
  var position = $(window).scrollTop();
  console.log(nav_stick);
  console.log(position);
    if(position >= nav_stick){
      $("nav").addClass("stick");
    } else {
      $("nav").removeClass("stick");
    }

    window.onpopstate=function(){
      location.reload();
    }
});
