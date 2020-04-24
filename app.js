let dq = (x) => document.querySelector(x);
let dqa = (x) => document.querySelectorAll(x);

let colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'purple' ];
let emojis = [ '👹', '🎃', '🥮', '🔋', '🧿', '💜' ];
let turnBlack = function(evt) {
	this.classList.toggle('bg');
	console.log(evt);
};

for (color of colors) {
	let div = document.createElement('div');
	div.classList.add('box');
	div.classList.add(color);
	dqa('section')[0].append(div);
	div.addEventListener('mouseover', turnBlack);
	div.addEventListener('mouseout', turnBlack);
}

let divAll = dqa('div');
for (i = 0; i < divAll.length; i++) {
	divAll[i].innerText = emojis[i];
}

// for (emoji of emojis) {
// 	let div = document.createElement('div');
// 	div.classList.add('box2');
// 	div.innerText = emoji;
// 	dqa('section')[0].append(div);
// }

//make squares
//align squares
//give squares colors
//click squares
//poop emojis
