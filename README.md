# Portfolio 2

Second iteration of my web developer portfolio.

![Todd Croak-Falen | Web Developer](https://github.com/toddcf/portfolio2/blob/master/assets/img/bg/tropical.jpg "Todd Croak-Falen | Web Developer")

## Technologies Used

- HTML5
- CSS3
- Bootstrap 4 Beta
- jQuery

## This Iteration

### All

- Add new favicon.

### Header

- Try using rows and columns to fix the iPhone issue.

### Nav

- Make bg white-opaque.
- Get it to automatically close when a link is clicked, WITHOUT screwing up the scrolling feature.

### Proficiencies

- Make all logos the same size.
- Add effect where each logo animates into view when scrolled to.

### UI/UX Projects

- Each card:
  - Delete the different-sized images from your assets.
  - Footer:
    - Animate logos in one by one WHEN SCROLLED TO.
    - Make all logos the same size.

### JavaScript & jQuery Projects

- Resize all images!

### Education & Certificates

- Maybe use an accordion for all card details.
- Style all cards.
- Certifications:
	- The Coding Boot Camp at UCLA Extension
		-Instructors: Link to Omar's and Michael's LinkedIn profiles.
	- Udemy: HTML5/CSS3 (Jonas)
	- Udemy: JavaScript (Jonas)
	- Udemy: Bootstrap 4 Beta (Brad Traversy)
	- Udemy: SEO Basics
	- Udemy: OpenWeatherMap API
	- Udemy: Wireframing
- Each card:
  - Img-fluid of the certificate at top.
  - Hover image:
    - MD Bootstrap zoom effect.
    - Cursor: Pointer
  - Click image:
    - Waves effect.
    - Lightbox: Full size image of certificate.

### About

- My image in a col-4.
	- fadeInLeft on scroll.
- Bio text in a col-8.
	- Use JS date object to calculate how long I've been coding, and pass it into a span.
		- If under two years: "almost two" years.
		- If over two years: "over X" years.
			- Spell out the numbers until double digits are reached. Then just pass in the numerals.

### Connect

- GitHub (new tab)
- LinkedIn (new tab)
- Résumé (PDF, new tab)
- Phone & Email (see résumé)

### Footer

- Copyright

## Final Cleanup

- Add Google Analytics, but only right before deployment. (Don't want to screw things up with the gh-pages version.)

## Future Iterations

- Have each mobile-responsive row of cards fadeUp one after the other when scrolled to:
	- sm breakpoint: 1 card across:
	  - Add class for .fadeInUp when scrolled to.
	  - No delay.
	- md breakpoint: 2 cards across:
	  - Add class for .fadeInUp when scrolled to.
	  - Add class for 0.5s delay on second card.
	- lg breakpoint: 3 cards across:
	  - .fadeInUp when scrolled to.
	  - 0.5s delay on second card.
	  - 1s delay on third card.