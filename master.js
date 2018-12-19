$(document).ready(function(){

   var counter = 0;
   var a= 0;
   var b= setInterval(function(){

       $(".loader .number .counted").html(a);
       $(".loader").css("width", a +"%");

       counter++;
       a++;

       if(counter == 101){
            clearInterval(b);
            $(".loader").css("display", "none");
       }

   }, 50);

});