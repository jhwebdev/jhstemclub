//alert('Test! Yoyoyo!');

var myImage = document.querySelector('#sidePhoto');
var myCSS = document.querySelector('stylesheet');
var myMCSS = document.querySelector('mobilestyle');

function swapStyle(sheet)
{
	document.getElementById('mainstyle').setAttribute('href', sheet);
}

function swapLink(link)
{
	document.getElementById('imageButton').setAttribute('href'. link);
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
	/*var style1 = document.getElementById('stylish1');
	var style2 = document.getElementById('stylish2');*/
	//var style3 = document.getElementById('stylish3');
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
	stylish3.onclick =
		function() {
			swapStyle('goldenMainStyle.css');
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

var imageButton

function randomLink() {
	var animeLinks = ["https://www.youtube.com/watch?v=x-GxU6yM9FA", "https://www.youtube.com/watch?v=q3f5UeqAAcg", "https://www.youtube.com/watch?v=VHyzxD9yzvk", "https://www.ampproject.org/docs/getting_started/create/presentation_layout", "https://www.edmodo.com/home#/"];
	
	imageButton.onclick =
		function() {
			swapLink([Math.round(Math.random())*(animeLinks.length-1)]);
		}
}


	
	
	

