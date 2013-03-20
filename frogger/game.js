function start_game() {
	canvas = document.getElementById('game');

	// Check if canvas is supported on browser
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
		init_game_vals();
		draw_all();
		start_controls();
		setInterval(game_loop, 12);
	}
	else {
		alert('Sorry, canvas is not supported on your browser!');
	}
}

function start_controls() {
	document.addEventListener("keydown", move_frog);
}

function move_frog (input) {
	input = input.keyCode;
	if (input == 37 && frog.x > 20)
		frog.x -= 28;
	else if (input == 38 && frog.y > 20)
		frog.y -= 33.5;
	else if (input == 39 && frog.x < 380)
		frog.x += 28;
	else if (input == 40 && frog.y < 485)
		frog.y += 33.5;
}

function game_loop() {
	update_game_vals();
	draw_all();
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
	for (i=0; i<vehicles.length; i++) { //draw cars
		c = vehicles[i];
		ctx.drawImage(img, c.sx, c.sy, c.w, c.h, c.x, c.y, c.w, c.h);
	}
	for (i=0; i<logs.length; i++) { //draw logs
		l = logs[i];
		ctx.drawImage(img, l.sx, l.sy, l.w, l.h, l.x, l.y, l.w, l.h);
	}

	ctx.drawImage(img, 45, 367, 25, 25, frog.x, frog.y, 25, 25); //frog
	draw_footer();	
}

function init_game_vals() {
	score = 0;
	high_score = 0;
	lives = 3;
	game_over = false;
	level = 1;
	time = 100;
	frog = {"x":185, "y":485};
	vehicles = [
			//yellow racer
				{"sx":80, "sy":264, "w":24, "h":27, "x":80,  "y":452, "spd":-.6},
				{"sx":80, "sy":264, "w":24, "h":27, "x":200, "y":452, "spd":-.6},
				{"sx":80, "sy":264, "w":24, "h":27, "x":320, "y":452, "spd":-.6},

			//bulldozer
				{"sx":10, "sy":300, "w":27, "h":24, "x":100, "y":418, "spd":.8},
				{"sx":10, "sy":300, "w":27, "h":24, "x":220, "y":418, "spd":.8},
				{"sx":10, "sy":300, "w":27, "h":24, "x":340, "y":418, "spd":.8},

			//pink
				{"sx":10, "sy":267, "w":28, "h":20, "x":20,  "y":384, "spd":-1},
				{"sx":10, "sy":267, "w":28, "h":20, "x":140, "y":384, "spd":-1},
				{"sx":10, "sy":267, "w":28, "h":20, "x":260, "y":384, "spd":-1},

			//white racer
				{"sx":46, "sy":264, "w":27, "h":25, "x":60,  "y":350, "spd":.8},
				{"sx":46, "sy":264, "w":27, "h":25, "x":180, "y":350, "spd":.8},
				{"sx":46, "sy":264, "w":27, "h":25, "x":300, "y":350, "spd":.8},


			//]truck
				{"sx":105, "sy":302, "w":45, "h":18, "x":0,   "y":316, "spd":-.8},
				{"sx":105, "sy":302, "w":45, "h":18, "x":150, "y":316, "spd":-.8}
				]
	logs = [{"sx":7, "sy":197, "w":120, "h":25, "x":200, "y":200, "spd":-1}];
}

function update_game_vals() {
	for (var i = 0; i < vehicles.length; i++) {
		vehicles[i].x = (vehicles[i].x + vehicles[i].spd) % 400;
		if (vehicles[i].x <= 0 - vehicles[i].w)
			vehicles[i].x = 400;
	};

	for (var i = 0; i < logs.length; i++) {
		logs[i].x = (logs[i].x + logs[i].spd) % 400;
		if (logs[i].x <= 0 - logs[i].w)
			logs[i].x = 400;
	};
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