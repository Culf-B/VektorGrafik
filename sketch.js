function Square(x, y, size, sliderX = 15, sliderY = 15, sliderRange = [0, 400])
{
  this.pos = [x, y];
  this.size = size;
  this.sliderRange = sliderRange;
  
  this.slider = createSlider(this.sliderRange[0], this.sliderRange[1], this.size);
  this.slider.position(sliderX, sliderY);

  this.update = function()
  {
    this.size = this.slider.value();
  };
  this.updatePos = function()
  {
    this.pos[0] = mouseX;
    this.pos[1] = mouseY;
  };
  this.draw = function()
  {
    this.p1 = [this.pos[0] - this.size / 2, this.pos[1] - this.size / 2];
    this.p2 = [this.pos[0] + this.size / 2, this.pos[1] - this.size / 2];
    this.p3 = [this.pos[0] - this.size / 2, this.pos[1] + this.size / 2];
    this.p4 = [this.pos[0] + this.size / 2, this.pos[1] + this.size / 2];

    line(this.p1[0], this.p1[1], this.p2[0], this.p2[1]);
    line(this.p2[0], this.p2[1], this.p4[0], this.p4[1]);
    line(this.p4[0], this.p4[1], this.p3[0], this.p3[1]);
    line(this.p3[0], this.p3[1], this.p1[0], this.p1[1]);
  };
}

function setup() 
{
  createCanvas(400, 400);

  sq = new Square(200, 200, 10);
}

function doubleClicked()
{
  sq.updatePos();
}

function draw() 
{
  background(220);

  sq.update();
  sq.draw();
}