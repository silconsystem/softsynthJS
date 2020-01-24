/* 	main.js		*/

/* global variables
 *
 */
// control variables
var oscOneFreq,
	oscOneOct,
	oscOneType,
	oscOneDetune;

// create oscillator one
var oscOne = new Tone.Oscillator().toMaster();

// sequencer/synth start/stop/loop & reset buttons
var startButton 	= document.getElementById('playBtn'),
	stopButton 		= document.getElementById('stopBtn'),
	loopButton 		= document.getElementById('loopBtn'),
	resetButton 	= document.getElementById('resetBtn');

// input values for oscillator
var o1_IO 		= document.getElementById('o1_IO'),
	o1_Freq		= document.getElementById('o1_F_range'),
	o1_Oct		= document.getElementById('o1_Oct'),
	o1_Dtn		= document.getElementById('o1_Dtn'),
	o1_WvType	= document.getElementById('o1_Wv_Type');

// set default: oscOne = on
o1_IO.checked = true;

// flags
var o1_on		= true,
	o1_started 	= false,
	o1_loop		= false,
	o1_Wv_sel	= false;

function oscOneArgs() {
	oscOne.frequency 	= o1_Freq.value;
	oscOne.type 		= o1_Wv_sel;
	oscOne.detune 		= o1_Dtn;
}

// osc I toggle boolean, default = 1 / true (on/off)
o1_IO.onchange = function() {
	
	if (o1_IO.checked == true) {
		o1_on = true;
		document.getElementById('o1_IO_display').innerHTML = "on";
		console.log('oscillator 1 on = ' + o1_on);
	}
	else if (o1_IO.checked == false) {
		o1_on = false;
		document.getElementById('o1_IO_display').innerHTML = "off";
		console.log('oscillator 1 on = ' + o1_on);
	}
}
// osc I frequency range slider, write to lcd display and set variable value
o1_Freq.onchange = function() {

	oscOneFreq = o1_Freq.value;
	document.getElementById('oscOneFreq').innerHTML = oscOneFreq;

	console.log('frequency value = ' + o1_Freq.value);
}
o1_Freq.onchange();

// osc I octave selector,  write to lcd display and set variable value
o1_Oct.onchange = function() {

	oscOneOct = o1_Oct.value;
	document.getElementById('oscOneOctave').innerHTML = oscOneOct;
}

// osc I detune range slider, write to lcd display and set variable value
o1_Dtn.onchange = function() {

	oscOneDetune = o1_Dtn.value;
	document.getElementById('oscOneDetune').innerHTML = oscOneDetune;
}
o1_Dtn.onchange();

// osc I wave select, write to lcd display and set variable value
o1_Wv_sel.onchange = function() {

	oscOneType = o1_Wv_sel.value;

}

