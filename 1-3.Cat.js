function Cat(name) {
  this.name = name // публичное свойство
  foodAmount = 50 //приватное свойство

  //приватный метод
  function formatFoodAmount() {
    return `${foodAmount} гр.`
  }

  // публичный метод
  this.feed = function () {
    return `Насыпаем в миску ${formatFoodAmount()} корма.`
  }

  //единый геттер-сеттер
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

const Vasya = new Cat('Vasya')

console.log(Vasya.dailyNorm(100))
