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
  public stock: Product[] = [];
  constructor() {}

  addProductToStock(products: Product) {
    this.stock.push(products)
  }

  createShoppingCart() {
    return new ShoppingCart();
  }

  addProductToCart(shoppingCart: ShoppingCart, name: string, quantity: number) {
    let product = this.stock.find(product => product.name === name);
    if (!product || product.quantity === 0) {
      console.log("There is no such product in the store");
    } else {
      if (product.quantity >= 0) {
        let sameProduct = {
          ...product
        };
        sameProduct.quantity = quantity;
        shoppingCart.addProduct(sameProduct);
        product.quantity -= quantity;
      } else {
        console.log(`There is only ${product.quantity} copies of this product available in the store`)
      }
    }
  }

  getTotalOfCart(shoppingCart: ShoppingCart) {
    shoppingCart.getTotalPrice();
  }

  displayCartDetails(shoppingCart: ShoppingCart) {
    shoppingCart.getDetails();
  }
}

const shoppingCenter = new Shop();
shoppingCenter.addProductToStock(new Product("chocolate", 12.99, 20))
shoppingCenter.addProductToStock(new Product("milk", 2.99, 30))
shoppingCenter.addProductToStock(new Product("sports magazine", 9.99, 39))
shoppingCenter.addProductToStock(new Product("banana", 8.99, 70))
shoppingCenter.addProductToStock(new Product("coca-cola", 7.99, 34))

let cart = shoppingCenter.createShoppingCart();
shoppingCenter.addProductToCart(cart, "banana", 12)
shoppingCenter.addProductToCart(cart, "chocolate", 2)
shoppingCenter.addProductToCart(cart, "sports magazine", 1)
shoppingCenter.addProductToCart(cart, "coca-cola", 3)

shoppingCenter.displayCartDetails(cart);
shoppingCenter.getTotalOfCart(cart);
