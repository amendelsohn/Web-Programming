function start_game() {
	canvas = document.getElementById('game');
	init_game_vals();
	draw();
}

function draw() {
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
		ctx.drawImage(img, 0, 119, 399, 34, 0, 480, 399, 34); //roadside-bot
		ctx.drawImage(img, 45, 367, 25, 25, 180, 485, 25, 25); //frog-start
		ctx.drawImage(img, 7, 197, 120, 25, 200, 200, 120, 25); //log
		ctx.drawImage(img, 10, 267, 28, 20, 100, 400, 28, 20); //car1
		ctx.drawImage(img, 105, 302, 45, 18, 180, 440, 45, 18); //car2
		draw_text();
	}
	else {
		alert('Sorry, canvas is not supported on your browser!');
	}
}

function init_game_vals() {
	score = 0;
	high_score = 0;
	lives = 3;
	frog_x = 180;
	frog_y = 485;
	game_over = false;
	level = 1;
	time = 100;
	vehicles = [{"x":100, "y":400, "spd":10},
							{"x":180, "y":400, "spd":10}];
	logs = [{"x":200, "y":200, "spd":10}];
}

function draw_text() {
	ctx.font="14px Georgia";
	ctx.fillStyle="rgb(0,255,0)";
	ctx.fillText("Score: "+score+ "       Highscore: "+high_score,10,555);
	for (i=0; i<lives; i++) {
		ctx.drawImage(img, 13, 334, 17, 23, 10+i*22, 515, 17, 23);
	}
	ctx.font="20px Georgia";
	ctx.fillStyle="rgb(0,255,0)";
	ctx.fillText("Level "+level, 90, 535);
}//13 334 17 23