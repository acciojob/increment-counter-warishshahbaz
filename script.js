//your JS code here. If required.

let count = 0;

function handleToIncreament(){
	let btn = document.getElementById("incrementBtn");
let text = document.getElementById("counter");
	alert(count);
	count++;
	text.innerHTML = count;
}