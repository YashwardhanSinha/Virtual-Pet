//Create variables here
var dog; 
var happyDog
var database;
var foodS; 
var foodStock;

function preload()
{
  //load images here
  happyDog.loadImage("images/dogImg1.png");
  dog.loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(500, 500);

  dog = createSprite(25,25,250,250);
  happyDog = createSprite(25,25,250,250);
  
  database = firebase.database();
  foodStock-database.ref("Food");
  foodStock.on("value", readStock);
}

function draw() {  
background(46, 139, 87);

if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
}


function readStock(data) {
  foodS=data.val();
}


function writeStock(x){
   
  database.ref('/'). update({
    Food:x
  })
}



