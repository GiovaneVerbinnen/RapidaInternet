
     var nav = document.getElementById('menu');

       window.onscroll = function () {

         if(window.pageYOffset > 0){

          nav.style.position = "fixed";
          nav.style.top = 0;
  



          }else{
            nav.style.position = 'relative';
            nav.style.top = 100;
          }
       }



