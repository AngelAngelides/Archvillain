window.onpageshow = 
function(event){
if (event.persisted){
//for every div and image you want changed back you can add a loop here to change all at once or just one div by name//
document.getElementById('div1').innerHTML = '<a href="dosomething"><img src="images/logo/fb1" onmouseover="this.src="images/logo/fb2";" onmouseout="this.src="images/logo/fb1";"></a>';
}
}

window.onpageshow = 
function(event){
if (event.persisted){
//for every div and image you want changed back you can add a loop here to change all at once or just one div by name//
document.getElementById('div1').innerHTML = '<a href="dosomething"><img src="images/logo/in1" onmouseover="this.src="images/logo/in2";" onmouseout="this.src="images/logo/in1";"></a>';
}
}

window.onpageshow = 
function(event){
if (event.persisted){
//for every div and image you want changed back you can add a loop here to change all at once or just one div by name//
document.getElementById('div1').innerHTML = '<a href="dosomething"><img src="images/logo/tw1" onmouseover="this.src="images/logo/tw2";" onmouseout="this.src="images/logo/tw1";"></a>';
}
}