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
https://sebhastian.com/javascript-change-text-on-page/
https://stackoverflow.com/questions/8739605/getelementbyid-returns-null
https://web.archive.org/web/20130525061042/www.insanit.net/tag/rgb-to-ryb/
https://stackoverflow.com/questions/8507885/shift-hue-of-an-rgb-color
https://bahamas10.github.io/ryb/about.html
https://stackoverflow.com/questions/37055755/computing-complementary-triadic-tetradic-and-analagous-colors
https://stackoverflow.com/questions/14095849/calculating-the-analogous-color-with-python/14116553#14116553
https://stackoverflow.com/questions/56652365/algorithm-to-generate-ryb-color-wheel
https://stackoverflow.com/questions/25706700/hsl-colors-to-pigmentation

General Reference: 

https://www.w3schools.com/colors/colors_hsl.asp
https://www.w3schools.com/colors/colors_picker.asp

*/

// TODO delete everything with "test" label 
// add random math option when loading in values (hue and sat and light) to spice things up a little (just a little)
//			want them to be slightly off mathematically calculated exact value (at most 5? 10? 15?  off from either side)
// add in check to see all colors are distinct from each other (if all three values too close when comparing the two then redo one of them)
// update sat and light load logic to match loadcolor

// TODO
// Microadjustment functions
// Adjust array values so they fall within a certain range
// Allow for small user adjustments
// TODO implement greyscale
	// Warmth

	// Saturation 

	// Lightness


// Constants / Presets / Variables
	
	// Hue constants

		// define basic primarys, secondarys, some neutrals, greyscale

	// Saturation constants
	// might need to be updated into an array instead
	const sat1 = 14;
	const sat2 = 28;
	const sat3 = 42;
	const sat4 = 57;
	const sat5 = 71;
	const sat6 = 85;
	const sat7 = 94; // was 99

	// Lightness constants

	const light1 = 18; // was 14
	const light2 = 28;
	const light3 = 42;
	const light4 = 57;
	const light5 = 71;
	const light6 = 85;
	const light7 = 94; // was 99

	// Saturation presets

	// TODO
	// Let user choose presets? implement later

	const sat_standard = [sat1, sat3, sat5, sat6, sat5, sat3, sat1];
	
	/* maybe don't need
	const sat_dull =     [sat1, sat1, sat2, sat3, sat2, sat1, sat1];
	const sat_heav =     [sat5, sat6, sat6, sat7, sat6, sat6, sat5];
	const sat_mid =      [sat2, sat3, sat4, sat5, sat4, sat3, sat2];
	const sat_one =      [sat2, sat2, sat2, sat4, sat2, sat2, sat2];
	const sat_two =      [sat4, sat2, sat4, sat2, sat2, sat2, sat2];
	*/

	// Lightness presets

	const light_standard = [light7, light6, light5, light4, light3, light2, light1];

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

// Opacity
let opacity = 0;

// HSL
let input_hsl = [0, 0, 0];

// RGB
let red = 0;
let green = 0;
let blue = 0;

let neededColors = []; // All calculated colors added to this array

// Color conversions from HSL to HSLA, RGB, RGBA, and Hex
// Conversion process for usable color:
// input hex -> hsl -> rgb -> ryb -> rotation conversion -> rgb -> hsl (for display)
// -> hex, (for info cards)


	// HSL to RGB
	const hsl2rgbresult = [0, 0, 0];

	function HSLToRGB(h,s,l) {
  // Must be fractions of 1
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;

      if (0 <= h && h < 60) {
    		r = c; g = x; b = 0;  
  		} else if (60 <= h && h < 120) {
    		r = x; g = c; b = 0;
  		} else if (120 <= h && h < 180) {
    		r = 0; g = c; b = x;
  		} else if (180 <= h && h < 240) {
		    r = 0; g = x; b = c;
  		} else if (240 <= h && h < 300) {
		    r = x; g = 0; b = c;
 			 } else if (300 <= h && h < 360) {
 		   r = c; g = 0; b = x;
 		 }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

hsl2rgbresult[0] = r;
hsl2rgbresult[1] = g;
hsl2rgbresult[2] = b;

  return "rgb(" + r + "," + g + "," + b + ")";
	}

	// HSLA to RGBA



	// HSL to Hex

	// Hex to HSL

	function hexToHSL(H) { // copy pasted, edit later to suit needs
		// usually don't need return string, just save values
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
  input_hsl[0] = h;
  input_hsl[1] = s;
  input_hsl[2] = l;

  return "hsl(" + h + "," + s + "%," + l + "%)";
}

// RGB to HSL
const rgb2hslresult = [0,0,0];

function RGBToHSL(r,g,b) {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

      // Calculate hue
  // No difference
  if (delta == 0)
    h = 0;
  // Red is max
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g)
    h = (b - r) / delta + 2;
  // Blue is max
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);
    
  // Make negative hues positive behind 360°
  if (h < 0)
      h += 360;
    // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

	rgb2hslresult[0] = h;
	rgb2hslresult[1] = s;
	rgb2hslresult[2] = l;

  //compliment = h;
  return "hsl(" + h + "," + s + "%," + l + "%)";
 }

 // Convert RGB to RYB
const rgb2rybresult = [0, 0, 0];

function rgb2ryb(r, g, b){

	// Remove the whiteness from the color.
	let w = parseFloat(Math.min(r, g, b));
	r = parseFloat(r) - w;
	g = parseFloat(g) - w;
	b = parseFloat(b) - w;

	let mg = Math.max(r, g, b);

	// Get the yellow out of the red+green.
	let y = Math.min(r, g);
	r -= y;
	g -= y;

	// If this unfortunate conversion combines blue and green, 
	//then cut each in half to preserve the value's maximum range.
	if (b > 0 && g > 0){
		b /= 2.0;
		g /= 2.0;
	}

	// Redistribute the remaining green.
	y += g;
	b += g;

	// Normalize to values.
	my = Math.max(r, y, b);
	if (my > 0) {
		n = mg / my;
		r *= n;
		y *= n;
		b *= n;
	}
	// Add the white back in.
	r += w;
	y += w;
	b += w;

	rgb2rybresult[0] = r;
	rgb2rybresult[1] = y;
	rgb2rybresult[2] = b;

	// And return back the ryb typed accordingly.
	return (r + " " + y + " " + b);
}

// Convert RYB to RGB
const ryb2rgbresult =[0, 0, 0];

function ryb2rgb(r, y, b){
	//t = type(r)

	// Remove the whiteness from the color.
	let w = parseFloat(Math.min(r, y, b));
	r = parseFloat(r) - w;
	y = parseFloat(y) - w;
	b = parseFloat(b) - w;

	let my = Math.max(r, y, b);

	// Get the green out of the yellow and blue
	g = Math.min(y, b);
	y -= g;
	b -= g;

	if (b > 0 && g > 0){

		b *= 2.0;
		g *= 2.0;
}
	// Redistribute the remaining yellow.
	r += y;
	g += y;

	// Normalize to values.
	let mg = Math.max(r, g, b)
	if (mg > 0) {
		n = my / mg;
		r *= n;
		g *= n;
		b *= n;
}
	// Add the white back in.
	r += w;
	g += w;
	b += w;

	ryb2rgbresult[0] = r;
	ryb2rgbresult[1] = g;
	ryb2rgbresult[2] = b;

  // And return back the ryb typed accordingly.

	return (r + " " + g + " " + b);
}

////
// Color calculation functions
////

// cube rotation
// figure this out and add comments

// get degrees from radians
const deg = Math.PI / 180;
const rotationresult = [0, 0, 0];

function rotateHue(r, x, b, rotationangle) {
  const cosA = Math.cos(rotationangle * deg);
  const sinA = Math.sin(rotationangle * deg);
  const neo = [
    cosA + (1 - cosA) / 3,
    (1 - cosA) / 3 - Math.sqrt(1 / 3) * sinA,
    (1 - cosA) / 3 + Math.sqrt(1 / 3) * sinA,
  ];
  const result = [
    r * neo[0] + x * neo[1] + b * neo[2],
    r * neo[2] + x * neo[0] + b * neo[1],
    r * neo[1] + x * neo[2] + b * neo[0],
  ];

  const rotation = result.map(x => uint8(x));
  // might not need these, might be able to use returned array
  rotationresult[0] = rotation[0];
  rotationresult[1] = rotation[1];
  rotationresult[2] = rotation[2];

  return result.map(x => uint8(x));

  // returns stuff in rotationresult
}

function uint8(value) { // limits value
  return 0 > value ? 0 : (255 < value ? 255 : Math.round(value));
}

// Shortened Conversion Functions
function HSL2ryb(){
	HSLToRGB(input_hsl[0], input_hsl[1], input_hsl[2]);
	rgb2ryb(hsl2rgbresult[0], hsl2rgbresult[1], hsl2rgbresult[2]);
}

function ryb2HSL(){
	ryb2rgb(rotationresult[0], rotationresult[1], rotationresult[2]);
	RGBToHSL(ryb2rgbresult[0], ryb2rgbresult[1], ryb2rgbresult[2]);
}

// Greyscale

// Monochromatic
function mono(array) { // No need for rotation, array parameter included for consistency
	neededColors.push(input_hsl[0]);
}

// Analogus - rotate 30, 330 degrees aka 30 degrees to each side
function anal(array) {
	neededColors.push(input_hsl[0]);
	HSL2ryb();
	rotateHue(rgb2rybresult[0], rgb2rybresult[1], rgb2rybresult[2], 30);
	ryb2HSL();
	neededColors.push(rgb2hslresult[0]);
	rotateHue(rgb2rybresult[0], rgb2rybresult[1], rgb2rybresult[2], 330);
	ryb2HSL();
	neededColors.push(rgb2hslresult[0]);
}

// Complementary - 180 degrees, directly across
function comp(array) {
	neededColors.push(input_hsl[0]);
	HSL2ryb();
	rotateHue(rgb2rybresult[0], rgb2rybresult[1], rgb2rybresult[2], 180);
	ryb2HSL();
	neededColors.push(rgb2hslresult[0]);
}

// Split Complementary - 180 degrees then another +/- 30
function splitcomp(array){
	neededColors.push(input_hsl[0]);
	HSL2ryb();
	rotateHue(rgb2rybresult[0], rgb2rybresult[1], rgb2rybresult[2], 150);
	ryb2HSL();
	neededColors.push(rgb2hslresult[0]);
	rotateHue(rgb2rybresult[0], rgb2rybresult[1], rgb2rybresult[2], 210);
	ryb2HSL();
	neededColors.push(rgb2hslresult[0]);
}

// Triadic - rotate 120 degrees twice
function triad(array) {
	neededColors.push(input_hsl[0]);
	HSL2ryb();
	rotateHue(rgb2rybresult[0], rgb2rybresult[1], rgb2rybresult[2], 120);
	ryb2HSL();
	neededColors.push(rgb2hslresult[0]);
	rotateHue(rgb2rybresult[0], rgb2rybresult[1], rgb2rybresult[2], 240);
	ryb2HSL();
	neededColors.push(rgb2hslresult[0]);
}

// Tetradic Square - rotate 90 degrees thrice
function square(array) {
	neededColors.push(input_hsl[0]);
	HSL2ryb();
	rotateHue(rgb2rybresult[0], rgb2rybresult[1], rgb2rybresult[2], 90);
	ryb2HSL();
	neededColors.push(rgb2hslresult[0]);
	rotateHue(rgb2rybresult[0], rgb2rybresult[1], rgb2rybresult[2], 180);
	ryb2HSL();
	neededColors.push(rgb2hslresult[0]);
	rotateHue(rgb2rybresult[0], rgb2rybresult[1], rgb2rybresult[2], 270);
	ryb2HSL();
	neededColors.push(rgb2hslresult[0]);
}


// Tetradic Rectangle - rotate rotate 60, 180, and 240 degrees 
function rectangle(array) {
	neededColors.push(input_hsl[0]);
	HSL2ryb();
	rotateHue(rgb2rybresult[0], rgb2rybresult[1], rgb2rybresult[2], 60);
	ryb2HSL();
	neededColors.push(rgb2hslresult[0]);
	rotateHue(rgb2rybresult[0], rgb2rybresult[1], rgb2rybresult[2], 180);
	ryb2HSL();
	neededColors.push(rgb2hslresult[0]);
	rotateHue(rgb2rybresult[0], rgb2rybresult[1], rgb2rybresult[2], 240);
	ryb2HSL();
	neededColors.push(rgb2hslresult[0]);
}

////
// Color array populating functions
////

// Hue 
function loadColor() { // Load in random for non-needed indexes
	let a = (neededColors[0] == undefined) ? Math.floor(Math.random() * 361) : neededColors[0];
	let b = (neededColors[1] == undefined) ? Math.floor(Math.random() * 361) : neededColors[1];
	let c = (neededColors[2] == undefined) ? Math.floor(Math.random() * 361) : neededColors[2];
	let d = (neededColors[3] == undefined) ? Math.floor(Math.random() * 361) : neededColors[3];

	let acheck = (neededColors[0] == undefined) ? null : 0;
	let bcheck = (neededColors[1] == undefined) ? null : 0;
	let ccheck = (neededColors[2] == undefined) ? null : 0;
	let dcheck = (neededColors[3] == undefined) ? null : 0;

	for (let i = 0; i < 7; i++) {
		let anum;
		let bnum;
		let cnum;
		let dnum;

		anum = (neededColors[0] == undefined) ? 0 : Math.floor(Math.random() * 100);
		bnum = (neededColors[1] == undefined) ? 0 : Math.floor(Math.random() * 100);
		cnum = (neededColors[2] == undefined) ? 0 : Math.floor(Math.random() * 100);
		dnum = (neededColors[3] == undefined) ? 0 : Math.floor(Math.random() * 100);

		// Random loading
		if ((anum >= bnum) && (anum >= cnum) && (anum >= dnum)) {
			palette[i][0] = [a];
			acheck += 1;
		}
		else if ((bnum >= cnum) && (bnum >= dnum)) {
			palette[i][0] = [b];
			bcheck += 1;
		}
		else if (cnum >= dnum) {
			palette[i][0] = [c];
			ccheck += 1;
		}
		else {
			palette[i][0] = [d];
			dcheck += 1;
		}
	}

	// Check each needed color appears in array at least once
	// If not, replace, rinse and repeat
	let x = 0;

	while (x == 0) {
		if (acheck <= 0 && acheck != null){
			temp = palette[0][0];
			if (temp == b){
				bcheck -= 1;
			}
			else if (temp == c){
				ccheck -= 1;
			}
			else {
				dcheck -= 1;
			}
			palette[0][0] = a;
			acheck += 1;
			continue;
		}

		if (bcheck <= 0 && bcheck != null){
			temp = palette[1][0];
			if (temp == a){
				acheck -= 1;
			}
			else if (temp == c){
				ccheck -= 1;
			}
			else {
				dcheck -= 1;
			}
			palette[1][0] = b;
			bcheck += 1;
			continue;
		}

		if (ccheck <= 0 && ccheck != null){
			temp = palette[2][0];
			if (temp == a){
				acheck -= 1;
			}
			else if (temp == b){
				bcheck -= 1;
			}
			else {
				dcheck -= 1;
			}
			palette[2][0] = c;
			ccheck += 1;
			continue;
		}

		if (dcheck <= 0 && dcheck != null){
			temp = palette[3][0];
			if (temp == a){
				acheck -= 1;
			}
			else if (temp == b){
				bcheck -= 1;
			}
			else {
				ccheck -= 1;
			}
			palette[3][0] = d;
			dcheck += 1;
			continue;
		}
		break;
	}
}

// Preset Saturation
function loadSaturation() {
	for (let i = 0; i < 7; i++) {
			palette[i][1] = [sat_standard[i]];
		}
}

// Random Saturation
function loadSatRand() {
	for (let i = 0; i < 7; i++) {
		let a = Math.floor(Math.random() * 90);
		let b = Math.floor(Math.random() * 70);
		let c = Math.floor(Math.random() * 50);
		let d = Math.floor(Math.random() * 101);

		let anum;
		let bnum;
		let cnum;
		let dnum;

		// TODO maybe dont need floor, just compare math.randoms
		anum = Math.floor(Math.random() * 100);
		bnum = Math.floor(Math.random() * 100);
		cnum = Math.floor(Math.random() * 100);
		dnum = Math.floor(Math.random() * 100);

		if ((anum >= bnum) && (anum >= cnum) && (anum >= dnum)) {
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

// Preset Lightness
function loadLight() {
	for (let i = 0; i < 7; i++) {
			palette[i][2] = [light_standard[i]];
	}
}

// Random Lightness
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

////
// HTML interactions
////

// Main function (populates array based on initial color and options chosen)
function Load() {
 	input_hsl = []; // Clear both global arrays before every palette update
 	neededColors = [];
 	hexToHSL(input_hex); // Need to use HSL values to start the conversion process

 	if (colorscheme != 0){ // If no color scheme selected, skip and load in random
 		colorscheme(input_hsl);
 	}

 	loadColor(); 
 	loadSatRand(); // Can swap between preset and random functions
 	loadLight(); // Can saw between preset and random functions
}

// Initialization
window.onload = function() {
  initializePalette();
  radiobtn = document.getElementById("none"); // "none" radio selected by default
  radiobtn.checked = true;
};

// Color Input
var colorWell;
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}

function updateAll(event) {
	input_hex = event.target.value;
}

// Color scheme selection based off radio input
var colorscheme = 0;

function analyzeColor(myColor) {
	switch (myColor) {
		case "Monochrome":
			colorscheme = mono;
			break
		case "Analogus":
			colorscheme = anal;
			break
		case "Complementary":
			colorscheme = comp;
			break
		case "Split Complementary":
			colorscheme = splitcomp;
			break
		case "Triadic":
			colorscheme = triad;
			break
		case "Square":
			colorscheme = square;
			break
		case "Rectangle":
			colorscheme = rectangle;
			break
		default:
			colorscheme = 0;
	}
}

// Palette Updater
// Called when "load palette" button clicked in html file
function changeStyle(){
  Load();

	convertArrayToHSL(); 

	// Update Colors
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

	const inputColor = document.getElementById("input_color"); 
	const color1 = document.getElementById("color1");
	const color2 = document.getElementById("color2");
	const color3 = document.getElementById("color3");
	const color4 = document.getElementById("color4");
	const color5 = document.getElementById("color5");
	const color6 = document.getElementById("color6");
	const color7 = document.getElementById("color7");

	// Update input color information
  inputColor.textContent = "Input color: " + "HEX = " + input_hex + ", HSL = (" + input_hsl[0] + ", " + input_hsl[1] + ", " + input_hsl[2] + ")";

  // Update color card info
  color1.textContent = "HSL = (" + palette[0][0] + ", " + palette[0][1] + ", " + palette[0][2] + ")";
  color2.textContent = "HSL = (" + palette[1][0] + ", " + palette[1][1] + ", " + palette[1][2] + ")";
  color3.textContent = "HSL = (" + palette[2][0] + ", " + palette[2][1] + ", " + palette[2][2] + ")";
  color4.textContent = "HSL = (" + palette[3][0] + ", " + palette[3][1] + ", " + palette[3][2] + ")";
  color5.textContent = "HSL = (" + palette[4][0] + ", " + palette[4][1] + ", " + palette[4][2] + ")";
  color6.textContent = "HSL = (" + palette[5][0] + ", " + palette[5][1] + ", " + palette[5][2] + ")";
  color7.textContent = "HSL = (" + palette[6][0] + ", " + palette[6][1] + ", " + palette[6][2] + ")";
}