var Dish = function Dish(name, price) {
  this.name = name;
  this.price = price;
};

var Diner = function Diner(meal) {
  if ( meal === void 0 ) meal=[];

  this.meal = meal;
  this.taxRate = .07;
};

Diner.prototype.meal_price = function() {
  return this.meal.reduce(function (prev, cur) { return Number((prev + cur.price).toFixed(2)); }, 0);
};

Diner.prototype.tax = function() {
  return Number((this.meal_price() * this.taxRate).toFixed(2));
};

var Total = function Total(diners) {
  if ( diners === void 0 ) diners=[];

  this.diners = diners;
  this.tipRate = .18;
};

Total.prototype.bill = function bill() {
  return this.diners.reduce(function (prev, cur) { return Number((prev + cur.meal_price()).toFixed(2)); }, 0);
};

Total.prototype.tip = function tip() {
  return Number(this.bill() * this.tipRate).toFixed(2);
};

Total.prototype.splitTip = function splitTip() {
  return Number(this.tip() / this.diners.length).toFixed(2);
};

var data = {
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
};

var diner1 = data.diner1;
var diner2 = data.diner2;
var total = new Total([diner1, diner2]);

console.log(("Diner 1\nmeal: " + (diner1.meal_price()) + " tax: " + (diner1.tax()) + " tip: " + (total.splitTip()) + "\n"));
console.log(("Diner 2\nmeal: " + (diner2.meal_price()) + " tax: " + (diner2.tax()) + " tip: " + (total.splitTip()) + "\n"));
