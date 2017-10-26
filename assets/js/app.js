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
		$( ".card-a .mini-logo-a").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( ".card-a .mini-logo-b").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( ".card-a .mini-logo-c").addClass( "animate-0-75 animate-delay-c fadeInRight");
	}, {
		offset: "50%"
	});
	// We actually aren't using "direction" in this case, because this animation will only happen once.

	// .card-b:
	$( ".card-b" ).waypoint( function( direction ) {
		$( ".card-b" ).addClass( "animate-1 fadeInUp" );
		$( ".card-b .mini-logo-a").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( ".card-b .mini-logo-b").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( ".card-b .mini-logo-c").addClass( "animate-0-75 animate-delay-c fadeInRight");
		$( ".card-b .mini-logo-d").addClass( "animate-0-75 animate-delay-d fadeInRight");
	}, {
		offset: "50%"
	});

	// .card-c:
	$( ".card-c" ).waypoint( function( direction ) {
		$( ".card-c" ).addClass( "animate-1 fadeInUp" );
		$( ".card-c .mini-logo-a").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( ".card-c .mini-logo-b").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( ".card-c .mini-logo-c").addClass( "animate-0-75 animate-delay-c fadeInRight");
		$( ".card-c .mini-logo-d").addClass( "animate-0-75 animate-delay-d fadeInRight");
	}, {
		offset: "50%"
	});

	// .card-d:
	$( ".card-d" ).waypoint( function( direction ) {
		$( ".card-d" ).addClass( "animate-1 fadeInUp" );
		$( ".card-d .mini-logo-a").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( ".card-d .mini-logo-b").addClass( "animate-0-75 animate-delay-b fadeInRight");
	}, {
		offset: "50%"
	});

	// .card-e:
	$( ".card-e" ).waypoint( function( direction ) {
		$( ".card-e" ).addClass( "animate-1 fadeInUp" );
		$( ".card-e .mini-logo-a").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( ".card-e .mini-logo-b").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( ".card-e .mini-logo-c").addClass( "animate-0-75 animate-delay-c fadeInRight");
		$( ".card-e .mini-logo-d").addClass( "animate-0-75 animate-delay-d fadeInRight");
	}, {
		offset: "50%"
	});

	// .card-f:
	$( ".card-f" ).waypoint( function( direction ) {
		$( ".card-f" ).addClass( "animate-1 fadeInUp" );
		$( ".card-f .mini-logo-a").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( ".card-f .mini-logo-b").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( ".card-f .mini-logo-c").addClass( "animate-0-75 animate-delay-c fadeInRight");
		$( ".card-f .mini-logo-d").addClass( "animate-0-75 animate-delay-d fadeInRight");
	}, {
		offset: "50%"
	});

	// .card-g:
	$( ".card-g" ).waypoint( function( direction ) {
		$( ".card-g" ).addClass( "animate-1 fadeInUp" );
		$( ".card-g .mini-logo-a").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( ".card-g .mini-logo-b").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( ".card-g .mini-logo-c").addClass( "animate-0-75 animate-delay-c fadeInRight");
	}, {
		offset: "50%"
	});

	// .card-h:
	$( ".card-h" ).waypoint( function( direction ) {
		$( ".card-h" ).addClass( "animate-1 fadeInUp" );
		$( ".card-h .mini-logo-a").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( ".card-h .mini-logo-b").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( ".card-h .mini-logo-c").addClass( "animate-0-75 animate-delay-c fadeInRight");
		$( ".card-h .mini-logo-d").addClass( "animate-0-75 animate-delay-d fadeInRight");
	}, {
		offset: "50%"
	});

	// .card-i:
	$( ".card-i" ).waypoint( function( direction ) {
		$( ".card-i" ).addClass( "animate-1 fadeInUp" );
		$( ".card-i .mini-logo-a").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( ".card-i .mini-logo-b").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( ".card-i .mini-logo-c").addClass( "animate-0-75 animate-delay-c fadeInRight");
	}, {
		offset: "50%"
	});


} );