interface Entityable {
	identify(): string
	canEnter(): boolean
	shouldPay(): boolean
	pay(): number
}

export default Entityable
