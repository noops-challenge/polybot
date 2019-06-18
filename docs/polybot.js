let canvas;
let ctx;
let appWidth;
let appHeight;

//let colors = ['#ff00a2','#00baff'];
let colors = ['#ff00a2','#00baff']; //try three colors!

// called by NOOPBOT on window.onload

function start_app() {

  // size canvas to window
  sizeCanvas();

  //set up a ticker to refresh page automatically.
  let speed = 1000; // how often screen refreshes, in milliseconds.
  let ticker = NOOPBOT_TICK_SETUP(draw, speed);

  //fire a draw event.
  draw();

  //redraw when canvas is clicked.
  canvas.addEventListener('click', draw);
}

function sizeCanvas() {
  appWidth = window.innerWidth;
  appHeight = window.innerHeight;
  canvas = document.getElementById('canvas');
  ctx = NOOPBOT_SETUP_CANVAS( { canvas: canvas, bgColor:'#f1f1f1' });
}

function draw() {
  //get the data!
  NOOPBOT_FETCH({
    API: 'polybot',
    count: 300,
    size: appWidth/2,
    minSides: 4,
    maxSides: 16,
    width: appWidth,
    height: appHeight
  }, drawSet);
}

function drawSet(responseJson) {
  //clean the canvas. comment out to let them build up.
  //NOOPBOT_SETUP_CANVAS({ canvas: canvas, bgColor:NOOPBOT_DECIDE(colors) });

  let { polygons } = responseJson;
  polygons.forEach(function(polygon) {
    drawPolygon(ctx, polygon);
  })
}

function drawPolygon(ctx, points) {

  // randomly choose fill color and alpha
  ctx.fillStyle = NOOPBOT_DECIDE(colors);
  ctx.globalAlpha = Math.random();

  // draw the polygon
  ctx.beginPath();
  let firstPoint = points.shift();
  ctx.moveTo(firstPoint.x, firstPoint.y);

  points.forEach(function(point) {
    ctx.lineTo(point.x, point.y);
  });

  // fill polygon
  ctx.fill();

}

// listen if browser changes size.
window.onresize = function(event){
  sizeCanvas();
  draw();
};
