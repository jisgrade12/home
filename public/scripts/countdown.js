/* First */
var countDownDate1 = new Date("Nov 20, 2022").getTime();
var x = setInterval(function () {
	var now = new Date().getTime();
	var distance = countDownDate1 - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("counter1").innerHTML =
		days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("counter1").innerHTML = "Exam Ends";
	}
}, 1000);
/* Second */
var countDownDate2 = new Date("Nov 27, 2022").getTime();
var x = setInterval(function () {
	var now = new Date().getTime();
	var distance = countDownDate2 - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("counter2").innerHTML =
		days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("counter2").innerHTML = "Chill";
	}
}, 1000);
/* Third */
var countDownDate3 = new Date("Dec 4, 2022").getTime();
var x = setInterval(function () {
	var now = new Date().getTime();
	var distance = countDownDate3 - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("counter3").innerHTML =
		days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("counter3").innerHTML = "Passed";
	}
}, 1000);
/* Fourth */
var countDownDate4 = new Date("Feb 22, 2023").getTime();
var x = setInterval(function () {
	var now = new Date().getTime();
	var distance = countDownDate4 - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("counter4").innerHTML =
		days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("counter4").innerHTML = "Passed";
	}
}, 1000);
/* Fifth */
var countDownDate5 = new Date("Feb 26, 2023").getTime();
var x = setInterval(function () {
	var now = new Date().getTime();
	var distance = countDownDate5 - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("counter5").innerHTML =
		days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("counter5").innerHTML = "Exam Ends";
	}
}, 1000);
/* Sixth */
var countDownDate6 = new Date("Mar 5, 2023").getTime();
var x = setInterval(function () {
	var now = new Date().getTime();
	var distance = countDownDate6 - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("counter6").innerHTML =
		days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("counter6").innerHTML = "Chill";
	}
}, 1000);
/* Seventh */
var countDownDate7 = new Date("Mar 12, 2023").getTime();
var x = setInterval(function () {
	var now = new Date().getTime();
	var distance = countDownDate7 - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("counter7").innerHTML =
		days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("counter7").innerHTML = "Passed";
	}
}, 1000);
/* Eigth */
var countDownDate8 = new Date("Apr 16, 2023").getTime();
var x = setInterval(function () {
	var now = new Date().getTime();
	var distance = countDownDate8 - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("counter8").innerHTML =
		days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("counter8").innerHTML = "Passed";
	}
}, 1000);
/* Ninth */
var countDownDate9 = new Date("Apr 26, 2023").getTime();
var x = setInterval(function () {
	var now = new Date().getTime();
	var distance = countDownDate9 - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("counter9").innerHTML =
		days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("counter9").innerHTML = "Passed";
	}
}, 1000);
/* Tenth */
var countDownDate10 = new Date("Jun 15, 2023").getTime();
var x = setInterval(function () {
	var now = new Date().getTime();
	var distance = countDownDate10 - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("counter10").innerHTML =
		days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("counter10").innerHTML = "Graduated!";
	}
}, 1000);
/* Eleventh */
var countDownDate11 = new Date("Jun 18, 2023").getTime();
var x = setInterval(function () {
	var now = new Date().getTime();
	var distance = countDownDate11 - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("counter11").innerHTML =
		days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("counter11").innerHTML = "Exam Ends";
	}
}, 1000);
/* Twelfth */
var countDownDate12 = new Date("Jun 22, 2023").getTime();
var x = setInterval(function () {
	var now = new Date().getTime();
	var distance = countDownDate12 - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("counter12").innerHTML =
		days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("counter12").innerHTML = "Finally!";
	}
}, 1000);
