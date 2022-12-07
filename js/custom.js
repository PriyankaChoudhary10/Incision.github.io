


// Sticky Nav
$(document).ready(function() {
    var previousScroll = 0,
        headerOrgOffset = $('.navigation').offset().top;

    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        if(currentScroll > headerOrgOffset) {
            if (currentScroll > previousScroll) {
                $('.navigation').fadeOut();
            } else {
                $('.navigation').fadeIn();
                $('.navigation').addClass('f-nav');
             	$('.navigation').removeClass('f-nav-up');
            }
        } else {
             $('.navigation').addClass('f-nav-up'); 
			   
        }
        previousScroll = currentScroll;
    });

});



	
// Toggle Top
jQuery(".burger-menu").click(function () {
	jQuery(this).toggleClass('burger-change');
   jQuery('.top-menu').slideToggle();
   jQuery('.navigation').toggleClass("border-nav");	   
});



// Progress bar


//		jQuery(".progress-bar").loading();
//		jQuery('input').on('click', function () {
//			 jQuery(".progress-bar").loading();
//		});
		
		
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  
  
 
// Popup
  
		$('.show1').click(function(){
		$('#pop1').simplePopup();
        $('#pop1').find('video').get(0).play();      		
		});
	  
		$('.show2').click(function(){
		$('#pop2').simplePopup();
        $('#pop2').find('video').get(0).play(); 
		});  
		
		$('.show3').click(function(){
		$('#pop3').simplePopup();
		
		}); 
		
		
		


  
// Popup close

 $(".simplePopupClose").click(function(){
	location.reload();
});

$(document).on('keyup', function(e) {
if(e.which == 27 || e.keychar == 27) {
$(".simplePopupClose, .simplePopupBackground").trigger('click');
}
});
		
 


		
		
// FAQ TAB			
	
$(document).ready(function(){
		
	$(".tabhead").click(function(){
	$(".tabcont").hide();
	var num =$(this).index();
	
	
	$(".tabhead").removeClass("activa");
	$(this).addClass("activa");
	$(".tabcont").eq(num).show();
	
	});
	$(".tabhead").eq(0).click();
	//$(".tabcont").eq(0).show();
	
	});
	
// FAQ Accordian
!function(t){t.fn.liloAccordion=function(i){var o=t.extend({onlyOneActive:!0,initFirstActive:!0,destructor:!1,hideControl:!1,openNextOnClose:!1},i);return this.each(function(){var i=t(this),n=t("> .lilo-accordion-content",i).prev(".lilo-accordion-control"),e=t("> .lilo-accordion-content",i);if(o.destructor)return n.off("click").removeClass("active"),o.hideControl&&n.css("display","none"),e.css("display","block"),void i.data("status",!1);function c(){n.filter(".active").next(".lilo-accordion-content").stop(!1,!0).slideDown(),n.filter(":not(.active)").next(".lilo-accordion-content").stop(!1,!0).slideUp()}1!=i.data("status")&&(i.data("status",!0),n.css("display","block"),e.css("display","none"),o.initFirstActive&&n.filter(":first").addClass("active"),c(),n.on("click",function(e){e.preventDefault(),(i=t(this)).hasClass("active")?(o.openNextOnClose&&i.parent().find(".lilo-accordion-control").each(function(){if(t(this).index()>i.index())return t(this).addClass("active"),!1}),i.removeClass("active")):(o.onlyOneActive&&n.removeClass("active"),i.addClass("active")),c()}))})}}(jQuery);



 $('.your-class').liloAccordion({
  onlyOneActive: true,
  initFirstActive: true,
  hideControl: false,
  openNextOnClose: true
  });



// menu close
$(document).ready(function(){		
	$(".gotobtn").click(function(){
		$(".rrr").hide();
 	});
});	

