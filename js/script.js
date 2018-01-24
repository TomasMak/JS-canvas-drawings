var canvas = document.querySelector('canvas');

var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Animation

var mouse = {
  x: undefined,
  y: undefined
}

var maxRadius = 150;
var minRadius = 5;

var colorArray = [



];

window.addEventListener('mousemove', 
  function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
  })

window.addEventListener('resize', function()
{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
})

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 10;
var dy = (Math.random() - 0.5) * 10;
var radius = 100;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0 ,0, innerWidth, innerHeight);
  
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI *2, false);
  c.strokeStyle = 'black';
  c.stroke();
  c.lineWidth = 1;
  c.fill();
  c.fillStyle = 'red';

  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI *2, false);
  c.strokeStyle = 'black';
  c.stroke();
  c.lineWidth = 10;
  c.fill();
  c.fillStyle = 'red';
  
  if (x + radius  > innerWidth || x - radius <0) {
    dx = -dx;
  }
    if (y + radius  > innerHeight || y - radius < 0) {
    dy = -dy;
  }
  x += dx;
  y += dy;

  //interactivity

  if (mouse.x - x < 50 && mouse.x - x > -50 
    && mouse.y - y <50 && mouse.y -y > -50) {
    if (radius < maxRadius) {
    radius +=1; 
     }
  } else if (radius > minRadius) {
    radius -=1;
  }
}


animate();

var radius = 10;
var putPoint = function(e){
  context.beginPath();
  context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
  context.fill();
}
canvas.addEventListener('mousedown', putPoint);

console.log('fuck * infinity');



