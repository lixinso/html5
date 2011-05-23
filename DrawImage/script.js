function draw(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0,0,400,400);
	context.fillStyle="red";
	context.strokeStype="blue";
	context.lineWidth = 1;
	context.fillRect(50,50,100,100);
	context.strokeRect(50,50,100,100);
}

function drawCycle(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0,0,400,300);
	var n = 0;
	for( var i = 0 ; i < 10; i++)
	{
		context.beginPath();
		context.arc(i*25,i*25,i*10,0,Math.PI*2,true);
		context.closePath();
		context.fillStyle = 'rgba(255,0,0,0.25)'
		context.fill();
	}
}

function drawComplex(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0,0,400,300);
	var n = 0;
	var dx = 150;
	var dy = 150;
	var s = 100;
	context.beginPath();
	context.fillStyle = 'rgb(100,250,100)';
	context.strokeStyle = 'rgb(0,0,100)';
	var x = Math.sin(0);
	var y = Math.cos(0);
	var dig = Math.PI/15 * 11;
	for( var i = 0 ; i < 30; i++)
	{
		var x = Math.sin(i*dig);
		var y = Math.cos(i*dig);
		context.lineTo(dx + x * s, dy + y * s);
	}
	context.closePath();
	context.fill();
	context.stroke();
}

function drawColorChange(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return;
	var context = canvas.getContext('2d');
	var g1 = context.createLinearGradient(0,0,0,300);
	g1.addColorStop(0,'rgb(255,255,0)');
	g1.addColorStop(1,'rgb(0,255,255)');
	context.fillStyle = g1;
	context.fillRect(0,0,400,300);
	var n = 0;
	var g2 = context.createLinearGradient(0,0,300,0);
	g2.addColorStop(0,'rgba(0,0,255,0.5)');
	g2.addColorStop(1,'rgba(255,0,0,0.5)');
	for(var i = 0 ; i < 10 ;i++)
	{
		context.beginPath();
		context.fillStyle = g2;
		context.arc(i*25, i*25, i*10, 0 , Math.PI * 2, true);
		context.closePath();
		context.fill();
	}
}

function drawRotate(id)
{
	var canvas = document.getElementById(id)
	if(canvas == null)
		return false;
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0,0,400,300);
	context.translate(200,50);
	context.fillStyle='rgba(255,0,0,0.25)';
	for(var i = 0; i < 50; i++)
	{
		context.translate(25,25);
		context.scale(0.95,0.95);
		context.rotate(Math.PI / 10);
		context.fillRect(0,0,100,50);
	}
}

function drawRotatePath(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0,0,400,300);
	context.translate(200,50);
	for(var i = 0 ;i < 50; i++)
	{
		context.translate(25,25);
		context.scale(0.95,0.95);
		context.rotate(Math.PI/10);
		create5Star(context);
		context.fill();
	}
}

function create5Star(context)
{
	var n = 0 ;
	var dx = 100;
	var dy = 0;
	var s = 50;
	context.beginPath();
	context.fillStyle = 'rgba(255,0,0,0.5)';
	var x = Math.sin(0);
	var y = Math.cos(0);
	var dig = Math.PI / 5 * 4;
	for( var i = 0; i < 5; i++)
	{
		var x = Math.sin(i*dig);
		var y = Math.cos(i*dig);
		context.lineTo(dx + x*s , dy + y*s);
	}
	context.closePath();
}

function drawTransform(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return;
	var context = canvas.getContext('2d');
	var colors = ["red","orange","yellow","greeen","blue","navy","purple"];
	context.lineWidth = 10;
	context.transform(1,0,0,1,100,0);
	for(var i = 0 ;i < colors.length; i++)
	{
		context.transform(1,0,0,1,0,10);
		context.strokeStyle = colors[i];
		context.beginPath();
		context.arc(50,100,100,0,Math.PI,true);
		context.stroke();
	}
}

function drawSetTransform(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	var context = canvas.getContext('2d');
	
	 
	context.strokeStyle = "red";
	context.strokeRect(30,10,60,20);
	
	var rad = 45*Math.PI / 180;
	context.setTransform(Math.cos(rad),Math.sin(rad),-Math.sin(rad),Math.cos(rad),0,0);
	context.strokeStyle = "blue";
	context.strokeRect(30,10,60,20);
	
}

function drawComposite(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	var context = canvas.getContext('2d');
	var oprtns = new Array(
		"source-atop",
		"source-in",
		"source-out",
		"source-over",
		"destination-atop",
		"destination-in",
		"destination-out",
		"destination-over",
		"lighter",
		"copy",
		"xor"
		);
	context.fillStyle="blue";
	context.fillRect(10,10,60,60);
	context.globalCompositeOperation = oprtns[2];
	context.beginPath();
	context.fillStyle = "red";
	context.arc(60,60,30,0,Math.PI*2,false);
	context.fill();
}

function drawShadow(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0,0,400,300);
	context.shadowOffsetX = 10;
	context.shadowOffsetY = 10;
	context.shadowColor = 'rgba(100,100,100,0.5)';
	context.shadowBlur = 7.5;
	context.translate(0,50);
	for( var i = 0 ; i < 3 ; i++)
	{
		context.translate(50,50);
		create5Star(context);
		context.fill();
	}
}

function drawImage(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0,0,400,300);
	image = new Image();
	image.src = "pic1.jpg";
	image.onload = function()
	{
		drawImg(context,image);
	}
}

function drawImg(context,image)
{
	for(var i = 0 ; i < 7; i++)
	{
		context.drawImage(image,0+i*50,0+i*25,100,100);
	}
}

function drawEnlarge(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0,0,400,300);
	image = new Image();
	image.src = "pic1.jpg";
	image.onload = function()
	{
		drawEnlargeImg(context,image);
	};
}

function drawEnlargeImg(context,image)
{
	var i = 0;
	context.drawImage(image,0,0,100,100);
	context.drawImage(image,23,5,57,80,110,0,100,100);
}

function drawCreatePattern(id)
{
	var image = new Image();
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	var context = canvas.getContext('2d');
	image.src = "pic1.jpg";
	image.onload = function()
	{
		var ptrn = context.createPattern(image,'repeat');
		context.fillStyle = ptrn;
		context.fillRect(0,0,400,300);
	}
}



function drawClip(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return null;
	var context = canvas.getContext('2d');
	var gr = context.createLinearGradient(0,400,300,0);
	gr.addColorStop(0,'rgb(255,255,0)');
	gr.addColorStop(1,'rgb(0,255,255)');
	context.fillStyle = gr;
	context.fillRect(0,0,400,300);
	image = new Image();
	image.onload = function()
	{
		drawClipImg(context,image);
	};
	image.src = "pic1.jpg";
}

function drawClipImg(context,image)
{
	create5StarClip(context);
	context.drawImage(image,-50,-150,300,300);
}

function create5StarClip(context)
{
	var n = 0;
	var dx = 100;
	var dy = 0;
	var s = 150;
	context.beginPath();
	context.translate(100,150);
	var x = Math.sin(0);
	var y = Math.cos(0);
	var dig = Math.PI / 5 * 4;
	for(var i = 0 ; i < 5; i++)
	{
		var x = Math.sin(i*dig);
		var y = Math.cos(i*dig);
		context.lineTo(dx + x * s , dy + y * s);
	}
	context.clip();
}

/*seems doesn't work*/
function drawRevertImage(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	var context = canvas.getContext('2d');
	var image = new Image();
	image.src = "pic1.jpg";
	image.onload = function()
	{
		context.drawImage(image,0,0);
		var imagedata = context.getImageData(0,0,image.width, image.height);
		for(var i = 0 , n = imagedata.data.length; i < n ; i += 4)
		{
			imagedata.data[i+0] = 0;
			imagedata.data[i+1] = 0;
			imagedata.data[i+2] = 0;
		}
		context.putImageData(imagedata,0,0);
 	};
}
