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

	// Omnifood
	$( "#omnifood" ).waypoint( function( direction ) {
		$( "#omnifood" ).addClass( "animate-1 fadeInUp" );
		$( "#omnifood .mini-logo-a").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#omnifood .mini-logo-b").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#omnifood .mini-logo-c").addClass( "animate-0-75 animate-delay-c fadeInRight");
	}, {
		offset: "50%"
	});
	// We actually aren't using "direction" in this case, because this animation will only happen once.

	// Author Site
	$( "#author-site" ).waypoint( function( direction ) {
		$( "#author-site" ).addClass( "animate-1 fadeInUp" );
		$( "#author-site .mini-logo-a").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#author-site .mini-logo-b").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#author-site .mini-logo-c").addClass( "animate-0-75 animate-delay-c fadeInRight");
		$( "#author-site .mini-logo-d").addClass( "animate-0-75 animate-delay-d fadeInRight");
	}, {
		offset: "50%"
	});

	// Piel Canela
	$( "#piel-canela" ).waypoint( function( direction ) {
		$( "#piel-canela" ).addClass( "animate-1 fadeInUp" );
		$( "#piel-canela .mini-logo-a").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#piel-canela .mini-logo-b").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#piel-canela .mini-logo-c").addClass( "animate-0-75 animate-delay-c fadeInRight");
		$( "#piel-canela .mini-logo-d").addClass( "animate-0-75 animate-delay-d fadeInRight");
	}, {
		offset: "50%"
	});

	// Image Gallery
	$( "#image-gallery" ).waypoint( function( direction ) {
		$( "#image-gallery" ).addClass( "animate-1 fadeInUp" );
		$( "#image-gallery .mini-logo-a").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#image-gallery .mini-logo-b").addClass( "animate-0-75 animate-delay-b fadeInRight");
	}, {
		offset: "50%"
	});

	// Transport Image Gallery
	$( "#transport" ).waypoint( function( direction ) {
		$( "#transport" ).addClass( "animate-1 fadeInUp" );
		$( "#transport .mini-logo-a").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#transport .mini-logo-b").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#transport .mini-logo-c").addClass( "animate-0-75 animate-delay-c fadeInRight");
		$( "#transport .mini-logo-d").addClass( "animate-0-75 animate-delay-d fadeInRight");
	}, {
		offset: "50%"
	});

	// Purrfect Match
	$( "#purrfect" ).waypoint( function( direction ) {
		$( "#purrfect" ).addClass( "animate-1 fadeInUp" );
		$( "#purrfect .mini-logo-a").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#purrfect .mini-logo-b").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#purrfect .mini-logo-c").addClass( "animate-0-75 animate-delay-c fadeInRight");
		$( "#purrfect .mini-logo-d").addClass( "animate-0-75 animate-delay-d fadeInRight");
	}, {
		offset: "50%"
	});

	// Teleportation Vacation
	$( "#teleportation" ).waypoint( function( direction ) {
		$( "#teleportation" ).addClass( "animate-1 fadeInUp" );
		$( "#teleportation .mini-logo-a").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#teleportation .mini-logo-b").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#teleportation .mini-logo-c").addClass( "animate-0-75 animate-delay-c fadeInRight");
	}, {
		offset: "50%"
	});

	// New York Advertising Agency
	$( "#ny-ad-agency" ).waypoint( function( direction ) {
		$( "#ny-ad-agency" ).addClass( "animate-1 fadeInUp" );
		$( "#ny-ad-agency .mini-logo-a").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#ny-ad-agency .mini-logo-b").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#ny-ad-agency .mini-logo-c").addClass( "animate-0-75 animate-delay-c fadeInRight");
		$( "#ny-ad-agency .mini-logo-d").addClass( "animate-0-75 animate-delay-d fadeInRight");
	}, {
		offset: "50%"
	});

	// Nature Escape
	$( "#nature-escape" ).waypoint( function( direction ) {
		$( "#nature-escape" ).addClass( "animate-1 fadeInUp" );
		$( "#nature-escape .mini-logo-a").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#nature-escape .mini-logo-b").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#nature-escape .mini-logo-c").addClass( "animate-0-75 animate-delay-c fadeInRight");
	}, {
		offset: "50%"
	});

	// Wealth Tracker
	$( "#wealth-tracker" ).waypoint( function( direction ) {
		$( "#wealth-tracker" ).addClass( "animate-1 fadeInUp" );
		$( "#wealth-tracker .mini-logo-a").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#wealth-tracker .mini-logo-b").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#wealth-tracker .mini-logo-c").addClass( "animate-0-75 animate-delay-c fadeInRight");
	}, {
		offset: "50%"
	});


} );