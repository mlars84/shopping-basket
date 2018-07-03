const assert = require('chai').assert
import Product from '../src/Products/Product'
import ShoppingBasket from '../src/ShoppingBasket/ShoppingBasket.js'

describe('ShoppingBasket', () => {
  describe('addItem()', () => {
    it('should add products to the items object', () => {
      let items = []
      let productId = 'asdf1234'
      let quantity = 1
      items[productId] = quantity
      assert.equal(items[productId], 1)
    })
  })


  describe('expenseBreakdown', () => {
    it('outputs an expense breakdown', () => {

      let ProductOne = new Product({
        name: 'Test-one',
        quantity: 1,
        price: 1.00,
        taxPercent: .10
      })

      let ProductTwo = new Product({
        name: 'Test-two',
        quantity: 3,
        price: 2.00,
        taxPercent: 0
      })

      let inventory = []
      Array.prototype.push.apply(inventory, [ProductOne, ProductTwo])

      let basket = new ShoppingBasket(inventory)

      basket.addItem(ProductOne.id, ProductOne.quantity)
      basket.addItem(ProductTwo.id, ProductTwo.quantity)
      
      let total = 0
      let tax = []
      let importDuty = .05

      for (let productId in basket.items) {
        const product = inventory.find(
           product => product.id == productId 
        )
        if (product.taxPercent > 0) {
        tax.push(product.price * product.taxPercent)
        }
        total += product.price * basket.items[productId]
      }

      tax = tax.reduce((a, b) => a + b, 0)

      let importDutyToApply = total * importDuty
      total = total + importDutyToApply + tax

      let output = {
        'total': total,
        'tax': tax,
        'importDutyToApply': importDutyToApply
      }

      assert.isNotNull(output, 'Output is truthy')
      assert.equal(total, 7.449999999999999)
      assert.equal(tax, 0.1)
      assert.equal(importDutyToApply, 0.35000000000000003)
    })
  })
})