//прототипный стиль ООП
function Cat(name) {
  this.name = name
  this._foodAmount = 50
}

Cat.prototype._formatFoodAmount = function () {
  return `${this._foodAmount} гр.`
}

Cat.prototype.feed = function () {
  return `Насыпаем в миску ${this._formatFoodAmount()} корма.`
}

Cat.prototype.dailyNorm = function (amount) {
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

const Vasya = new Cat('Vasya')

console.log(Vasya.feed())
