/*	oscillator.js		*/
// control buttons
var startButton 	= document.getElementById('playBtn');
var stopButton 		= document.getElementById('stopBtn');

window.onload = function() { 
	// load our notes to work with
	// TODO: add pythaTuning
	loadTuningData();
	// get-set our Octave defaults
	setOctave();
	// set all range slider selectors to zero
	// init Array of elements
	// TODO: create good onload script later
	setUpDefaults();
}

function startOscillator() {
	
	// test is we are on then set up the parameters and go
	if (o1_on == true) {
		oscOne.frequency.value 	= oscOneFreq;
		oscOne.type		 		= oscOneType;
		oscOne.detune.value 	= oscOneDetune;
	
		oscOne.start();

		if (oscOne.state == 'started') {
			// set o1 started flag
			o1_started = true;
			console.log('set o1_started flag, state is started');
		}

	} else if (o1_on == false) {
		throw "Oscillator is not on !";
	}
	console.log('set up osc parameters' + '\n'
					 + oscOneFreq + ' :: freq' + '\n'
					 + oscOneType + ' :: type' + '\n'
					 + oscOneDetune + ' :: detune' + '\n'
					 + oscOne.state + ' :: state' );	
}

startButton.onclick = function() {

	// turn on o1_on flag and start the oscillator with function
	startOscillator();	
	console.log('started Oscillator');
	console.log('o1_started = ' + o1_started);
}

stopButton.onclick = function() {

	oscOne.stop();
	o1_started 	= false;
	console.log('stopped Oscillator playback');
	console.log('o1_started = ' + o1_started);
}