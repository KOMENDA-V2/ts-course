export default interface Entityable {
    mayGetIn(): boolean,
    shouldPay(): boolean,
    identification(): string,
    fee(): number
}