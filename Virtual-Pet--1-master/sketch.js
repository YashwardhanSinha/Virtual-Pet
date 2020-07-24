//Create variables here
var dog; 
var happyDog
var database;
var foodS; 
var foodStock;

function preload()
{
  //load images here
  happyDogImg = loadImage("images/dogImg.png");
  dogImg = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);

  dog = createSprite(250,250,25,25);
  dog.addImage("dog", dogImg);

  //happyDog = createSprite(250,250,25,25);
  dog.addImage("happyDogImg", happyDogImg);

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}

function draw() {  
background(46, 139, 87);

if (keyIsDown(UP_ARROW)){
  writeStock(foodS);
  dog.changeAnimation("happyDogImg");
}
  drawSprites();
}


function readStock(data) {

  foodS=data.val();

}


function writeStock(x){

  if (x <= 0) {

    x = 0;
  }
  else {
    x = x - 1
  }
   
  database.ref('/'). update({
    Food:x
  })
}



