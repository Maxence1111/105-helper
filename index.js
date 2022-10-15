
storagecheck();
function fmtMSS(s) {
	return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s +'s';
} // https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
function storagecheck() {
	if (localStorage.getItem("stats1") === null || localStorage.getItem('stats2') === null || localStorage.getItem('stats3') === null || localStorage.getItem('stats4') === null) {
		console.log("No stats found, creating new stats");
		localStorage.setItem("stats1", 0);
		localStorage.setItem("stats2", 0);
		localStorage.setItem("stats3", 0);
		localStorage.setItem("stats4", 0);
		localStorage.setItem("stats5", 0);
	}
}
if (location.pathname == '/') {
	time = fmtMSS(localStorage.getItem("stats4"));
	console.log("Stats found, loading stats"); 
	if (localStorage.getItem('stats5') > 0) {
		let average = (localStorage.getItem('stats5') / localStorage.getItem('stats1')).toFixed(2);
		document.getElementById("stat2value").innerHTML = average + '/20';
	}
	document.getElementById("stat1value").innerHTML = localStorage.getItem("stats1");
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

let hgx1 = ["https://upload.maxence.live/ujgu1k.png", "buenos aires", "https://upload.maxence.live/axw254.png", "sao paulo ou saint paul", "https://upload.maxence.live/1ghgr4.png", "rio de janeiro", "https://upload.maxence.live/1izspp.png", "los angeles", "https://upload.maxence.live/cbfv22.png", "mexico city", "https://upload.maxence.live/go2i3v.png", "chicago", "https://upload.maxence.live/mznk5a.png", "new york", "https://upload.maxence.live/j33ja0.png", "lagos", "https://upload.maxence.live/y4plwl.png", "le caire ou cairo", "https://upload.maxence.live/p5e3ak.png", "bangkok", "https://upload.maxence.live/mi0m8p.png", "jakarta ou djakarta", "https://upload.maxence.live/ylp49b.png", "manille ou manilla", "https://upload.maxence.live/cl3h3m.png", "kyoto", "https://upload.maxence.live/cbdyny.png", "tokyo", "https://upload.maxence.live/83smp0.png", "seoul ou séoul", "https://upload.maxence.live/y13f4h.png", "beijing ou pekin", "https://upload.maxence.live/8iq07f.png", "shanghai", "https://upload.maxence.live/411d4z.png", "hong kong", "https://upload.maxence.live/tzq26u.png", "dacca ou dhaka", "https://upload.maxence.live/17jccg.png", "calcutta ou kolkata", "https://upload.maxence.live/6bikw9.png", "bombay ou mumbai", "https://upload.maxence.live/i85sn2.png", "new delhi", "https://upload.maxence.live/wgec5k.png", "karachi", "https://upload.maxence.live/xnpmyt.png", "teheran", "https://upload.maxence.live/u7pjn9.png", "istanbul ou istanboul", "https://upload.maxence.live/9rpq0d.png", "moscou ou moscow", "https://upload.maxence.live/uo124f.png", "londres", "https://upload.maxence.live/6kv3hs.png", "berlin", "https://upload.maxence.live/bh9ix1.png", "paris"];
z = '';
a= '';
b ='';
c ='';

function aonclickhandler(e) {
	a = (e.value)
}

function bonclickhandler(e) {
	b = (e.value)
}
function conclickhandler(e) {
	c = (e.value)
}

function onclickhandler(e) {
	z = (e.value)
}

const initiallength = hgx1.length / 2;
let answer = '';
note = 0;
prog = 0;
function random() {
	document.getElementById('progress').style.transform = `scaleX(${prog = prog + (1/ (initiallength + 1))})`;
	if (hgx1.length > 0) {
		let input = document.getElementById('answer');
		input.value = '';
		var range = hgx1.length;
		var random = Math.floor(Math.random() * range / 2) * 2;
		document.getElementById("img").src = hgx1[random];
		let loaded = document.getElementById("img");
		loaded.onload = function () {document.getElementById('flex-row').style.visibility = "visible";}
		answer = hgx1[random + 1]
		console.log(answer)
		hgx1.splice(random, 2);
	} else {
		end(note);
	}
}

function listener() {
let element = document.getElementById("next");
element.addEventListener("click" , function() {
	console.log("hiding");
	document.getElementById('flex-row').style.visibility = 'hidden';
	finalanswer = z.toLowerCase();
	if (answer.includes(finalanswer) === true && z !== '' && z !== 'ou') {
		console.log("Correct");
		note = note + 1;
		random();
		console.log('Note ' + note);
	} else {
		console.log("Incorrect");
		incorrect(answer);
		random();
	}
});
}

let input = document.getElementById("answer");


input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
	console.log("hiding");
	document.getElementById('flex-row').style.visibility = 'hidden';
	finalanswer = z.toLowerCase();
	if (answer.includes(finalanswer) === true && z !== '' && z !== 'ou') {
		console.log("Correct");
		note = note + 1;
		random();
		console.log('Note ' + note);
	} else {
		console.log("Incorrect");
		incorrect(answer);
		random();
	}
    
  }
});


function incorrect(param) {
	document.getElementById("alert").style.display = "flex";
	document.getElementById("alert").innerHTML ='Faux c\'était ' +  param;
	setTimeout(function() {
		document.getElementById("alert").style.display = "none";
	}, 4000);
}

function end(param) {
	addtrain();
	addtime();
	document.getElementById("exercise").style.display = "none";
	document.getElementById("end").style.display = "flex";
	if (note > 0) {
		finalnote = (param * 20) / initiallength;
		document.getElementById("finalscore").innerHTML = finalnote.toFixed(2);
		checknotes(finalnote);
		compteur(finalnote);
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
	document.getElementById("finaltime").innerHTML = value;
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
		localStorage.setItem('stats3', param.toFixed(2));
	}
}
// end of checknotes //

// start of compteur //
function compteur(param) {
	let all = parseFloat(localStorage.getItem('stats5'));
	x = all + param;
	localStorage.setItem('stats5', x);
}
// end of compteur //

async function deg2(index, a, b, c) {
	startchrono();
    let delta = b * b - 4 * a * c;
    let prog = 0.3;
	document.getElementById('preview').style.display = "none";
	document.getElementById('exercise').style.display = "flex";
    const result = document.getElementById('resultat');
    const step = document.getElementById('step');
    const progress = document.getElementById('progress');
    const listedelta = new Map([
        ['Delta', 'Δ = b² - 4ac'],
        ["Calcul de delta", `Δ = ${b}² - 4 * ${a} * ${c}`],
        ["Delta vaut donc", `Δ = ${delta}`],
    ]);
    const listepositif = new Map([
        ['Calcul de x¹', 'x¹ = (-b + √Δ) / 2a'],
        ['Calcul de x²', 'x² = (-b - √Δ) / 2a'],
        ["Resultat de x¹ et x²", `x¹ = (-${b} + √${delta}) / ${2 * a} et x² = (-${b} - √${delta}) / ${2 *a}`],
    ]);
    const listenul = new Map([
        ['Calcul de x', 'x = -b / 2a'],
        ["Résultat de x", `x = -${b} / ${2 * a}`],
    ]);
        for (const [key, value] of listedelta) {
            result.innerHTML = `${value}`;
            step.innerHTML = `${key}`;
            progress.style.transform = `scaleX(${prog = prog + (0.20 / listedelta.size)})`;
			await wait(index * 3000); 
        }
        if (delta < 0) {
            step.innerHTML = 'Delta est négatif';
            result.innerHTML = 'Pas de solution';
            prog(1.0);
        } else if (delta == 0) {
            for (const [key, value] of listenul) {
                result.innerHTML = `${value}`;
                step.innerHTML = `${key}`;
                progress.style.transform = `scaleX(${prog = prog + (0.50 / listenul.size)})`; 
				await wait(index * 3000);
            }
        } else if (delta > 0) {
            for (const [key, value] of listepositif) {
                result.innerHTML = `${value}`;
                step.innerHTML = `${key}`;
                progress.style.transform = `scaleX(${prog = prog + (0.50 / listepositif.size)})`;
				await wait(index * 3000); 
            }
         } addtime();
}

function cleardata() {
	localStorage.clear();
	alert('Données supprimées');
}

function wait(ms) { //fonction pour attendre
    return new Promise(function(resolve) {
        setTimeout(
            resolve, ms
        )
    })
}