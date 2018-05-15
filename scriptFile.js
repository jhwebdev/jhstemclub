//alert('Test! Yoyoyo!');

var myImage = document.querySelector('#sidePhoto');
var myCSS = document.querySelector('stylesheet');
var myMCSS = document.querySelector('mobilestyle');

function swapStyle(sheet)
{
	document.getElementById('mainstyle').setAttribute('href', sheet);
}

//tried reacreating swapStyle function but for music
function swapMusic(music, type)
{
	document.getElementById('songs').setAttribute('src', music);
	//document.getElementById('songs').setAttribute('type', type);
}

var audio = document.getElementById('Songs');

function styles() 
{
	var style1 = document.getElementById('stylish1');
	var style2 = document.getElementById('stylish2');
	var music1 = document.getElementById('music1');
	var music2 = document.getElementById('music2');
	
	stylish1.onclick = 
		function() {
			
			swapStyle('mainstyle.css');
			swapMusic('whenTheMoonsReachingStars.mp3');
			//swapMobile('mobilestyle.css');
		}
	stylish2.onclick = 
		function() {
			
			swapStyle('velvetMainStyle.css');
			swapMusic('poemForEveryonesSouls.mp3');
			//swapMobile('velvetMobileStyle.css');
		}
	/*music1.onclick =
		function () {
			swapMusic('whenTheMoonsReachingStars.mp3');
		}
	music2.onclick =
		function () {
			swapMusic('poemForEveryonesSouls.mp3');
		}*/
}

/*var zero: "whenTheMoonsReachingStars.mp3";

function Music()
{
	number = new Audio[1];
	
	number[0] = one;
}*/

