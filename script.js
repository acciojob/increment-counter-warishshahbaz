//your JS code here. If required.

let count = 0;

function handleToIncreament(){
	let btn = document.getElementById("btn");
let text = document.getElementById("text");
	count++;
	alert(count);
	text.innerHTML = count;
}