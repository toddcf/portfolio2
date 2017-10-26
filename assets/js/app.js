$( document ).ready( function() {

	// BUTTON CLICK SCROLLING

	// Scroll To Top
	$( ".scroll-to-top" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#home" ).offset().top }, 1000 );

	});
	
	// Proficiencies
	$( ".scroll-to-proficiencies" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#proficiencies" ).offset().top }, 1000 );

	});

	// UI/UX
	$( ".scroll-to-ui-ux" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#ui-ux" ).offset().top }, 1000 );

	});

	// JavaScript
	$( ".scroll-to-javascript" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#javascript" ).offset().top }, 1000 );

	});

	// Education & Certifications
	$( ".scroll-to-certifications" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#certifications" ).offset().top }, 1000 );

	});

	// About
	$( ".scroll-to-about" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#about" ).offset().top }, 1000 );

	});

	// Connect
	$( ".scroll-to-connect" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#connect" ).offset().top }, 1000 );

	});

	// ANIMATIONS ON SCROLL

	// .card-a:
	$( ".card-a" ).waypoint( function( direction ) {
		$( ".card-a" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "50%"
	});
	// We actually aren't using "direction" in this case, because this animation will only happen once.

	// .card-b:
	$( ".card-b" ).waypoint( function( direction ) {
		$( ".card-b" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "50%"
	});

	// .card-c:
	$( ".card-c" ).waypoint( function( direction ) {
		$( ".card-c" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "50%"
	});

	// .card-d:
	$( ".card-d" ).waypoint( function( direction ) {
		$( ".card-d" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "50%"
	});

	// .card-e:
	$( ".card-e" ).waypoint( function( direction ) {
		$( ".card-e" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "50%"
	});

	// .card-f:
	$( ".card-f" ).waypoint( function( direction ) {
		$( ".card-f" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "50%"
	});

	// .card-g:
	$( ".card-g" ).waypoint( function( direction ) {
		$( ".card-g" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "50%"
	});

	// .card-h:
	$( ".card-h" ).waypoint( function( direction ) {
		$( ".card-h" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "50%"
	});

	// .card-i:
	$( ".card-i" ).waypoint( function( direction ) {
		$( ".card-i" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "50%"
	});


} );