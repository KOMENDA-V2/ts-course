class Product {
	constructor(public name: string, public price: number, public quantity: number) {}
}

class ShoppingCart {
	public items: Product[] = []
	public totalPrice: number = 0
	// constructor() {}
	addProduct(product: Product) {
		this.items.push(product)
		this.totalPrice += product.price * product.quantity
		console.log(`Pomyślnie dodano ${product.quantity} x ${product.name}.`)
	}
	getTotalPrice() {
		console.log(`Łączna wartość koszyka: ${this.totalPrice}zł`)
	}
	getDetails() {
		this.items.forEach(item => console.log(`${item.name} | ${item.price}zł | ${item.quantity}sztuk`))
		if (this.items.length <= 0) {
			console.log('Koszyk jest pusty')
		}
	}
}

class Shop {
	private stock: Product[] = []
	// constructor() {}
	addProductToStock(product: Product) {
		this.stock.push(product)
	}
	createShoppingCart(): ShoppingCart {
		return new ShoppingCart()
	}
	addProductToCart(shoppingCart: ShoppingCart, name: string, quantity: number) {
		let product = this.stock.find(product => product.name === name)
		if (!product || product.quantity === 0) {
			console.log(`${name} nie ma w sklepie`)
		} else {
			if (product.quantity >= quantity) {
				let copyOfProduct = { ...product }
				copyOfProduct.quantity = quantity
				shoppingCart.addProduct(copyOfProduct)
				product.quantity -= quantity
			} else {
				console.log(`Tego produktu jest tylko ${product.quantity} sztuk`)
			}
		}
	}
	removeProductFromCart(shoppingCart: ShoppingCart, name: string, quantity: number) {
		let product = shoppingCart.items.find(item => item.name === name)
		if (!product || product.quantity === 0) {
			console.log(`Nie można usunąć ${name} x ${quantity} z koszyka.`)
		} else {
			if (product.quantity >= quantity) {
				product.quantity -= quantity
				shoppingCart.totalPrice -= product.price * quantity
				console.log(`Pomyślnie usunięto ${name} x ${quantity} z koszyka`)
			}
		}
	}
	getTotalOfCart(shoppingCart: ShoppingCart) {
		shoppingCart.getTotalPrice()
	}
	displayCartDetails(shoppingCart: ShoppingCart) {
		shoppingCart.getDetails()
	}
}

const walmart = new Shop()
walmart.addProductToStock(new Product('mleko', 4, 5))
walmart.addProductToStock(new Product('chleb', 2, 5))
walmart.addProductToStock(new Product('energy drink', 6, 3))
walmart.addProductToStock(new Product('jabłko', 1, 10))

let cart = walmart.createShoppingCart()
walmart.addProductToCart(cart, 'jabłko', 10)
walmart.addProductToCart(cart, 'gruszka', 20)
walmart.addProductToCart(cart, 'chleb', 3)
walmart.removeProductFromCart(cart, 'jabłko', 5)

walmart.displayCartDetails(cart)
walmart.getTotalOfCart(cart)