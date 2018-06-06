function swapMusic(video)
{
	var imageButton = document.getElementById('imageButton');
	imageButton.getElementById('a').setAttribute('href', video);
}

function randomLink() {
	anime.onclick =
		function () {
			var animeLinks = ["https://youtu.be/3DqCMBJiSzE","https://youtu.be/CNSu7dyODCA", "https://youtu.be/ABC5TRSj9gE"];
			result = [Math.round(Math.random()*Math.round(animeLinks.length-1))];
			
			swapMusic(result);
		}
}