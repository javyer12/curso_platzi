console.log('here we go again')
// Square Code
console.group("Squeares")
// const squareSides = 5;
// console.log("the measure of the each square side is: " + squareSides + 'cm')

function squarePerimeter(sides) {
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


//staring with html comunication
//Square
function calculateSquarePerimeter() {
  const input = document.getElementById("inputSquare")
  const value = input.value
  const perimeter = squarePerimeter(value)
  document.getElementById("perimeterResult").textContent = perimeter + " cm."
}
function calculateSquareArea() {
  const input = document.getElementById("inputSquare")
  const value = input.value
  const area = squareArea(value)
  document.getElementById("areaResult").textContent = area +  " cm²"
}

//circle
function calculateCircleDiameter() {
  const input = document.getElementById("inputCircle")
  const value = input.value
  const diameter = diameterCircle(value)
  document.getElementById("diameterCircle").textContent = diameter + " cm"
}
function calculateCirclePerimeter() {
  const input = document.getElementById("inputCircle")
  const value = input.value
  const perimeter = circumferenceCircle(value)
  const data = Math.floor(perimeter)
  document.getElementById("perimeterCircle").innerHTML =  "the area is: " + data + " cm"
}
function calculateCircleArea() {
  const input = document.getElementById("inputCircle")
  const value = input.value
  const area = circumferenceCircle(value)
  const data = Math.round(area)
  document.getElementById("areaCircle").innerHTML = area + " cm², result with decimals."
  document.getElementById("areaCircle2").innerHTML = data + " cm², result rounded "
}

// triangle

function calculateTrianglePerimeter() {
  const input = document.getElementById("inputTriangle")
  const input2 = document.getElementById("inputTriangle2")
  const input3 = document.getElementById("inputTriangle3")
  const leftSide = Number(input.value)
  const rightSide = Number(input2.value)
  const base = Number(input3.value)
  if (leftSide === 0) {
    document.getElementById("trianglePerimeter").innerHTML = "Value 0 is not valid"
  } else if (rightSide === 0) {
    document.getElementById("trianglePerimeter").innerHTML = "Value 0 is not valid"
  } else if (base === 0) {
    document.getElementById("trianglePerimeter").innerHTML = "Value 0 is not valid"
  } else {
    const perimeter = trianglePerimeter(leftSide, rightSide, base)
    document.getElementById("trianglePerimeter").innerHTML = "the perimeter of your triangle is: " + perimeter + " cm."
  }
}
function calculateTriangleArea() {
  const input = document.getElementById("inputTriangle")
  const input2 = document.getElementById("inputTriangle2")
  const input3 = document.getElementById("inputTriangle3")
  if (input.value) {
    document.getElementById("triangleArea").innerHTML = "you only need two values (second and third input)"
  } else {
    const value1 = input2.value
    const value2 = input3.value
    const area = triangleArea(value1, value2)
    document.getElementById("triangleArea").innerHTML = "the area of your triangle is: "+ area + " cm"
  }
}

