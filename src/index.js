import ShoppingBasket from './ShoppingBasket/ShoppingBasket'
import Inventory from './Inventory/Inventory'
import Product from './Products/Product'

// Shopping Basket 1:
// 1 16lb bag of Skittles: 16.00
let skittles = new Product({
  name: '16lb bag of Skittles',
  quantity: 1,
  price: 16.00,
  taxPercent: 0
})

// 1 Walkman at 99.99
let walkman = new Product({
  name: 'walkman',
  quantity: 1,
  price: 99.99,
  taxPercent: .10
})

// 1 bag of microwave Popcorn: 0.99
let popcorn = new Product({
  name: 'microwave Popcorn',
  quantity: 1,
  price: 0.99,
  taxPercent: 0
})

let inventoryOne = new Inventory([
  walkman,
  skittles,
  popcorn
])

let basketOne = new ShoppingBasket(inventoryOne)

basketOne.addItem(walkman.id, walkman.quantity)
basketOne.addItem(skittles.id, skittles.quantity)
basketOne.addItem(popcorn.id, popcorn.quantity)

process.stdout.write(
  `\n${skittles.quantity} ${skittles.name} at ${skittles.price}\n` +
  `${walkman.quantity} ${walkman.name} at ${walkman.price}\n` +
  `${popcorn.quantity} ${popcorn.name} at ${popcorn.price}\n` +
  `Sales Taxes: ${round(basketOne.expenseBreakdown().tax)}\n` +
  `Import Duty: ${round(basketOne.expenseBreakdown().importDutyToApply)}\n` +
  `Total: ${round(basketOne.expenseBreakdown().total)}\n`
)




// Shopping Basket 2:
// 1 imported bag of Vanilla-Hazelnut Coffee at 11.00
let coffee = new Product({
  name: 'imported Vanilla-Hazelnut Coffee',
  quantity: 1,
  price: 11.55,
  taxPercent: 0
})

// 1 Imported Vespa: 17,251.5
let vespa = new Product({
  name: 'Imported Vespa',
  quantity: 1,
  price: 17251.50,
  taxPercent: .10
})

let inventoryTwo = new Inventory([
  coffee,
  vespa
])

let basketTwo = new ShoppingBasket(inventoryTwo)

basketTwo.addItem(coffee.id, coffee.quantity)
basketTwo.addItem(vespa.id, vespa.quantity)

process.stdout.write(
  `\n\n${coffee.quantity} ${coffee.name} at ${coffee.price}\n` +
  `${vespa.quantity} ${vespa.name} at ${vespa.price}\n` +
  `Sales Taxes: ${round(basketTwo.expenseBreakdown().tax)}\n` +
  `Import Duty: ${round(basketTwo.expenseBreakdown().importDutyToApply)}\n` +
  `Total: ${round(basketTwo.expenseBreakdown().total)}\n`
)




// Shopping Basket 3:
// 1 imported crate of Almond Snickers at 79.79
let almondSnickers = new Product({
  name: 'imported crate of Almond Snickers',
  quantity: 1, 
  price: 79.79,
  taxPercent: 0
})

// 1 Discman at 60.50
let discman = new Product({
  name: 'Discman',
  quantity: 1,
  price: 60.50,
  taxPercent: .10
})

// 1 Imported Bottle of Wine at 11.50
let wine = new Product({
  name: 'Imported Bottle of Wine',
  quantity: 1,
  price: 11.50,
  taxPercent: .10
})

// 1 300# bag of Fair-Trade Coffee at 997.99
let fairTradeCoffee = new Product({
  name: '300# bag of Fair-Trade Coffee',
  quantity: 1,
  price: 997.99,
  taxPercent: 0
})

let inventoryThree = new Inventory([
  almondSnickers,
  discman,
  wine,
  fairTradeCoffee
])

let basketThree = new ShoppingBasket(inventoryThree)

basketThree.addItem(almondSnickers.id, almondSnickers.quantity)
basketThree.addItem(discman.id, discman.quantity)
basketThree.addItem(wine.id, wine.quantity)
basketThree.addItem(fairTradeCoffee.id, fairTradeCoffee.quantity)

process.stdout.write(
  `\n\n${almondSnickers.quantity} ${almondSnickers.name} at ${almondSnickers.price}\n` +
  `${discman.quantity} ${discman.name} at ${discman.price}\n` +
  `${wine.quantity} ${wine.name} at ${wine.price}\n` +
  `${fairTradeCoffee.quantity} ${fairTradeCoffee.name} at ${fairTradeCoffee.price}\n` +
  `Sales Taxes: ${round(basketThree.expenseBreakdown().tax)}\n` +
  `Import Duty: ${round(basketThree.expenseBreakdown().importDutyToApply)}\n` +
  `Total: ${round(basketThree.expenseBreakdown().total)}\n\n`
)

function round (num) {
  return Math.round(num * 100) / 100
}
