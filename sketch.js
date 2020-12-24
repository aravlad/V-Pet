var dog
var happyDog
var database
var foodS
var foodStock

function preload()
{
	dogNor=loadImage("images/dogImg.png")
	dogHap=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(200, 200,30, 30)
  dog.addImage(dogNor)



  foodStock=database.ref('Food')
  foodStock.on("value", function(readStock){
     readStock = database.foodStock
  })

}


function draw() {  
  background(46, 139, 87);

  if(keyDown(UP_ARROW)){
    foodS = foodS-1
}

  if(keyWentDown(UP_ARROW)){
    
  }


  drawSprites();
  //add styles here

}



