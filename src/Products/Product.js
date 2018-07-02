export default class Product {
  constructor(product) {
    this.id = Math.random().toString(36).substring(7)
    this.name = product.name 
    this.quantity = product.quantity
    this.price = product.price,
    this.taxPercent = product.taxPercent
  }
}