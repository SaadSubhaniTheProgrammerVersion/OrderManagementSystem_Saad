export interface Order {
    order_id: string,
    user: string,
    products: Array<string>,
    shipping_address: string,
    cost:number,
    status: string
}
