/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 $(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.nav');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#my-navbar').css('background-color', '#DCDCDC');
       } else {
          $('#my-navbar').css('background-color', 'transparent');
       }
   });
   var offsets = document.getElementById('menuContainer').getBoundingClientRect();

        // Get position from top of browser
                var topoffsets = offsets.top;

                // Binding fuction to windows scroll event
                $(window).bind('scroll', function () {
                    if ($(window).scrollTop() > topoffsets) {
                                $('#menuContainer').addClass('sticky');
                                $('#menuContainer').addClass('navbar-fixed-top');
                                document.getElementById('divCompititionContentID').style.paddingTop ='0px';
                                $('.divletsGo').addClass('menu-padding');
                                document.getElementById('aboutUSTarget').style.paddingTop='0px';
                                document.getElementById('aboutUSTarget').style.paddingLeft='70px';
                            } else {
                               $('#menuContainer').removeClass('sticky');
                                $('#menuContainer').removeClass('navbar-fixed-top');
                                document.getElementById('divCompititionContentID').style.paddingTop ='380px';
                                //document.getElementById('divCompititionContentID').style.padding='380px';
                                //document.getElementById("divCompititionContentID").style.textAlign = "center";
                                $('.divletsGo').removeClass('menu-padding');
                               document.getElementById('aboutUSTarget').style.paddingTop='20px';
                               document.getElementById('aboutUSTarget').style.paddingLeft='70px';
                            }
                });
});
   function openModal(){
       document.getElementById("bg-repeatID").style.display = "none";
}   
function closeModal(){
       document.getElementById("bg-repeatID").style.display = "block";
}   
$('html').click(function (e) {
    if (e.target.id == 'modal') {
        alert("hi");
    } else {
       document.getElementById("bg-repeatID").style.display = "block";
    }
});
