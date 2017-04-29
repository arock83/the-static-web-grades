console.log("grades.js loaded");

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var highGrade = 0;
var lowGrade = 100;
var As =0;
var Bs = 0;
var Cs = 0;
var Ds = 0;
var Fs = 0;

for(n=0; n<scores.length; n+=1) {
	if (scores[n] > highGrade) {
		highGrade = scores[n];
	}
	if (scores[n] < lowGrade) {
		lowGrade = scores[n];
	}
	if (scores[n] >= 91) {
		As += 1;
	} else if (scores[n] >= 81) {
		Bs += 1;
	} else if (scores[n] >= 71) {
		Cs += 1;
	} else if (scores[n] >= 61) {
		Ds += 1;
	} else {
		Fs +=1
	}
}
console.log("Grades: ", scores);
console.log("Low Grade: ", lowGrade);
console.log("High Grade: ", highGrade);
console.log("A's: ", As);
console.log("B's: ", Bs);
console.log("C's: ", Cs);
console.log("D's: ", Ds);
console.log("F's: ", Fs);