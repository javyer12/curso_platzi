console.log('here we go again')
// Square Code
console.group("Squeares")
// const squareSides = 5;
// console.log("the measure of the each square side is: " + squareSides + 'cm')

function squarePerimeter(side) {
  return  sides * 4; 
} 
// console.log("the perimeter of the square is: " + squarePerimeter + 'cm')

function squareArea(side){
    return side * side
};
// console.log("the area of the square is: " + squareArea + 'cm²')
console.groupEnd()


// Triangle Code
console.group("Triangles")
// const sideTriangle = 6
// const sideTriangle2 = 6
// const baseTriangle = 4
// const triangleHeight = 5.5

// console.log(  //identar frase para ubicar la linea de codigo en varias lineas para no hacer tanto scroll
//     "the triangle measure is:"
//     + sideTriangle + "cm left-side,"
//     + sideTriangle2 + "cm right-side,"
//     + baseTriangle + 'cm base.'
// )
function trianglePerimeter(leftSide, rightSide,base){
  return leftSide + rightSide + base
} 
// console.log(trianglePerimeter + "cm, is the perimeter of triangle")

function triangleArea(baseTriangle, triangleHeight ) {
  return  (baseTriangle * triangleHeight ) / 2
}
// console.log(
//      "The height of the triangle is "
//      + triangleHeight 
//      + "cm, then, the triangle area is:"
//      + triangleArea 
//      + "cm"
//      )
// agrupar mensajes en la consola. con console.group
console.groupEnd()

//Circle Code
console.group('Circle')

// const radioCircle = 4

// const diameterCircle = radioCircle * 2

const PI = Math.PI

function diameterCircle(radio){
   return radio*2 
}
function circumferenceCircle(radio) {
    const diameter = diameterCircle(radio)
    return diameter * PI
}

function areaCircle(radio) {
  return (radio * radio) * PI
} 

// console.log(
//     "the radio of the  circle is:" + radioCircle + " cm,"  + "\n" 
//     + "the diameter of the circle is:" + diameterCircle + " cm,"  + "\n"  
//     + "the value of Pi is:" + PI
//     )
// console.log(
//      "so, the circumference of your circle is: " + circumferenceCircle + " cm," 
//     )
// console.log( 
//     "the area of your circle is: " + areaCircle + " cm²." 
//     )
console.groupEnd()