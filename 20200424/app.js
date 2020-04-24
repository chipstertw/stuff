let input = document.querySelector('input');
let item = document.querySelector('#item');
let dq = (x) => document.querySelector(x);
// input.addEventListener('keypress', function() {
// 	console.log('keypress');
// });

//hit enter get value
//create list
//fetch value
//add value to a list
//append the list

const addList = function() {
	let li = document.createElement('li');
	li.innerText = item.value;
	console.log(li);
	dq('ul').append(li);
};

input.addEventListener('keypress', function(e) {
	if (e.key === 'Enter' && this.value !== '') {
		console.log(e);
		addList();
	}
	this.value = '';
});
