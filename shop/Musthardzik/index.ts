class Product {
  constructor(
    public name: string,
    public price: number,
    public quantity: number,
  ) {}
}

class ShoppingCart {
    constructor (
        public items: string[],
        public totalPrice: number,
    ) {}

    addItem(item: Product) {

    }

    removeItem (item: Product) {

    }
}

class Shop {
    constructor(
    ) {}

    
}