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
- On smaller screen sizes, reduce the max size of each logo.
- Add effect where each logo animates into view when scrolled to.

### UI/UX Projects

- Each card:
  - Delete the different-sized images from your assets.
  - Footer:
    - Animate logos in one by one WHEN SCROLLED TO.
    - Make all logos the same size.

### JavaScript & jQuery Projects

- Style and standardize all cards.

### Education & Certificates

- Style and standardize all cards.
	- Images:
		- Hover: MD Bootstrap zoom effect.
		- Make UCLA jpg the same size as the Udemy images.
	- Make card-headers and card-titles the same height, even if some take up one line and others take up two.
	- Buttons:
		- Choose color.
		- Add waves effect when clicked.

### About

- My image in a col-4.
	- fadeInLeft on scroll.
- Bio text in a col-8.
	- Use JS date object to calculate how long I've been coding, and pass it into a span.
		- Get current date. Subtract May 1, 2016 from current date. Store that result in a variable.
		- If under two years: "almost two" years.
		- If equal to or greater than two years: "over X" years.
			- Spell out the numbers until double digits are reached. Then just pass in the numerals.

### Connect

- Rocket picture
- GitHub icon (link opens new tab)
- LinkedIn icon (link opens new tab)
- Résumé icon (link opens new tab of PDF)
- Phone & Email icon (see résumé)

### Footer

- Copyright (with JavaScript date).

## Mobile Responsiveness

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