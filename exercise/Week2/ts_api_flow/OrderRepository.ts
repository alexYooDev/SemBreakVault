import { OrderDto } from "./OrderDto";

export class OrderRepository {
    private _orders: OrderDto[] = [
        {id: "o1", userId: "u1", itemId: "i1"},
        {id: "o2", userId: "u1", itemId: "i2"},
        {id: "o3", userId: "u2", itemId: "i1"}
    ];

    getOrders(userId: string): OrderDto[] {
        return this._orders.filter(order => order.userId == userId);
    }
    
    getItemDetail(itemId: string): OrderDto[] {
        return this._orders.filter(order => order.itemId == itemId);
    }
}