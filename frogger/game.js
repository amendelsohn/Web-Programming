function start_game() {
	canvas = document.getElementById('game');

	// Check if canvas is supported on browser
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
		init_game_vals();
		draw_all();
		start_controls();
		setInterval(game_loop, speed);
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
	else if (input == 38 && frog.y > 20) {
		add_score(10);
		frog.y -= 33.5;
		if (frog.y <= 83) {
			check_home();
		}
	}
	else if (input == 39 && frog.x < 350)
		frog.x += 28;
	else if (input == 40 && frog.y < 485)
		frog.y += 33.5;
	console.log(frog.x +", "+frog.y);
}

function check_home () {
	var x = frog.x;
	for (var i = 0; i < 5; i++) {	
		if (x > 5+(85*i) && x < 40+(85*i)) {
			add_score(50);
			lives++;
			frog_death();
			home[i] = true;
		}
	}
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

	for (var i = 0; i < home.length; i++) {
		if (home[i])
			ctx.drawImage(img, 45, 367, frog.w, frog.h, 16+85*i, 78, frog.w, frog.h);
	};
	
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

	ctx.drawImage(img, 45, 367, frog.w, frog.h, frog.x, frog.y, frog.w, frog.h); //frog
	draw_footer();	
}

function init_game_vals() {
	speed = 18;
	score = 0;
	high_score = 0;
	lives = 5;
	game_over = false;
	level = 1;
	time = 100;
	home = [false, false, false, false, false]; //false
	frog = {"x":185, "y":485, "w":25, "h":25};
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
				{"sx":46, "sy":264, "w":27, "h":25, "x":60,  "y":349, "spd":.8},
				{"sx":46, "sy":264, "w":27, "h":25, "x":180, "y":349, "spd":.8},
				{"sx":46, "sy":264, "w":27, "h":25, "x":300, "y":349, "spd":.8},


			//]truck
				{"sx":105, "sy":302, "w":45, "h":18, "x":0,   "y":318, "spd":-.8},
				{"sx":105, "sy":302, "w":45, "h":18, "x":150, "y":318, "spd":-.8}
				]
	logs = [
			//short
				{"sx":7, "sy":229, "w":84, "h":25, "x":0,   "y":251, "spd":-1},
				{"sx":7, "sy":229, "w":84, "h":25, "x":160, "y":251, "spd":-1},
				{"sx":7, "sy":229, "w":84, "h":25, "x":320, "y":251, "spd":-1},

				{"sx":7, "sy":229, "w":84, "h":25, "x":10,  "y":217, "spd":1},
				{"sx":7, "sy":229, "w":84, "h":25, "x":140, "y":217, "spd":1},
				{"sx":7, "sy":229, "w":84, "h":25, "x":270, "y":217, "spd":1},
			
			//med
				{"sx":7, "sy":197, "w":120, "h":25, "x":100, "y":183, "spd":-1},
				{"sx":7, "sy":197, "w":120, "h":25, "x":250, "y":183, "spd":-1},
				{"sx":7, "sy":197, "w":120, "h":25, "x":400, "y":183, "spd":-1},

				{"sx":7, "sy":197, "w":120, "h":25, "x":100, "y":116, "spd":1},
				{"sx":7, "sy":197, "w":120, "h":25, "x":250, "y":116, "spd":1},

			// //long
				{"sx":7, "sy":165, "w":178, "h":25, "x":0,   "y":150, "spd":-1},
				{"sx":7, "sy":165, "w":178, "h":25, "x":240, "y":150, "spd":-1},
			];
}

function update_game_vals() {
	for (var i = 0; i < vehicles.length; i++) {
		vehicles[i].x = (vehicles[i].x + vehicles[i].spd*(1+level/10)) % 400;
		if (vehicles[i].x <= 0 - vehicles[i].w)
			vehicles[i].x = 400;
	};

	for (var i = 0; i < logs.length; i++) {
		logs[i].x = (logs[i].x + logs[i].spd*(1+level/10)) % 400;
		if (logs[i].x <= 0 - logs[i].w)
			logs[i].x = 400;
	};

	check_frog_collision();

	check_lv_up();
}

function check_lv_up () {
	var lvup = true;
	for (var i = 0; i < home.length; i++) {
		if (!home[i])
			lvup = false;
	};

	if (lvup) {
		home = [false, false, false, false, false];
		level++;
		add_score(1000);
		lives++;
		frog_death();
	}
}

function add_score(x) {
	console.log(score%10000 +", "+ (score+x)%10000 +", " + lives)
	if (score%10000 > 5000 && (score+x)%10000 < 5000 && lives < 5)
		lives++;
	score += x;
}

function check_frog_collision () {
	for (var i = 0; i < vehicles.length; i++) {
		if (collides(vehicles[i]))
			frog_death();
	};

	if (frog.y < 280 && frog.y > 83) {
		var death = true;
		for (var i = 0; i < logs.length; i++) {
			if (collides(logs[i])) {
				death = false;
				frog.x += logs[i].spd*(1+level/10);
			}
		};
		if (death)
			frog_death();
	}
}

function collides (obj) {
	f = {	//frog
		"tlx": frog.x,
		"tly": frog.y,
		"brx": frog.x + frog.w,
		"bry": frog.y + frog.h,
	}
	b = {	//object
		"tlx": obj.x,
		"tly": obj.y,
		"brx": obj.x + obj.w,
		"bry": obj.y + obj.h,
	}

	if (! ((f.brx < b.tlx) || (f.tlx > b.brx)
		|| (f.tly > b.bry) || (f.bry < b.tly))) {
		return true;
	}
	return false;
}

function frog_death () {
	lives--;
	frog.x = 185;
	frog.y = 485;
	if (lives <= 0) {
		alert("Game Over!");
		init_game_vals();
	}

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
	ctx.fillText("Level "+level, 160, 535);
}