var x = 100
var y = 100;
var h = 0;
var s = 360;
var l = 200;
var inpText = "LEISURE HOURS"
var yWave =  100
var yWaveSize = 30
var yWaveLength = .5
var yWaveSpeed = .05
var tracking = 30;
function setup() {
  colorMode(HSL, 360);
  createCanvas(500, 500);
  background(0, 0, 360);

}
function draw() {
  background(0, 0, 360);
fill(h, s, l);
textSize(32);
translate(width/2,height/2);
translate(-(inpText.length-1)*tracking/2,0);
// text('LEISURE HOURS', x, y);
  for(var i = 0; i < inpText.length; i++){
    yWave = sin(frameCount*yWaveSpeed + i*yWaveLength) * yWaveSize;
    fill(255);
    push();
      translate(i*tracking, 0);
      // ellipse(0,yWave,5,5);
      fill(h, s, l);
      text(inpText.charAt(i),0,yWave);
    pop();
  }
h+=1;
y+=50;
if (h==360){
h = 0;
};
}