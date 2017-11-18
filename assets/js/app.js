$( document ).ready( function() {

	// CODING DURATION IIFE
	var duration = ( function() {

		var todayDate = new Date();
		var startDate = new Date( 2016, 04, 04 ); /* May 4, 2016 (Jan is 0) */

		var estimatedDiff = Math.floor( ( todayDate - startDate ) / 31556900000 );
		console.log(estimatedDiff);

		if ( estimatedDiff < 2 ) {
			$( ".coding-duration" ).html( "almost 2" );
		}
		else {
			$( ".coding-duration" ).html( "over " + estimatedDiff );
		}

	}) ();

	// FOOTER
	var thisYear = new Date().getFullYear();
	// Pass thisYear into footer copyright's .currentYear span:
	// Footer (IIFE):
	var footerInfo = ( function() {
		$( ".currentYear" ).html( "&ndash;&nbsp;" + thisYear + "&nbsp;" );
	}) ();

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

	// Education & Certificates
	$( ".scroll-to-certificates" ).click( function() {
		
		$( "html, body" ).animate( { scrollTop: $( "#certificates" ).offset().top }, 1000 );

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
	}, {
		offset: "85%"
	});
	// We actually aren't using "direction" in this case, because this animation will only happen once.

	$( "#omnifood .mini-logo" ).waypoint( function( direction ) {
		$( "#omnifood .mini-logo-a").addClass( "animate-0-75 fadeInRight");
		$( "#omnifood .mini-logo-b").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#omnifood .mini-logo-c").addClass( "animate-0-75 animate-delay-b fadeInRight");
	}, {
		offset: "95%"
	});

	// Author Site
	$( "#author-site" ).waypoint( function( direction ) {
		$( "#author-site" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	$( "#author-site .mini-logo" ).waypoint( function( direction ) {
		$( "#author-site .mini-logo-a").addClass( "animate-0-75 fadeInRight");
		$( "#author-site .mini-logo-b").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#author-site .mini-logo-c").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#author-site .mini-logo-d").addClass( "animate-0-75 animate-delay-c fadeInRight");
		$( "#author-site .mini-logo-e").addClass( "animate-0-75 animate-delay-d fadeInRight");
	}, {
		offset: "95%"
	});

	// Piel Canela
	$( "#piel-canela" ).waypoint( function( direction ) {
		$( "#piel-canela" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	$( "#piel-canela .mini-logo" ).waypoint( function( direction ) {
		$( "#piel-canela .mini-logo-a").addClass( "animate-0-75 fadeInRight");
		$( "#piel-canela .mini-logo-b").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#piel-canela .mini-logo-c").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#piel-canela .mini-logo-d").addClass( "animate-0-75 animate-delay-c fadeInRight");
	}, {
		offset: "95%"
	});

	// My Portfolio
	$( "#my-portfolio" ).waypoint( function( direction ) {
		$( "#my-portfolio" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	$( "#my-portfolio .mini-logo" ).waypoint( function( direction ) {
		$( "#my-portfolio .mini-logo-a").addClass( "animate-0-75 fadeInRight");
		$( "#my-portfolio .mini-logo-b").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#my-portfolio .mini-logo-c").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#my-portfolio .mini-logo-d").addClass( "animate-0-75 animate-delay-c fadeInRight");
		$( "#my-portfolio .mini-logo-e").addClass( "animate-0-75 animate-delay-d fadeInRight");
	}, {
		offset: "95%"
	});

	// Image Gallery
	$( "#image-gallery" ).waypoint( function( direction ) {
		$( "#image-gallery" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	$( "#image-gallery .mini-logo" ).waypoint( function( direction ) {
		$( "#image-gallery .mini-logo-a").addClass( "animate-0-75 fadeInRight");
		$( "#image-gallery .mini-logo-b").addClass( "animate-0-75 animate-delay-a fadeInRight");
	}, {
		offset: "95%"
	});

	// Transport Image Gallery
	$( "#transport" ).waypoint( function( direction ) {
		$( "#transport" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	$( "#transport .mini-logo" ).waypoint( function( direction ) {
		$( "#transport .mini-logo-a").addClass( "animate-0-75 fadeInRight");
		$( "#transport .mini-logo-b").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#transport .mini-logo-c").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#transport .mini-logo-d").addClass( "animate-0-75 animate-delay-c fadeInRight");
	}, {
		offset: "95%"
	});

	// Purrfect Match
	$( "#purrfect" ).waypoint( function( direction ) {
		$( "#purrfect" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	$( "#purrfect .mini-logo" ).waypoint( function( direction ) {
		$( "#purrfect .mini-logo-a").addClass( "animate-0-75 fadeInRight");
		$( "#purrfect .mini-logo-b").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#purrfect .mini-logo-c").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#purrfect .mini-logo-d").addClass( "animate-0-75 animate-delay-c fadeInRight");
	}, {
		offset: "95%"
	});

	// Teleportation Vacation
	$( "#teleportation" ).waypoint( function( direction ) {
		$( "#teleportation" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	$( "#teleportation .mini-logo" ).waypoint( function( direction ) {
		$( "#teleportation .mini-logo-a").addClass( "animate-0-75 fadeInRight");
		$( "#teleportation .mini-logo-b").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#teleportation .mini-logo-c").addClass( "animate-0-75 animate-delay-b fadeInRight");
	}, {
		offset: "95%"
	});

	// New York Advertising Agency
	$( "#ny-ad-agency" ).waypoint( function( direction ) {
		$( "#ny-ad-agency" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	$( "#ny-ad-agency .mini-logo" ).waypoint( function( direction ) {
		$( "#ny-ad-agency .mini-logo-a").addClass( "animate-0-75 fadeInRight");
		$( "#ny-ad-agency .mini-logo-b").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#ny-ad-agency .mini-logo-c").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#ny-ad-agency .mini-logo-d").addClass( "animate-0-75 animate-delay-c fadeInRight");
	}, {
		offset: "95%"
	});

	// Nature Escape
	$( "#nature-escape" ).waypoint( function( direction ) {
		$( "#nature-escape" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	$( "#nature-escape .mini-logo" ).waypoint( function( direction ) {
		$( "#nature-escape .mini-logo-a").addClass( "animate-0-75 fadeInRight");
		$( "#nature-escape .mini-logo-b").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#nature-escape .mini-logo-c").addClass( "animate-0-75 animate-delay-b fadeInRight");
	}, {
		offset: "95%"
	});

	// Color Guessing Game
	$( "#color-game" ).waypoint( function( direction ) {
		$( "#color-game" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	$( "#color-game .mini-logo" ).waypoint( function( direction ) {
		$( "#color-game .mini-logo-a").addClass( "animate-0-75 fadeInRight");
		$( "#color-game .mini-logo-b").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#color-game .mini-logo-c").addClass( "animate-0-75 animate-delay-b fadeInRight");
	}, {
		offset: "95%"
	});

	// Wealth Tracker
	$( "#wealth-tracker" ).waypoint( function( direction ) {
		$( "#wealth-tracker" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	$( "#wealth-tracker .mini-logo" ).waypoint( function( direction ) {
		$( "#wealth-tracker .mini-logo-a").addClass( "animate-0-75 fadeInRight");
		$( "#wealth-tracker .mini-logo-b").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#wealth-tracker .mini-logo-c").addClass( "animate-0-75 animate-delay-b fadeInRight");
	}, {
		offset: "95%"
	});

	// Skywatcher Weather API
	$( "#skywatcher" ).waypoint( function( direction ) {
		$( "#skywatcher" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	$( "#skywatcher .mini-logo" ).waypoint( function( direction ) {
		$( "#skywatcher .mini-logo-a").addClass( "animate-0-75 fadeInRight");
		$( "#skywatcher .mini-logo-b").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#skywatcher .mini-logo-c").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#skywatcher .mini-logo-d").addClass( "animate-0-75 animate-delay-c fadeInRight");
		$( "#skywatcher .mini-logo-e").addClass( "animate-0-75 animate-delay-d fadeInRight");
		$( "#skywatcher .mini-logo-f").addClass( "animate-0-75 animate-delay-e fadeInRight");
	}, {
		offset: "95%"
	});

	// Hangman - Robert De Niro Edition
	$( "#hangman-de-niro" ).waypoint( function( direction ) {
		$( "#hangman-de-niro" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	$( "#hangman-de-niro .mini-logo" ).waypoint( function( direction ) {
		$( "#hangman-de-niro .mini-logo-a").addClass( "animate-0-75 fadeInRight");
		$( "#hangman-de-niro .mini-logo-b").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#hangman-de-niro .mini-logo-c").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#hangman-de-niro .mini-logo-d").addClass( "animate-0-75 animate-delay-c fadeInRight");
	}, {
		offset: "95%"
	});

	// Pirate Treasure
	$( "#pirate-treasure" ).waypoint( function( direction ) {
		$( "#pirate-treasure" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	$( "#pirate-treasure .mini-logo" ).waypoint( function( direction ) {
		$( "#pirate-treasure" ).addClass( "animate-1 fadeInUp" );
		$( "#pirate-treasure .mini-logo-a").addClass( "animate-0-75 fadeInRight");
		$( "#pirate-treasure .mini-logo-b").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#pirate-treasure .mini-logo-c").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#pirate-treasure .mini-logo-d").addClass( "animate-0-75 animate-delay-c fadeInRight");
		$( "#pirate-treasure .mini-logo-e").addClass( "animate-0-75 animate-delay-d fadeInRight");
	}, {
		offset: "95%"
	});

	// Illegal Dice Game
	$( "#illegal-dice" ).waypoint( function( direction ) {
		$( "#illegal-dice" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	$( "#illegal-dice .mini-logo" ).waypoint( function( direction ) {
		$( "#illegal-dice" ).addClass( "animate-1 fadeInUp" );
		$( "#illegal-dice .mini-logo-a").addClass( "animate-0-75 fadeInRight");
		$( "#illegal-dice .mini-logo-b").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#illegal-dice .mini-logo-c").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#illegal-dice .mini-logo-d").addClass( "animate-0-75 animate-delay-c fadeInRight");
		$( "#illegal-dice .mini-logo-e").addClass( "animate-0-75 animate-delay-d fadeInRight");
	}, {
		offset: "95%"
	});

	// Collector of the Crystal Skulls
	$( "#crystal-skulls" ).waypoint( function( direction ) {
		$( "#crystal-skulls" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	$( "#crystal-skulls .mini-logo" ).waypoint( function( direction ) {
		$( "#crystal-skulls .mini-logo-a").addClass( "animate-0-75 fadeInRight");
		$( "#crystal-skulls .mini-logo-b").addClass( "animate-0-75 animate-delay-a fadeInRight");
		$( "#crystal-skulls .mini-logo-c").addClass( "animate-0-75 animate-delay-b fadeInRight");
		$( "#crystal-skulls .mini-logo-d").addClass( "animate-0-75 animate-delay-c fadeInRight");
	}, {
		offset: "95%"
	});

	// The Coding Boot Camp at UCLA Extension
	$( "#ucla-boot-camp" ).waypoint( function( direction ) {
		$( "#ucla-boot-camp" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	// HTML5 / CSS3
	$( "#jonas-html5-css3" ).waypoint( function( direction ) {
		$( "#jonas-html5-css3" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	// Bootstrap 4 Beta
	$( "#bs4b" ).waypoint( function( direction ) {
		$( "#bs4b" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	// The Complete JavaScript Course
	$( "#jonas-js" ).waypoint( function( direction ) {
		$( "#jonas-js" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	// Open Weather Map API
	$( "#weather-api" ).waypoint( function( direction ) {
		$( "#weather-api" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	// SEO Basics
	$( "#seo-basics" ).waypoint( function( direction ) {
		$( "#seo-basics" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	// Wireframing and Prototyping
	$( "#udemy-wireframing" ).waypoint( function( direction ) {
		$( "#udemy-wireframing" ).addClass( "animate-1 fadeInUp" );
	}, {
		offset: "85%"
	});

	// ABOUT SECTION
	$( ".tcf-photo" ).waypoint( function( direction ) {
		$( ".tcf-photo" ).addClass( "animate-1 fadeInLeft" );
	}, {
		offset: "85%"
	});

	$( ".bio" ).waypoint( function( direction ) {
		$( ".bio" ).addClass( "animate-1 fadeInRight" );
	}, {
		offset: "85%"
	});

	// CONNECT SECTION
	$( "#connect-github" ).waypoint( function( direction ) {
		$( "#connect-github" ).addClass( "animate-1 bounceInUp" );
	}, {
		offset: "85%"
	});

	$( "#connect-linkedin" ).waypoint( function( direction ) {
		$( "#connect-linkedin" ).addClass( "animate-1 bounceInUp" );
	}, {
		offset: "85%"
	});

	$( "#connect-resume" ).waypoint( function( direction ) {
		$( "#connect-resume" ).addClass( "animate-1 bounceInUp" );
	}, {
		offset: "85%"
	});

} );