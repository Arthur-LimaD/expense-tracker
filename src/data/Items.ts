export class Item {
    date;
    category;
    title;
    value;

    constructor(date: Date, category: string, title: string, value: number){
        this.date = date;
        this.category = category;
        this.title = title;
        this.value = value
    }
}

export const Items: Item[] = [
    new Item(new Date(2022, 9, 1), 'food', 'Burger King', 230),
    new Item(new Date(2022, 9, 5), 'house', 'Aluguel', 1500),
    new Item(new Date(2022, 10, 7), 'salary', 'Salário Pika Fi', 1000),
    new Item(new Date(2022, 10, 10), 'house', 'Teste pika dms', 10),
    new Item(new Date(2022, 10, 1), 'food', 'Burger King', 230),
]