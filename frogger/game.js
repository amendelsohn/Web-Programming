function start_game() {
	canvas = document.getElementById('game');

	// Check if canvas is supported on browser
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
		img = new Image();
		img.src = 'assets/frogger_sprites.png';
		ctx.fillStyle = "#191970";
		ctx.fillRect(0, 0, 399, 283); //water
		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 283, 399, 282); //road
		ctx.drawImage(img, 0, 0, 399, 100, 0, 0, 399, 100); //title+green
		ctx.drawImage(img, 0, 119, 399, 34, 0, 280, 399, 34); //roadside-mid
		ctx.drawImage(img, 0, 119, 399, 34, 0, 500, 399, 34); //roadside-bot
		ctx.drawImage(img, 45, 367, 25, 25, 180, 505, 25, 25); //frog-start
	}
	else {
		alert('Sorry, canvas is not supported on your browser!');
	}
}