function Cat(name) {
  this.name = name
  var foodAmount = 50

  function formatFoodAmount() {
    return foodAmount + 'гр.'
  }

  this.feed = function () {
    return 'Насыпаем в миску ' + formatFoodAmount() + ' корма.'
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

var cat = new Cat('Vasya')

cat.dailyNorm(100)
console.log(cat.feed())
