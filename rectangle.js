class Rectangle{
    x;
    y;
    width;
    height;

    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width =width;
        this.height = height;

    }
    getX(){
        return this.x
    }

    getY(){
        return this.y
    }
    getArea(){
        return this.width*this.height
    }
    getPerimeter(){
        return 2*(this.width+this.height)
    }
    getRandomHex() {
        return Math.floor(Math.random() * 255);
    }
    getRandomColor() {
        let red = this.getRandomHex();
        let green = this.getRandomHex();
        let blue = this.getRandomHex();
        return "rgb(" + red + "," + blue + "," + green + ")";
    }

}