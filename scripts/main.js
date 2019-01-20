var myImage = document.querySelector('img.image1');
var myImage2 = document.querySelector('img.image2');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/image1.jpg'){
		myImage.setAttribute ('src','images/image2.jpg');
	} else {
		myImage.setAttribute ('src','images/image1.jpg');
	}
}
myImage2.onclick = function() {
	var mySrc = myImage2.getAttribute('src');
	if (mySrc === 'images/image1.jpg'){
		myImage2.setAttribute ('src','images/image2.jpg');
	} else {
		myImage2.setAttribute ('src','images/image1.jpg');
	}
}

/*******************************************************************************************/

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);	
	myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name') || localStorage.getItem('name') === 'null'){
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = ' Mozilla is cool, ' + storedName;
}

/*myButton.onclick = function(){
	do {
		setUserName();
	} while (localStorage.getItem('name') === '');
}*/

/*******************************************************************************************/