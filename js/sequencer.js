/*	oscillator.js		*/
// control buttons
var startButton 	= document.getElementById('playBtn');
var stopButton 		= document.getElementById('stopBtn');

startButton.onclick = function() {


	oscOne.frequency 	= oscOneFreq;
	oscOne.type 		= oscOneType;
	oscOne.detune 		= oscOneDetune;

	oscOne.start();
	o1_started = true;
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