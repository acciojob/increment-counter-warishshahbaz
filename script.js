//your JS code here. If required.

let count = 0;

function handleToIncreament(){
	let btn = document.getElementById("incrementBtn");
let text = document.getElementById("counter");
	count++;
	alert(count);
	text.innerHTML = count;
}