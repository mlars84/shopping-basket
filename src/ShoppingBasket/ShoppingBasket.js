export default class ShoppingBasket {
  constructor(inventory) {
    this.items = {}
    this.inventory = inventory
  }

  addItem(productId, quantity = 1) {
    this.items[productId] = quantity
  }

  expenseBreakdown() {
    let total = 0
    let tax = []
    let importDuty = .05

    for (let productId in this.items) {
      const product = this.inventory.products.find(
        product => product.id == productId 
      )
      if (product.taxPercent > 0) {
        tax.push(product.price * product.taxPercent)
      }
      total += product.price * this.items[productId]
    }

    tax = tax.reduce((a, b) => a + b, 0)

    let importDutyToApply = total * importDuty
    total = total + importDutyToApply + tax

    let output = {
      'total': total,
      'tax': tax,
      'importDutyToApply': importDutyToApply
    }

    return output
  }
}