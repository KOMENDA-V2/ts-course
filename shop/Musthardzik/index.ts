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
  constructor () {}

    addItem(product: Product) {
      this.items.push(product);
      this.totalPrice += product.price * product.quantity
      console.log(`x ${product.quantity} ${product.name} has been added to your cart!`)
    }

    removeItem(product: Product) {
      this.items.push(product);
      this.totalPrice -= product.price * product.quantity;
      console.log(`x ${product.quantity} ${product.name} has been removed from your cart!`)
    }

    getItemList() {
      
    }
}

class Shop {
    constructor(
    ) {}

    
}

let milk = new Product("Milk", 2.99, 30);
let eggs = new Product("Eggs", 9.99, 10);
let chocolate = new Product("Chocolate", 12.99, 20);