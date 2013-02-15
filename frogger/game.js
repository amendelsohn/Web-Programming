function start_game() {
	canvas = document.getElementById('game');

	// Check if canvas is supported on browser
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
		init_game_vals();
		draw_all();
	}
	else {
		alert('Sorry, canvas is not supported on your browser!');
	}
}

function draw_all() {
	img = new Image();
	img.src = 'assets/frogger_sprites.png';
	ctx.fillStyle = "#191970";
	ctx.fillRect(0, 0, 399, 283); //water
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 283, 399, 282); //road
	
	ctx.drawImage(img, 0, 0, 399, 100, 0, 0, 399, 100); //header title+green
	ctx.drawImage(img, 0, 119, 399, 34, 0, 280, 399, 34); //roadside-mid
	ctx.drawImage(img, 0, 119, 399, 34, 0, 480, 399, 34); //roadside-bot
	
	draw_movables();
}

function draw_movables() {
	ctx.drawImage(img, 45, 367, 25, 25, frog.x, frog.y, 25, 25); //frog

	for (i=0; i<vehicles.length; i++) { //draw cars
		c = vehicles[i];
		ctx.drawImage(img, c.sx, c.sy, c.w, c.h, c.x, c.y, c.w, c.h);
	}
	for (i=0; i<logs.length; i++) { //draw logs
		l = logs[i];
		ctx.drawImage(img, l.sx, l.sy, l.w, l.h, l.x, l.y, l.w, l.h);
	}
	
	draw_footer();	
}

function init_game_vals() {
	score = 0;
	high_score = 0;
	lives = 3;
	game_over = false;
	level = 1;
	time = 100;
	frog = {"x":180, "y":485};
	vehicles = [{"sx":10, "sy":267, "w":28, "h":20, "x":100, "y":400, "spd":10},
							{"sx":105, "sy":302, "w":45, "h":18, "x":180, "y":440, "spd":10}];
	logs = [{"sx":7, "sy":197, "w":120, "h":25, "x":200, "y":200, "spd":10}];
}

function draw_footer() {
	ctx.font="14px Helvetica";
	ctx.fillStyle="rgb(0,255,0)";
	ctx.fillText("Score: "+score,10,555);
	ctx.fillText("Highscore: "+high_score,100,555);

	for (i=0; i<lives; i++) { //life counter
		ctx.drawImage(img, 13, 334, 17, 23, 10+i*22, 515, 17, 23);
	}
	
	ctx.font="20px Helvetica";
	ctx.fillStyle="rgb(0,255,0)";
	ctx.fillText("Level "+level, 90, 535);
}