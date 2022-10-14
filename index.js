
storagecheck();
function fmtMSS(s) {
	return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s +'s';
} // https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
function storagecheck() {
	if (localStorage.getItem("stats1") === null || localStorage.getItem('stats2') === null || localStorage.getItem('stats3') === null || localStorage.getItem('stats4') === null) {
		console.log("No stats found, creating new stats");
		localStorage.setItem("stats1", 0);
		localStorage.setItem("stats2", exemplearray);
		localStorage.setItem("stats3", 0);
		localStorage.setItem("stats4", 0);
	}
}
if (location.pathname == '/') {
	time = fmtMSS(localStorage.getItem("stats4"));
  let notes = localStorage.getItem('stats2');
	
	console.log("Stats found, loading stats");
	document.getElementById("stat1value").innerHTML = localStorage.getItem("stats1");
	document.getElementById("stat2value").innerHTML = '--/20';
	document.getElementById("stat3value").innerHTML = localStorage.getItem("stats3") + '/20';
	document.getElementById("stat4value").innerHTML = time;
}

function start() {
	startchrono();
	document.getElementById("preview").style.display = "none";
	document.getElementById("exercise").style.display = "flex";
	random();
  listener();
}

let hgx1 = ['https://upload.maxence.live/hcbjou.png', 'berlin', "https://upload.maxence.live/4amyla.png", `new york`, "https://upload.maxence.live/jewm0q.png", `londres`, "https://upload.maxence.live/6j0pf8.png", `paris`];

z = '';

function onclickhandler(e) {
	z = (e.value)
}

const initiallength = hgx1.length / 2;
let answer = '';
note = 0;

function random() {
	if (hgx1.length > 0) {
		let input = document.getElementById('answer');
		input.value = '';
		var range = hgx1.length;
		var random = Math.floor(Math.random() * range / 2) * 2;
		document.getElementById("img").src = hgx1[random];
		answer = hgx1[random + 1]
		hgx1.splice(random, 2);
	} else {
		end(note);
	}
}

function listener() {
let element = document.getElementById("next");
element.addEventListener("click", function() {
	if (z.toLowerCase() === answer) {
		console.log("Correct");
		note = note + 1;
		random();
		console.log('Note ' + note);
	} else {
		console.log("Incorrect");
		random();
	}
});
}


function end(param) {
	addtrain();
	addtime();
	if (note > 0) {
		finalnote = (param * 20) / initiallength;
		checknotes(finalnote);
	}
}
// start of site time //
value = 0;
finalvalue = 0;

function startchrono() {
	setInterval(function() {
		value = value + 1;
		return finalvalue = value;
	}, 1000);
}

let current = parseFloat(localStorage.getItem('stats4'));

function addtime() {
	console.log('Temps:' + finalvalue);
	x = current + finalvalue;
	localStorage.setItem('stats4', x);
}
// end of site time //

// start of entrainements //
function addtrain() {
	let current = parseFloat(localStorage.getItem('stats1'));
	x = current + 1;
	localStorage.setItem('stats1', x);
}
// end of entrainements //

// start of checknotes //
function checknotes(param) {
	let current = parseFloat(localStorage.getItem('stats3'));
	if (param > current) {
		localStorage.setItem('stats3', param);
	}
}
// end of checknotes //