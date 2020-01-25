/*              http://gregjopa.com/2011/05/calculate-note-frequencies-in-javascript-with-music-js/

                MUSIC.js is a music creation library containing functions and data sets to generate notes, intervals, chords, and scales.
*/
const A4 = 440;
let scale = [];
let notes = [];
/*
const A = [];
for(let i = -4; i < 4; i++){
  let a = A4 * Math.pow(2, i);
  A.push(a);
}//console.log(A);*/

class Octave{
  constructor(a){
  this.b      = a *  Math.pow(2, 2/12);   
  this.aSharp = a *  Math.pow(2, 1/12);
  this.a = a;
  this.gSharp = a *  Math.pow(2, -1/12); 
  this.g      = a *  Math.pow(2, -2/12); 
  this.fSharp = a *  Math.pow(2, -3/12); 
  this.f      = a *  Math.pow(2, -4/12); 
  this.e      = a *  Math.pow(2, -5/12); 
  this.dSharp = a *  Math.pow(2, -6/12); 
  this.d      = a *  Math.pow(2, -7/12); 
  this.cSharp = a *  Math.pow(2, -8/12);  
  this.c      = a *  Math.pow(2, -9/12); 
  }
  // a method to output the notes of the octave.
  output(){
    for( var note in this){
       console.log [note, this[note]]; 
    }
  }
}

//let octave = new Octave(A4);
//octave.output();


for(let i = -4; i < 4; i++){
  let a = A4 * Math.pow(2, i);
  let octave = new Octave(a);
  scale.push(octave);
}
console.log("scale: ",scale);

scale.map((o) => {
  for( var note in o){
       notes.push(o[note]); 
    }
});
notes.sort((a,b) => a-b);
console.log("notes: ",notes);

