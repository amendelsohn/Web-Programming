function start_game() {
	canvas = document.getElementById('game');

	// Check if canvas is supported on browser
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
		pac = new Image();
		pac.src = 'pacman10-hp-sprite.png';
		ctx.drawImage(pac, 320, 0, 465, 137, 0, 0, 465, 137);
		
	}
	else {
		alert('Sorry, canvas is not supported on your browser!');
	}
}
