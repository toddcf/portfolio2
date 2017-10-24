$( document ).ready( function() {

	alert("app.js is linked.");

	// BUTTON CLICK SCROLLING

	$( ".scroll-to-top" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#hero" ).offset().top }, 1000 );

	});
	
	// Schedule Now
	$( ".scroll-to-schedule" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#schedule" ).offset().top }, 1000 );

	});

	// About Therapist
	$( ".scroll-to-about-therapist" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#about-therapist" ).offset().top }, 1000 );

	});

	// Benefits
	$( ".scroll-to-benefits" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#benefits" ).offset().top }, 1000 );

	});

	// Testimonials
	$( ".scroll-to-testimonials" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#testimonials" ).offset().top }, 1000 );

	});

	// Services & Rates
	$( ".scroll-to-rates" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#rates" ).offset().top }, 1000 );

	});

};