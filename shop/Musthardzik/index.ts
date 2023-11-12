class Product {
  constructor(
    public name: string,
    public price: number,
    public quantity: number,
  ) {}
}

class ShoppingCart {
  public items: Product[] = [];
  public totalPrice: number = 0;
  constructor() {}

  addProduct(product: Product) {
    this.items.push(product);
    this.totalPrice += product.price * product.quantity
    console.log(`${product.quantity} products of ${product.name} has been added.`)
  }

  getTotalPrice() {
    console.log(`Total price of all products in cart is ${this.totalPrice}$`)
  }

  getDetails() {
    if (this.items.length === 0) {
      console.log(`Cart is empty.`)
    }
    this.items.forEach(product => console.log(`x${product.quantity} of ${product.name} equals ${product.price}$`))
  }

}

class Shop {
  public stock: Product[];
  constructor() {}

  addProductToStock(products: Product) {
    this.stock.push(products)
  }

  createShoppingCart() {
    
  }

  addProductToCart() {

  }

  getTotalOfCart(shoppingCart: ShoppingCart) {
    shoppingCart.getTotalPrice();
  }

  displayCartDetails(shoppingCart: ShoppingCart) {
    shoppingCart.getDetails();
  }
}
