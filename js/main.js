/* 	main.js		*/

/* global variables
 *
 */
// control variables
var oscOneFreq,
	oscOneType,
	oscOneDetune;

// create oscillator one
const oscOne = new Tone.Oscillator(oscOneFreq, oscOneType).toMaster();

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

o1_IO.checked 	= true;

// flags
var o1_on		= true,
	o1_started 	= false,
	o1_loop		= false,
	o1_Wv_sel	= false;

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

o1_Freq.onchange = function() {
	oscOneFreq = o1_Freq.value;
	document.getElementById('oscOneFreq').innerHTML = oscOneFreq;
}