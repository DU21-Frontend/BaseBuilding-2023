export class Product {
  title: string
  price: number

  constructor() {
    this.title = 'My face not my heart'
    this.price = 500
  }

  getTitle = () => this.title

  getPrice = () => this.price
}

export class ProxyProduct {
  product = new Product()

  getPrice = () => {
    const product = new Product()
    const price = product.getPrice()
    const salePercent = 0.5

    return price * salePercent
  }
}
