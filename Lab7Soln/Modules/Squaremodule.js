import Shape  from './Shapemodule.js';
export class Rectangle extends Shape{
    #width;
    #height;
    constructor(_width,_height,_color){
        super(_color);
        // super.color=_color;
        this.#width=_width;
        this.#height=_height;
    }
    // set height(_height) {
    //     if (_height >= 1 && _height <= 100)
    //         this.#_height = _height;
    // }
    // get height() {
    //     return this.#_height;
    // }
    // set width(_width) {
    //     if (_width >= 1 && _width <= 100)
    //         this.#_width = _width;
    // }
    // get width() {
    //     return this.#width;
    // }
    getArea(){
        super.DrawShape();
        return `The Area of rectangle is ${this.#width*this.#height}`;
    }

}
export class square extends Rectangle {
    #x;
    constructor(_x,_color){
        super();
        // super(_x,_x,_color);
        // super.color=_color; // is properties of setters and getters are used
        this.#x=_x;
    }
    getArea(){
        // super.DrawShape();
        // return `The Area of square is ${this.width*this.width}`;
        return `the Area of sqaure ${(this.#x)*(this.#x)}`;
    }


}