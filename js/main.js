/* 	main.js		*/

/* global variables / getting and setting
 *
 */
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
	o1_Wv_sel	= document.getElementById('o1_Wv_sel');

// control variables
var oscOneFreq		= parseFloat(o1_Freq.value),
	oscOneOct		= o1_Oct.value,
	oscOneType		= o1_Wv_sel.value,
	oscOneDetune	= o1_Dtn.value;	

// set default: oscOne = on | type = sine
o1_IO.checked 	= true;
o1_Wv_sel.value = "sine";

// flags
var o1_on		= true,
	o1_started 	= false,
	o1_loop		= false;

// note frequencies to test against
// JSON tuning data
var stdTuning 			= JSON.parse(JSON.stringify(standardTuning));
var pythaTuning			= JSON.parse(JSON.stringify(pythagoreanTuning));

var stdTuningNotes 		= [],
	stdTuningFreq 		= [],
	pythaTuningNotes	= [],
	pythaTuningFreq		= [];

var matchedNote,
	midOctave,
	lowOctave,
	highOctave,
	midFreq,
	lowFreq,
	highFreq,
	activeFreqValue,
	activeNoteValue; 

oscOneFreq = activeFreqValue;

// populate array with the JSON frequency values to test against
function loadTuningData() {

//var matchFloat = oscOneFreq;	
var	i, j;

	for (i = 0, j = 0; i <= stdTuning.length - 1, j <= pythaTuning.length -1; i++, j++) {

		// add note and Frequency values from our JSON objects
		// 440 Hz tuning
		stdTuningNotes.push(stdTuning[i].Note);
		stdTuningFreq.push(stdTuning[i].Frequency);

		// 432 Hz tuning
		pythaTuningNotes.push(pythagoreanTuning[j].Note);
		pythaTuningFreq.push(pythagoreanTuning[j].Frequency);

		midOctave 	= stdTuningNotes.slice(48, 60);
		lowOctave 	= stdTuningNotes.slice(36, 48);
		highOctave 	= stdTuningNotes.slice(62, 74);

		midFreq 	= stdTuningFreq.slice(48, 60);
		lowFreq 	= stdTuningFreq.slice(36, 48);
		highFreq 	= stdTuningFreq.slice(62, 74);

	}	
	
	// log output
	console.log("standardTuning notes: " + stdTuningNotes[48] +" succesfully loaded" + "\n" + 
		"standardTuning freq: " + stdTuningFreq[48] +" succesfully loaded" + "\n" +
		"pythagoreanTuning notes: " + pythaTuningNotes[48] +" succesfully loaded" + "\n" +
		"pythagoreanTuning freq: " + pythaTuningFreq[48] + " succesfully loaded" + "\n");
}

function setOctave() {

	var i;
	// check osc value and narrow the notelist, then write the result to display
	if (oscOneOct == "0") {
		o1_Freq.min 	= midFreq[0];
		o1_Freq.max 	= midFreq[11];
		activeFreqValue = midFreq;
		activeNoteValue = midOctave;

		for (i = 0; i <= midFreq[i]; i++) {

			o1_Freq.list.options[i].innerHTML = midFreq[i];
		}

	} else if (oscOneOct == "1") {
		o1_Freq.min 	= highFreq[0];
		o1_Freq.max 	= highFreq[11];
		activeFreqValue = highFreq;
		activeNoteValue = highOctave;

		for (i = 0; i <= highFreq[i]; i++) {

			o1_Freq.list.options[i].innerHTML = highFreq[i];
		}

	} else if (oscOneOct == "-1") {
		o1_Freq.min 	= lowFreq[0];
		o1_Freq.max 	= lowFreq[11];
		activeFreqValue = lowFreq;
		activeNoteValue = lowOctave;
		
		for (i = 0; i <= lowFreq[i]; i++) {

			o1_Freq.list.options[i].innerHTML = lowFreq[i];
		}
	}
}

/*		 input data handlers 			*/

// osc I toggle boolean, default = 1 / true (on/off)
o1_IO.onchange = function() {
	
	o1_on = true;
	document.getElementById('o1_IO_display').innerHTML = "on";
	console.log('oscillator 1 on = ' + o1_on);
	
	if (o1_IO.checked == false) {
		o1_on = false;
		document.getElementById('o1_IO_display').innerHTML = "off";
		console.log('oscillator 1 on = ' + o1_on);
	}
}
// osc I frequency range slider, write to lcd display and set variable value
//o1_Freq.oninput = function() {
o1_Freq.addEventListener('input', function () {
	var i;

	// Tone.Oscillator takes a float as input, data is in string format
	oscOneFreq 	= parseFloat(o1_Freq.value);
	document.getElementById('oscOneFreq').innerHTML = oscOneFreq;
	
	for (i = 0; i <= activeFreqValue.length; i++) {

		if (oscOneFreq == activeFreqValue[i]) {
			document.getElementById('oscOneFreq').innerHTML = activeNoteValue[i];
			console.log('found match: ' + activeNoteValue[i] );
			break;
		}
	}

	console.log('frequency value = ' + oscOneFreq);
}, false);

// osc I octave selector,  write to lcd display and set variable value
o1_Oct.onchange = function() {

	oscOneOct = o1_Oct.value;
	setOctave();
	
	document.getElementById('oscOneOctave').innerHTML = oscOneOct;
}

// osc I detune range slider, write to lcd display and set variable value
o1_Dtn.addEventListener('input', function () {

	oscOneDetune = parseInt(o1_Dtn.value);
	document.getElementById('oscOneDetune').innerHTML = oscOneDetune;
}, false);

// osc I wave select, write to lcd display and set variable value
o1_Wv_sel.onchange = function() {

	var display = document.getElementById('o1_Wv_Type');

	oscOneType = o1_Wv_sel.value;


	if (oscOneType == "sine") {
		display.innerHTML = "sin";
	}
	else if (oscOneType == "triangle") {
		display.innerHTML = "tri";
	}
	else if (oscOneType == "square") {
		display.innerHTML = "sqr";
	}
	else if (oscOneType == "sawtooth") {
		display.innerHTML = "saw";
	}
}
o1_Wv_sel.onchange();
