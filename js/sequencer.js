/*	oscillator.js		*/
// control buttons
var startButton 	= document.getElementById('playBtn');
var stopButton 		= document.getElementById('stopBtn');

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

		console.log('set up osc parameters' + '\n'
					 + oscOneFreq + ' :: freq' + '\n'
					 + oscOneType + ' :: type' + '\n'
					 + oscOneDetune + ' :: detune' + '\n'
					 + oscOne.state + ' :: state' );
	}
}

startButton.onclick = function() {

	// turn on o1_on flag and start the oscillator with function
	startOscillator();	
	console.log('started Oscillator');
	console.log('o1_started = ' + o1_started);


	if (o1_on == false) {
		oscOne.stop();
		o1_started = false;
		console.log('cannot start Oscillator');
		console.log('o1_on toggle =' + o1_on + " and it must return true");
	}
}

stopButton.onclick = function() {

	oscOne.stop();
	o1_started 	= false;
	o1_on 		= false;
	console.log('stopped Oscillator playback');
	console.log('o1_started = ' + o1_started);
}