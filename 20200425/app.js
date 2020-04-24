const player = document.querySelector('#player');
const poop = document.querySelector('#poop');
const fartsound = new Audio('fart-01.mp3');
let dq = (x) => document.querySelector(x);

function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const touch = function() {
	if (isTouching(player, poop)) {
		fartsound.play();
		alert('YUM!');
		player.style.top = '10px';
		player.style.left = '10px';
		poopMove();
		score.innerText = parseInt(score.innerText) + 1;
	}
	if (score.innerText === 5) {
		moveVertical(player, -50);
	}
};

const numExtract = (num) => {
	if (!num) return 10;
	return parseInt(num.slice(0, -2));
};

const moveVertical = (ele, amount) => {
	let currTop = numExtract(ele.style.top);
	ele.style.top = `${currTop + amount}px`;
};

const moveHorizontal = (ele, amount) => {
	let currTop = numExtract(ele.style.left);
	ele.style.left = `${currTop + amount}px`;
};
const poopMove = () => {
	let x = Math.floor(Math.random() * window.innerWidth);
	let y = Math.floor(Math.random() * window.innerHeight);
	poop.style.top = `${x}px`;
	poop.style.left = `${y}px`;
};
poopMove();

dq('#up').addEventListener('click', function() {
	moveVertical(player, -50);
});
dq('#down').addEventListener('click', function() {
	moveVertical(player, +50);
});
dq('#right').addEventListener('click', function() {
	moveHorizontal(player, +50);
	player.style.transform = 'scale(1,1)';
});
dq('#left').addEventListener('click', function() {
	moveHorizontal(player, -50);
	player.style.transform = 'scale(-1,1)';
});

window.addEventListener('keydown', function(e) {
	if (e.key === 'ArrowUp') {
		moveVertical(player, -50);
	} else if (e.key === 'ArrowDown') {
		moveVertical(player, +50);
	} else if (e.key === 'ArrowRight') {
		moveHorizontal(player, +50);
		player.style.transform = 'scale(1,1)';
	} else if (e.key === 'ArrowLeft') {
		moveHorizontal(player, -50);
		player.style.transform = 'scale(-1,1)';
	}
	touch();
});
