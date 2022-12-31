//Hacktrin Project
//By Maia Posternack and Juliet O'Shea

var input;
var items = [];
var pictureData;
var thisPrice;
var thisBrand;
var thisPicture;
var thisItem;

function setup() {
  itemButton = createButton("Add Item of Clothing");
  itemButton.mousePressed(addItem);
  itemButton.position(700,130);

  newButton = createButton("save");
  newButton.mousePressed(save);
  newButton.position(700,155);

  createFileInput(imageChosen, 'multiple').position(700,100);

  price = createInput();
  price.position(200,100);
  createElement('h3', 'Price:').position(100,75);

  brand = createInput();
  brand.position(200,150);
  createElement('h3', 'Brand: ').position(100,125);

  link = createInput();
  link.position(500,100);
  createElement('h3', 'Link: ').position(400,75);

  size = createInput();
  size.position(500,150);
  createElement('h3', 'Size: ').position(400,125);


  clear = createButton("Clear");
  clear.mousePressed(clearIt);
  clear.size(100,75)
  clear.position(1000, 100);

  let c=createCanvas(windowWidth*.85,windowHeight*.85).position(100,200);
}

function draw() {
  background(255);
  for (var i = 0; i < items.length; i++) {
    items[i].show();
  }
}

function addItem() {
  if (items.length < 8) {
    if (items.length >= 4) {
      items.push(createItem(price.value(), brand.value(), link.value(), size.value(), thisPicture, 100 + (275*(items.length-4)), 450, 200, 200*thisPicture.height/thisPicture.width));
    }
    else {
      items.push(createItem(price.value(), brand.value(), link.value(), size.value(), thisPicture, 100 + 275*items.length, 50, 200, 200*thisPicture.height/thisPicture.width));
    }
  }
}

function imageChosen(file) {
  if (file.type === 'image') {
    thisPicture = loadImage(file.data);
  }
}

function clearIt() {
  items = [];
}


function save()
{
  saveCanvas(c, 'newPic', 'jpg');
}
