import { ItemDto } from "./ItemDto"

export class ItemRepository {
    private items: ItemDto[] = [
        {id: '1', name: 'sofa', price: 9.99},
        {id: '2', name: 'chair', price: 4.99}
    ];

    getItemById(id: string): ItemDto | undefined {
        return this.items.find(item => item.id == id);
    }
}