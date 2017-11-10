	$(document).ready(function(){
	    $(".e-readmore").click(function(){

						$("#scroller").css("display","none");
						$("#e, .text-demo").css("display","block");
						$(".banner-left").css("background", "none");
						$("#p, #b").css("display", "none");
					});
	});

	$( function() {
	    $( "#slider-range-min" ).slider({
	      range: "min",
	      value: 1000,
	      min: 1000,
	      max: 30000,
	      step: 500,
	      slide: function( event, ui ) {
	        $( "#amount" ).val( "₹ " + ui.value );
	        $( "#slider-range-min .ui-slider-handle").append($( "#amount"));
	    } 
    });
	
    $( "#amount" ).val( "₹ " + $( "#slider-range-min" ).slider( "value" ) );
	    $( "#slider-range-min .ui-slider-handle").append($( "#amount" ));
	 	 } );
	  	$( function() {
	    $( "#slider-range-min1" ).slider({
	      range: "min",
	      value: 1,
	      min: 1,
	      max: 30,
	      slide: function( event, ui ) {
	        $( "#amount1" ).val( ui.value + " Days" );
	        $( "#slider-range-min1 .ui-slider-handle").append($( "#amount1" ));
	    }
    });
    $( "#amount1" ).val(  $( "#slider-range-min1" ).slider( "value" ) + " Day" );
	    $( "#slider-range-min1 .ui-slider-handle").append($("#amount1"));

	  	} );

	  	$( function() {
	    $( "#eduamt-range-min" ).slider({
	      range: "min",
	      value: 1000,
	      min: 1000,
	      max: 30000,
	      step: 500,
	      slide: function( event, ui ) {
	        $( "#edu-amount" ).val( "₹ " + ui.value  );
	        $( "#eduamt-range-min .ui-slider-handle").append($("#edu-amount"));
	    }
    });
    $( "#edu-amount" ).val( "₹ " + $( "#eduamt-range-min" ).slider( "value" )   );
	    $( "#eduamt-range-min .ui-slider-handle").append($("#edu-amount"));
	  	} );

	  	$( function() {
	    $( "#edutime-range-min" ).slider({
	      range: "min",
	      value: 1,
	      min: 1,
	      max: 30,
	      slide: function( event, ui ) {
	        $( "#edu-time" ).val( ui.value + " Days" );
	        $( "#edutime-range-min .ui-slider-handle").append($("#edu-time"));
	    }
    });
	    $( "#edu-time" ).val(  $( "#edutime-range-min" ).slider( "value" ) + " Day" );
	    $( "#edutime-range-min .ui-slider-handle").append($("#edu-time"));
	  	} );

	  	$( function() {
	    $( "#busamt-range-min" ).slider({
	      range: "min",
	      value: 1000,
	      min: 1000,
	      max: 30000,
	      step: 500,
	      slide: function( event, ui ) {
	        $( "#bus-amt" ).val(  "₹ " + ui.value   );
	      }
	    });
	    $( "#bus-amt" ).val(  "₹ " + $( "#busamt-range-min" ).slider( "value" ));
	    $( "#busamt-range-min .ui-slider-handle").append($("#bus-amt"));
  		} );

	  	$( function() {
	    $( "#bustime-range-min" ).slider({
	      range: "min",
	      value: 1,
	      min: 1,
	      max: 30,
	      slide: function( event, ui ) {
	        $( "#bus-time" ).val( ui.value + " Days" );
	      }
	    });
	    $( "#bus-time" ).val(  $( "#bustime-range-min" ).slider( "value" ) + " Day" );
	    $( "#bustime-range-min .ui-slider-handle").append($("#bus-time"));
	  	} );



		$(document).ready(function () {
		    var ckbox = $('#active-user');
		    var ckbox1 = $('#existing-user');
		    $("#disp").hide();
		   $(".login-left").hide();
		   $(".login-right1").hide();
		    $(".disp-text p").css("color","#f18641");
		    $(".disp-text1 p").css("color","#255388");
		    $('input').on('click',function () {
		        if (ckbox.is(':checked')) {
		            $("#disp").hide();
		            $("#disp1").show();
		            $(".login-left1").show();
		            $(".login-left").hide();
		            $(".login-right1").hide();
		            $(".login-right").show();
		            
		        } if (ckbox1.is(':checked')) {
		            $("#disp").show();
		            $("#disp1").hide();
		             $(".login-left1").hide();
		            $(".login-left").show();
		            $(".login-right1").show();
		            $(".login-right").hide();
		            
		        } 
		    });
		});



		$(document).ready(function () {
		    $('.box').hide();
		    $('#personal_loans').show();
		    $('#select-loan-type').change(function () {
		        $('.box').hide();
		        $('#'+$(this).val()).show();
		    });
		});
		$('.Count').each(function () {
		    $(this).prop('Counter',0).animate({
		        Counter: $(this).text()
		    }, {
		        duration: 2000,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		});


		$(document).ready(function(){
		    $("#startbutton").click(function(){
		    	$(".sliding-layout").css("display","none !important");
		    	$("#startbutton").slideUp( "slow" );
		    	$(".sliding-layout").css("background","none !important");
		    	$("#fullbg").css("background", "inherit");
		        $("#panel").slideDown("slow");
			});
		});


		/* Borrower slider script */

		setInterval(function() {
			setTimeout(function () {
			    $("#some-element").css("backgroundColor", "#f18641");
			    $("#some-element3").removeClass("someelement2");
			    $("#some-element3").removeClass("someelement3");
			    $("#some-element3").addClass("someelement1");
			    $("#some-element2").css("backgroundColor", "transparent");
			    $("#some-element1").css("backgroundColor", "transparent");
			    $("#p").css("display", "block");
			    $("#e, #b").css("display", "none");
			}, 2000);
			setTimeout(function () {
			    $("#some-element1").css("backgroundColor", "#f18641");
			    $("#some-element3").removeClass("someelement1");
			    $("#some-element3").removeClass("someelement3");
			     $("#some-element3").addClass("someelement2");
			    $("#some-element").css("backgroundColor", "transparent");
			    $("#some-element2").css("backgroundColor", "transparent");
			    $("#e").css("display", "block");
			    $("#p, #b").css("display", "none");
			}, 4000);
			setTimeout(function () {
			    $("#some-element2").css("backgroundColor", "#f18641");
			    $("#some-element3").removeClass("someelement1");
			    $("#some-element3").removeClass("someelement2");
			     $("#some-element3").addClass("someelement3");
			    $("#some-element1").css("backgroundColor", "transparent");
			    $("#some-element").css("backgroundColor", "transparent");
			    $("#b").css("display", "block");
			    $("#e, #p").css("display", "none");
			}, 6000);
		}, 6000);

		$(document).ready(function(){
		    $("#hide-slider1").click(function(){
		        $("#scroller, #e, #p, #b, .text-right").css("display", "none");
		        $("#text-demo1").slideDown(500);
		        $("#text-demo2, #text-demo3").css("display","none")
		        $(".banner-left").css("background", "none");
		    });
		});
		$(document).ready(function(){
		    $("#show-slider1").click(function(){
		        $("#scroller, #e, #p, #b, .text-right").css("display", "block");
		        $("#text-demo1, #text-demo2, #text-demo3").css("display", "none");
		        /*$(".banner-left").css({"background": "url(images/borrow-slide.png) no-repeat;", "background-size": "100%", "background-repeat": "no-repeat"});*/
		        $(".banner-left").css("background", "url(images/borrow-slide.png)");
		        $(".banner-left").css("background-size", "100%");
		        $(".banner-left").css("background-repeat", "no-repeat");
		    });
		});


		$(document).ready(function(){
		    $("#hide-slider2").click(function(){
		        $("#scroller, #e, #p, #b, .text-right").css("display", "none");
		        $("#text-demo2").slideDown(500);
		        $("#text-demo1, #text-demo3").css("display","none")
		        $(".banner-left").css("background", "none");
		    });
		});
		$(document).ready(function(){
		    $("#show-slider2").click(function(){
		        $("#scroller, #e, #p, #b, .text-right").css("display", "block");
		         $("#text-demo1, #text-demo2, #text-demo3").css("display", "none");
		        /*$(".banner-left").css({"background": "url(images/borrow-slide.png) no-repeat;", "background-size": "100%", "background-repeat": "no-repeat"});*/
		        $(".banner-left").css("background", "url(images/borrow-slide.png)");
		        $(".banner-left").css("background-size", "100%");
		        $(".banner-left").css("background-repeat", "no-repeat");
		    });
		});


		$(document).ready(function(){
		    $("#hide-slider3").click(function(){
		        $("#scroller, #e, #p, #b, .text-right").css("display", "none");
		        $("#text-demo3").slideDown(500);
		        $(".banner-left").css("background", "none");
		    });
		});
		$(document).ready(function(){
		    $("#show-slider3").click(function(){
		        $("#scroller, #e, #p, #b, .text-right").css("display", "block");
		        $("#text-demo3").css("display", "none");
		        /*$(".banner-left").css({"background": "url(images/borrow-slide.png) no-repeat;", "background-size": "100%", "background-repeat": "no-repeat"});*/
		        $(".banner-left").css("background", "url(images/borrow-slide.png)");
		        $(".banner-left").css("background-size", "100%");
		        $(".banner-left").css("background-repeat", "no-repeat");
		    });
		});




	/* Lender page */

	$(document).ready(function () {
	    var ckbox = $('#english');
	    var ckbox1 = $('#hindi');
	    $(".eng-label").css("color", "#f18641");
	    
	    $('input').on('click',function () {
		        if (ckbox.is(':checked')) {
		            $(".eng-label").css("color", "#f18641");

		            $(".hin-label").css("color", "#333");
		        } if (ckbox1.is(':checked')) {
		            
		            $(".eng-label").css("color", "#333");

		            $(".hin-label").css("color", "#f18641");
		        } 
		    });
	});

	$(document).ready(function()
	{
		$(".member1-readmore").click(function(){
		        $("#member1, #member2, #member3").hide();
		        $(".fullwidth-layout1").css("display", "block");
			});
			$(".readless1").click(function(event){
				        event.preventDefault();
				$(".fullwidth-layout1").hide();
		        $("#member1, #member2, #member3").show();
			});
	});
	$(document).ready(function()
	{
		$(".member2-readmore").click(function(){
		        $("#member1, #member2, #member3").hide();
		        $(".fullwidth-layout2").css("display", "block");
			});
			$(".readless2").click(function(event){
				        event.preventDefault();
				$(".fullwidth-layout2").hide();
		        $("#member1, #member2, #member3").show();
			});
	});
	$(document).ready(function()
	{
		$(".member3-readmore").click(function(){
		        $("#member1, #member2, #member3").hide();
		        $(".fullwidth-layout3").css("display", "block");
			});
			$(".readless3").click(function(event){
				        event.preventDefault();
				$(".fullwidth-layout3").hide();
		        $("#member1, #member2, #member3").show();
			});
	});