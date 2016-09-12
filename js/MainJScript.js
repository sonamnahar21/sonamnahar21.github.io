
$().ready(function(){
  
});

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
$(document).on('hide.bs.modal','#myModal', function () {
    document.getElementById("bg-repeatID").style.display = "block";
});

function isAlfa(charCode) {
            if (charCode > 31 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        return false;
    }
    return true;
        }
function isNumber(evt) 
{
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
function submitform(){
    validate();
} 
function validate()
{
    var ideaName = document.getElementById("ideaName");
    var noofMembers = document.getElementById("noofMembers");
    var ideaDes = document.getElementById("ideaDes");
    var targetProb = document.getElementById("targetProb");
    var solution = document.getElementById("solution");
    var targetAudience = document.getElementById("targetAudience");
    var expectedGrowthRate = document.getElementById("expectedGrowthRate");
    var directCompetition = document.getElementById("directCompetition");
    var indirectCompetition = document.getElementById("indirectCompetition");
    if (noofMembers.value>4) {
    noofMembers.setCustomValidity("Enter at most 4!!");
    } 
    else {
    noofMembers.setCustomValidity("");
    }
    
    
}
