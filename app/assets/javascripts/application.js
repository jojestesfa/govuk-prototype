/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();
  $('main.govuk-main-wrapper#main-content').closest('div.govuk-width-container').removeClass('govuk-width-container');

  var n = $("#nav-primary,#nav-primary-new")
   , r = $("#searchBar")
   , e = $(".js-nav")
   , t = $(".js-expandable")
   , $window = $(window)
   , $body =$('body');
	
  var i = $("#menu-toggle").parent();
  e.on("keydown", function(e) {
        var t = $(this)
          , n = $(".js-expandable__child a:focus")
          , r = e.keyCode;
        "9" == r && n && (t.removeClass("primary-nav__item--focus"),
        t.next().focus()),
        "27" == r && (t.removeClass("primary-nav__item--focus"),
        t.closest(".js-nav").find("a:first").addClass("hide-children").focus(),
        t.closest(".js-nav").find("a:first").focusout(function() {
            $(this).removeClass("hide-children")
        })),
        "40" == r && (e.preventDefault(),
        t.addClass("primary-nav__item--focus"),
        0 < n.length ? n.parent().next().find("a").focus() : t.find(".js-expandable__child:first a").focus()),
        "38" == r && (e.preventDefault(),
        0 < n.length && 0 < n.parent().prev().length ? n.parent().prev().find("a").focus() : (t.removeClass("primary-nav__item--focus"),
        t.find("a:first").focus())),
        "39" == r && (e.preventDefault(),
        t.removeClass("primary-nav__item--focus"),
        t.closest(".js-nav").next().find("a:first").focus()),
        "37" == r && (e.preventDefault(),
        t.removeClass("primary-nav__item--focus"),
        t.closest(".js-nav").prev().find("a:first").focus())
    }),
    e.hover(function() {
        e.find(":focus") && (e.find(":focus").blur(),
        e.removeClass("primary-nav__item--focus"))
    }),
  $("#menu-toggle").on("click", function(e) {
  	e.preventDefault();
    n.toggleClass("nav-main--hidden");
  }),

  
	
  checkPosition(); // run function after document ready
  $(window).on('resize',checkPosition); // on resize window run function
	
	function checkPosition() {
	  if (window.matchMedia('(max-width: 514px)').matches) {
				$body.addClass('viewport-sm').removeClass('viewport-md');
		} else if (window.matchMedia('(max-width: 767px)').matches) {
				$body.removeClass('	viewport-sm').addClass('viewport-md');
			}	
	   else {
				$body.removeClass('viewport-sm viewport-md');
			}	
		}
	
		$(".viewport-sm .primary-nav__link").on("click", function(e) { 
  		e.preventDefault();
		$(this).next().toggleClass("js-nav-hidden");
		
		

        
	
  })
	
})
$().ready(function () {

	
	
	
	var $select1 = $( '#select1' ),
		$select2 = $( '#select2' ),
		$select3 = $( '#select3' ),
    $options = $select2.find( 'option' ),
		 $options2 = $select3.find( 'option' );
    
$select1.on( 'change', function() {
	$select2.html( $options.filter( '[value="' + this.value + '"]' ) );
} ).trigger( 'change' );
	
	$select2.on( 'change', function() {
	$select3.html( $options2.filter( '[value="' + this.value + '"]' ) );
} ).trigger( 'change' );
	

});

function setChild(value){
    //Have your three child selector names as follows in your markup as well and assuming they are not in divs
    var arr = [ "dateselector_child_", "dateselector_child_1", "dateselector_child_2"];

    jQuery.each(arr, function() {
            if(this == "dateselector_child_" + value){
                $("#" + this).show();
            }else{
                $("#" + this).hide();
            }
     });
}




// import 'bootstrap';