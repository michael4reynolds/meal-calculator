class Dish {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

class Diner {
  constructor(meal=[]) {
    this.meal = meal
    this.taxRate = .07
  }

  get meal_price() {
    return this.meal.reduce((prev, cur) => Number((prev + cur.price).toFixed(2)), 0)
  }

  get tax() {
    return Number((this.meal_price * this.taxRate).toFixed(2))
  }
}

class Total {
  constructor(diners=[]) {
    this.diners = diners
    this.tipRate = .18
  }

  bill() {
    return this.diners.reduce((prev, cur) => Number((prev + cur.meal_price).toFixed(2)), 0)
  }

  tip() {
    return Number(this.bill() * this.tipRate).toFixed(2)
  }

  splitTip() {
    return Number(this.tip() / this.diners.length).toFixed(2)
  }
}

let data = {
  diner1: new Diner([
    new Dish('appetizer', 8.01),
    new Dish('main_course', 12.02),
    new Dish('dessert', 6.00),
    new Dish('drink', 3.50)
  ]),
  diner2: new Diner([
    new Dish('main_course', 9.25),
    new Dish('drink', 1.50)
  ])
}

let diner1 = data.diner1
let diner2 = data.diner2
let total = new Total([diner1, diner2])

console.log(`Diner 1\nmeal: ${diner1.meal_price} tax: ${diner1.tax} tip: ${total.splitTip()}\n`)
console.log(`Diner 2\nmeal: ${diner2.meal_price} tax: ${diner2.tax} tip: ${total.splitTip()}\n`)

