import Circle from './Circlemodule.js';
import {square as SquareObj,Rectangle as RectangleObj} from './Squaremodule.js';
let C= new Circle(2,3,5,"red");
let rect=new RectangleObj(7,8,"yellow");
let sq=new SquareObj(3,"blue");
var arr_OBJ=[C,sq,rect];
arr_OBJ.forEach((val,index,arr)=>{console.log(val.getArea())});