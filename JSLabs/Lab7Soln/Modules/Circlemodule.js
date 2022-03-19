
import Shape from './Shapemodule.js';
export default class Circle extends Shape{
    #x;
    #y;
    #radius;
    constructor(_x,_y,_radius,_color){
        //  super.Shape(); // call the constructor of the super class
        super(_color);
        // super.color=_color;
        this.#x=_x;
        this.#y=_y;
        this.#radius=_radius;
    }
    getArea(){
        super.DrawShape();
        return `Your Circle Area is ${Math.PI*(this.#radius)*2}`
    }

}