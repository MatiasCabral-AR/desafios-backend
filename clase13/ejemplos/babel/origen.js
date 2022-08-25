class Color {
	constructor(red, green, blue) {
    	this.red = red;
      	this.green = green;
        this.blue = blue;
    }
  
  generateColor(){
    // this.red, this.green, this.blue = this.randomColor() ???
    return (`Random Color : \n Red : ${this.red}\n Green : ${this.green}\n Blue : ${this.blue}`)
  }
  
  randomColor() {
    return Math.floor(Math.random() * 256);
    }
}
