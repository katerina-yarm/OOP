//functional OOP style
function Animal() {
  var foodAmount = 50
  var self = this

  formatFoodAmount = function (foodAmount) {
    return foodAmount + 'гр.'
  }

  this.dailyNorm = function (amount) {
    if (!arguments.length) return formatFoodAmount(foodAmount)
    if (amount < 50) {
      throw new Error('Дневная норма не должна быть меньше 50 гр.')
    }
    if (amount > 500) {
      throw new Error('Дневная норма не должна быть больше 500 гр.')
    }
    foodAmount = amount
    return formatFoodAmount(foodAmount)
  }

  this.feed = function () {
    return 'Насыпаем в миску ' + self.dailyNorm() + ' корма.'
  }
}

function Cat() {
  Animal.apply(this, arguments)

  this.stroke = function () {
    console.log('Гладим кота.')
    return this
  }

  var animalFeed = this.feed
  this.feed = function () {
    console.log(animalFeed() + '\nКот доволен ^_^')
    return this
  }
}

var cat = new Cat()

cat.dailyNorm(100)
cat.feed().stroke()
