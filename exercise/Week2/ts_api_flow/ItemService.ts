import { ItemRepository } from './ItemRepository';
import { ItemDto } from './ItemDto';

export class ItemService {
    private repository = new ItemRepository();

    async getItemById(id: string): Promise<ItemDto | undefined> {
        return await this.repository.getItemById(id);
    }

    async getItems(): Promise<ItemDto[]> {
        return await this.repository.getItems();
    }

    async getOrders(userId: string): Promise<OrderDto[] | undefined> {
        return await this.repository.getOrders(userId);
    }
}