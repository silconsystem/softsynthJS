/*				seq-controls.js
*/
/* 		globals	*/
var noteselected,
	selectorID,
	selectorVal,
	noteSelectors;

/*		controls */
var noteSelectors = document.querySelectorAll('.note-slider');

var	noteSelectorArray = [].slice.call(noteSelectors);

var noteSelectorDisplay = document.querySelectorAll('.note-selector-display');

var	noteSelectorDisplayArray = [].slice.call(noteSelectorDisplay);

/*		default values */

/* 		functions */
function setUpDefaults() {
	var i;

	for (i = 0; noteSelectors.length; i++) {
		//selectorVal.push(noteSelectorArray[i].value);
		// set all values to zero
		noteSelectors[i].value 	= "0";
		noteSelectors[i].id 	= "select-" + [i];


		//

	}
}

/* 		controls engine */
// get range values handler 

