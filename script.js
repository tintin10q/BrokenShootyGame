	var canvas = document.getElementById("myCanvas");
	var turret = document.getElementById("turret");
	var ctx = canvas.getContext("2d");
	var width = canvas.width;
	var height = canvas.height;
	var x = 0;
	var y = 0;
	var radian = 0.0174532925;
	var degree = 0;
	var draw_count = 200;
	var go = true;
	var bullet_storage;
function bullet(increase) {
		this.sprite = document.getElementById("bullet");
		this.degree = degree;
		this.increase = increase;
		this.x = width/2;
		this.y = height/2;

		this.draw_function = function draw() {
			drawImageCenter(this.sprite,this.x,this.y,this.sprite.naturalWidth/2,this.sprite.naturalHeight,1,this.degree);
			this.x += this.increase;
			this.y += this.increase;
			console.log(increase);
		}
	};

function startGame() {
	/* Game loop*/
	setInterval(update,20);
	ctx.fillStyle = "#FF0000";
	}



function pause() {
	drawImageCenter(document.getElementById("bullet"),20,30,0,0,1,0);
	if (go) {
	go = false;

	}
	else if (go == false) {
	go = true
	}
	console.log(degree);
}
function shoot() {
	start_x = width / 2;
	start_y = height /2;
	target_x = start_x+100;
	target_y = start_y + Math.tan(degree*radian)*100;
	increase = (target_y-start_y)/(target_x-start_x);

	bullet_storage = new bullet(increase);
	draw_count = 0;

}
function update() {
	if (go) {
		ctx.canvas.width = ctx.canvas.width; /*why is this even a thing???*/
		degree++;
		if (degree > 360) {
			degree = 0;
		}
		drawImageCenter(turret, width / 2, height / 2, turret.naturalWidth / 2, turret.naturalHeight / 2, 1, degree *0.1);
	}

	if (draw_count < 200) {
		bullet_storage.draw_function();
		draw_count++;
		console.log(draw_count);
	}

	}

	function drawImageCenter(image, x, y, cx, cy, scale, rotation){
		ctx.setTransform(scale, 0, 0, scale, x, y); // sets scale and origin
		ctx.rotate(rotation);
		ctx.drawImage(image, -cx, -cy);
	}

