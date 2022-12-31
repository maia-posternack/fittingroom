function createItem(p,b,l,s,i,ix,iy,isx,isy) {
  return {
    //properties:
    price: parseInt(p),
    brand: b,
    link: l,
    size: s,
    imageData: i,
    imageX: ix,
    imageY: iy,
    imageSizeX: isx,
    imageSizeY: isy,
    show: function() {
      image(this.imageData,this.imageX,this.imageY,this.imageSizeX,this.imageSizeY);
      textSize(20);
      textFont('Lustria');
      text("Price: $" + this.price.toString(), this.imageX, this.imageY + this.imageSizeY + 25);
      text("Brand: " + this.brand.toString(), this.imageX, this.imageY + this.imageSizeY + 50);
      text("Link: " + this.link.toString(), this.imageX, this.imageY + this.imageSizeY + 75);
      text("Size: " + this.size.toString(), this.imageX, this.imageY + this.imageSizeY + 100);
    }
  }
}
