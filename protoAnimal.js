//prototype OOP style
function Animal(name) {
  this.name = name
  this._foodAmount = 50
}

Animal.prototype._formatFoodAmount = function () {
  return this._foodAmount + 'гр.'
}

Animal.prototype.feed = function () {
  return 'Насыпаем в миску ' + this._formatFoodAmount() + ' корма.'
}

Animal.prototype.dailyNorm = function (amount) {
  if (!arguments.length) return this._foodAmount
  if (amount < 50) {
    throw new Error('Дневная норма не должна быть меньше 50 гр.')
  }
  if (amount > 500) {
    throw new Error('Дневная норма не должна быть больше 500 гр.')
  }
  this._foodAmount = amount
  return this._foodAmount
}

function Cat(name) {
  Animal.apply(this, arguments)
}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat

Cat.prototype.stroke = function () {
  console.log('Гладим кота.')
  return this
}

Cat.prototype.feed = function () {
  console.log(Animal.prototype.feed.apply(this) + '\nКот доволен ^_^')
  return this
}

var cat = new Cat()

cat.dailyNorm(100)
cat.feed().stroke()
