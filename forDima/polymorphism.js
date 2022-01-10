function Figure(type) {
  this.type = type
}

Figure.prototype.draw = function () {
  const drawing = `I'm drawing ${this.type}.`
  return drawing
}

Figure.prototype.calculateArea = function () {
  return `${this.type} area is`
}

function Triangle(type, a, h) {
  this.type = type
  this.a = a
  this.h = h
}

function Сircle(type, r) {
  this.type = type
  this.r = r
}

function Square(type, a) {
  this.type = type
  this.a = a
}

Triangle.prototype = Object.create(Figure.prototype)
Сircle.prototype = Object.create(Figure.prototype)
Square.prototype = Object.create(Figure.prototype)

Triangle.prototype.constructor = Triangle
Сircle.prototype.constructor = Сircle
Square.prototype.constructor = Square

Triangle.prototype.calculateArea = function () {
  return `${Figure.prototype.calculateArea.apply(this)} ${0.5 * this.a * this.h}.`
}
Сircle.prototype.calculateArea = function () {
  return `${Figure.prototype.calculateArea.apply(this)} ${Math.pow(this.r, 2) * Math.PI}.`
}
Square.prototype.calculateArea = function () {
  return `${Figure.prototype.calculateArea.apply(this)} ${Math.pow(this.a, 2)}.`
}

var triangle = new Triangle('Triangle', 10, 5)
var circle = new Сircle('Circle', 3)
var square = new Square('Square', 2)

console.log(triangle.calculateArea(), triangle.draw())
console.log(circle.calculateArea(), circle.draw())
console.log(square.calculateArea(), square.draw())
