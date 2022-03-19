export default class Shape{
    #color;
    constructor(_color){
        this.#color=_color;
    }
    // set color(_color) {
    //     if (_color.trim().length >= 1)
    //          this.#color = _color;
    // }
    // get color() {
    //     return this.#color;
    // }
    DrawShape() {
        console.log(`The Color value is ${this.#color}`);
    }
}
