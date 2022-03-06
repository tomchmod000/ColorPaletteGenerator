/* 
Color Palette Generator (with more color theory applied) (maybe more useful for artists)
Written by Tomch546
References: 

Color: 

https://www.clipstudio.net/how-to-draw/archives/156922
https://drawpaintacademy.com/a-comprehensive-guide-to-color-theory-for-artists/

Code: 
https://www.ethangardner.com/articles/2009/03/15/a-math-based-approach-to-color-theory-using-hue-saturation-and-brightness-hsb/
https://css-tricks.com/converting-color-spaces-in-javascript/
http://www.easyrgb.com/en/math.php

General Reference: 

https://www.w3schools.com/colors/colors_hsl.asp
https://www.w3schools.com/colors/colors_picker.asp

*/


// Constants / Presets / Variables
	
	// Hue constants

	// Saturation constants

	// Lightness constants


	// Saturation presets

	// Lightness presets


	// Palette array initialization



// Input color / default color (randomly selected when loading page)


// Color conversions from HSL to HSLA, RGB, RGBA, and Hex

	// HSL to HSLA

	// HSL to RGB

	// HSL to RGBA

	// HSL to Hex

	// Hex to HSL


// Color calculation functions

		// Greyscale

		// Monochromatic

		// Analogus

		// Complementary

		// Split Complementary

		// Triadic

		// Tetradic


// Color array populating functions

	// Hue 

	/* Number of values -> number of colors needed
	   Randomly assign numbers to values
	   Highest valued color placed into spot
	   Reassign numbers for each spot in the array
	   Once array full, check to see if all colors have been used
	   If not, reassign missing color to random spot in array
	   Repeat check until all colors used
	   Replace values with corresponding colors
	   Place final colors into global palette array
	*/

		// Greyscale

		// Monochromatic

		// Analogus

		// Complementary

		// Split Complementary

		// Triadic

		// Tetradic


	// Saturation

	/* Same concept as 'Hue' above
	   Not all saturation values need to be used
	*/
	

	// Lightness

	/* Depending on user choice:
	   1. Randomly assign lightness values using same logic as 'Hue' above
	   Not all lightness values need to be used
	   2. Apply preset lightness values to the global palette array
	*/

 
// Microadjustment functions
// Adjust array values so they fall within a certain range
// Allow for small user adjustments

	// Warmth

	// Saturation 

	// Lightness


// Main function (populates array based on initial color and options chosen)


// Color Display (maybe do this in the html and css files)
