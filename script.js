//your JS code here. If required.
let btn = document.getElementByid("btn");
let text = document.getElementById("text")
let count = 0;

function handleToIncreament(){
	count++;
	// window.alert(count);
	text.innerHTML = count;
}