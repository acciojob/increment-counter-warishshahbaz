//your JS code here. If required.
let btn = document.getElementByid("btn");
let text = document.getElementByid("text");
let count = 0;

function handleToIncreament(){
	count++;
	alert(count);
	text.innerHtml = count;
}