//функциональный стиль ООП
function Animal() {
  foodAmount = 50

  formatFoodAmount = function () {
    return `${foodAmount} гр.`
  }

  this.feed = function () {
    return `Насыпаем в миску ${formatFoodAmount()} корма.`
  }

  this.dailyNorm = function (amount) {
    if (!arguments.length) return foodAmount
    if (amount < 50) {
      throw new Error('Дневная норма не должна быть меньше 50 гр.')
    }
    if (amount > 500) {
      throw new Error('Дневная норма не должна быть больше 500 гр.')
    }
    foodAmount = amount
    return foodAmount
  }
}

function Cat() {
  Animal.apply(this, arguments)

  this.stroke = function () {
    console.log('Гладим кота.')
    return this
  }

  //расширяем метод родителя
  let animalFeed = this.feed
  this.feed = function () {
    console.log(`${animalFeed.call(this)} \nКот доволен ^_^`)
    return this
  }
}

const Vasya = new Cat()

Vasya.feed().stroke()
