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
https://www.techonthenet.com/js/continue.php
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color

General Reference: 

https://www.w3schools.com/colors/colors_hsl.asp
https://www.w3schools.com/colors/colors_picker.asp

*/

// TODO delete everything with "test" label 
// add random math option when loading in values (hue and sat and light) to spice things up a little (just a little)
//			want them to be slightly off mathematically calculated exact value (at most 5? 10? 15?  off from either side)
// add in check to see all colors are distinct from each other (if all three values too close when comparing the two then redo one of them)


// Constants / Presets / Variables
	
	// Hue constants

	// Saturation constants

	const sat1 = 14;
	const sat2 = 28;
	const sat3 = 42;
	const sat4 = 57;
	const sat5 = 71;
	const sat6 = 85;
	const sat7 = 99;

	// Lightness constants

	const light1 = 14;
	const light2 = 28;
	const light3 = 42;
	const light4 = 57;
	const light5 = 71;
	const light6 = 85;
	const light7 = 99;

	// Saturation presets

	// TODO
	// Let user choose presets? implement later

	const sat_standard = [sat1, sat3, sat5, sat7, sat5, sat3, sat1];
	
	/* maybe don't need
	const sat_dull =     [sat1, sat1, sat2, sat3, sat2, sat1, sat1];
	const sat_heav =     [sat5, sat6, sat6, sat7, sat6, sat6, sat5];
	const sat_mid =      [sat2, sat3, sat4, sat5, sat4, sat3, sat2];
	const sat_one =      [sat2, sat2, sat2, sat4, sat2, sat2, sat2];
	const sat_two =      [sat4, sat2, sat4, sat2, sat2, sat2, sat2];
	*/

	// Lightness presets

	const light_standard = [light1, light3, light5, light7, light5, light3, light1];

	// Palette array initialization and conversion functions

	const palette = [];

	function initializePalette() {

		for (let i = 0; i < 7; i++) {
			// [H, S, L] values
			palette[i] = [120, 60, 70];
		}

		// test
		console.log(palette);
	}

	const HSLpalette = [];

	function convertArrayToHSL() {

		for (let i = 0; i < 7; i++) {

			HSLpalette[i] = "hsl(" + palette[i][0] + ", " + palette[i][1] + "%, " + palette[i][2] + "%)"; 
		}

		// test
		console.log(HSLpalette);
	}

	// test
	function changeColor(){
		for (let i = 0; i < 7; i++) {
			// [H, S, L] values
			palette[i][0] = [180];
		}
	}


// Input color / default color (randomly selected when loading page)

let input_hex = "#66ffcc";

let input_hue = 0;
let input_sat = 0;
let input_light = 0;

// Color conversions from HSL to HSLA, RGB, RGBA, and Hex

	// HSL to HSLA

	// HSL to RGB

	// HSL to RGBA

	// HSL to Hex

	// Hex to HSL

	function hexToHSL(H) {
  // Convert hex to RGB first
  let r = 0, g = 0, b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

  if (delta == 0)
    h = 0;
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  else if (cmax == g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);
  
  // set conversion into input
  input_hue = h;
  input_sat = s;
  input_light = l;
  

  return "hsl(" + h + "," + s + "%," + l + "%)";
}


// Color calculation functions
// Take hsl hue value as input, calculate corresponding colors
// Stick them into new array for poplating functions to use

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

	/* Take input array of known length (based on number of colors)



	*/

		// Greyscale

		// Monochromatic

		// Analogus

		// Complementary

		// Split Complementary

		// Triadic

		// Tetradic

		// Test
		function loadColor() {
			/*
				let a = 0;
				let b = 0;
				let c = 0;
				let d = 0;
				*/

				//a = Math.floor(Math.random() * 361);
				//a = event.target.value;
				let a = input_hue;
				let b = Math.floor(Math.random() * 361);
				let c = Math.floor(Math.random() * 361);
				let d = Math.floor(Math.random() * 361);

			for (let i = 0; i < 7; i++) {
				  // use array to store a, b, c , d etc 
					// for actual function assign variablearray[0]  = inputarray[huevalue0];
					// etc etc

					// array for anum -> loop to assign based on length of variable array
					// in loop default assign them random values
					// create separate function for these array initializations?

					// also function for checking if hsl numbers are too close
				let anum;
				let bnum;
				let cnum;
				let dnum;

				anum = Math.floor(Math.random() * 100);
				bnum = Math.floor(Math.random() * 100);
				cnum = Math.floor(Math.random() * 100);
				dnum = Math.floor(Math.random() * 100);
				// when comparing it will be ranarray[0] >= ranarray[1] etc 
				// using for loop 
				// look into Math.max
				/*
					var arr = [1,2,3];
					var max = arr.reduce(function(a, b) {
   				return Math.max(a, b);
					}, -Infinity);
				*/
				if ((anum >= bnum) && (anum >= cnum) && (anum >= dnum)) {
					// [H, S, L] values
					palette[i][0] = [a];
				}
				else if ((bnum >= cnum) && (bnum >= dnum)) {
					palette[i][0] = [b];
				}
				else if (cnum >= dnum) {
					palette[i][0] = [c];
				}
				else {
					palette[i][0] = [d];
				}

				// use includes() to check if all colors are in array at least once
				// if not use if statement to reassign a value 
				// then check by going through all the colors again
				// using for / while loop? 
				// look into using continue[] to restart loop if any of the if statements are entered
			}

		}

	// Saturation

	/* Same concept as 'Hue' above
	   Not all saturation values need to be used
	*/
	
	// Test
	function loadSaturation() {

		for (let i = 0; i < 7; i++) {
				// [H, S, L] values
				palette[i][1] = [sat_standard[i]];
			}
		// Test
		console.log(palette);
	}

	// Test
	function loadSatRand() {
			
			for (let i = 0; i < 7; i++) {
				let a = 0;
				let b = 0;
				let c = 0;
				let d = 0;

				a = Math.floor(Math.random() * 101);
				b = Math.floor(Math.random() * 101);
				c = Math.floor(Math.random() * 101);
				d = Math.floor(Math.random() * 101);

				let anum;
				let bnum;
				let cnum;
				let dnum;

				anum = Math.floor(Math.random() * 100);
				bnum = Math.floor(Math.random() * 100);
				cnum = Math.floor(Math.random() * 100);
				dnum = Math.floor(Math.random() * 100);
				if ((anum >= bnum) && (anum >= cnum) && (anum >= dnum)) {
					// [H, S, L] values
					palette[i][1] = [a];
				}
				else if ((bnum >= cnum) && (bnum >= dnum)) {
					palette[i][1] = [b];
				}
				else if (cnum >= dnum) {
					palette[i][1] = [c];
				}
				else {
					palette[i][1] = [d];
				}
			}

		}
	// Lightness

	// Test
	function loadLight() {

		for (let i = 0; i < 7; i++) {
				// [H, S, L] values
				palette[i][2] = [light_standard[i]];
			}
		// Test
		console.log(palette);
	}

	// Test
	function loadLightRand() {
			let a = Math.floor(Math.random() * 101);
			let b = Math.floor(Math.random() * 101);
			let c = Math.floor(Math.random() * 101);
			let d = Math.floor(Math.random() * 101);

			let anum;
			let bnum;
			let cnum;
			let dnum;

			for (let i = 0; i < 7; i++) {
				anum = Math.floor(Math.random() * 100);
				bnum = Math.floor(Math.random() * 100);
				cnum = Math.floor(Math.random() * 100);
				dnum = Math.floor(Math.random() * 100);
				if ((anum >= bnum) && (anum >= cnum) && (anum >= dnum)) {
					// [H, S, L] values
					palette[i][2] = [a];
				}
				else if ((bnum >= cnum) && (bnum >= dnum)) {
					palette[i][2] = [b];
				}
				else if (cnum >= dnum) {
					palette[i][2] = [c];
				}
				else {
					palette[i][2] = [d];
				}
			}

		}

	/* Depending on user choice:
	   1. Randomly assign lightness values using same logic as 'Hue' above
	   Not all lightness values need to be used
	   2. Apply preset lightness values to the global palette array
	*/

 	// Test
 	function Load() {
 		loadColor();
 		//loadSaturation();
 		loadSatRand();
 		loadLightRand();
 		//loadLight();
 	}

// Microadjustment functions
// Adjust array values so they fall within a certain range
// Allow for small user adjustments

	// Warmth

	// Saturation 

	// Lightness


// Main function (populates array based on initial color and options chosen)


// Color Display (maybe do this in the html and css files)

// TESTING
window.onload = function() {
  initializePalette();
};

var colorWell;
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}
function updateFirst(event) {
  var p = document.querySelector("p");

  if (p) {
    p.style.color = event.target.value;
  }
}
function updateAll(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}
// use above updateall to change input color that gets fed into functions

function changeStyle(){

		Load();

		convertArrayToHSL();

        var element = document.getElementById("myDiv1");
        element.style.backgroundColor = HSLpalette[0];

        var element = document.getElementById("myDiv2");
        element.style.backgroundColor = HSLpalette[1];

        var element = document.getElementById("myDiv3");
        element.style.backgroundColor = HSLpalette[2];

        var element = document.getElementById("myDiv4");
        element.style.backgroundColor = HSLpalette[3];

        var element = document.getElementById("myDiv5");
        element.style.backgroundColor = HSLpalette[4];

        var element = document.getElementById("myDiv6");
        element.style.backgroundColor = HSLpalette[5];

        var element = document.getElementById("myDiv7");
        element.style.backgroundColor = HSLpalette[6];


    }

    //when "generate" button pressed -> take user input color
    // read option values
    // call respective population functions
    // populate array
    // display colors on html site
