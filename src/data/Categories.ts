class Category {
    title;
    color;
    expense;

    constructor(title: string, color: string, expense: boolean){
        this.title = title;
        this.color = color;
        this.expense = expense;
    }
}

type CategoriesType = {
    [T: string]: Category
}

export const Categories:CategoriesType = {
    food: new Category('Food', 'blue', true),
    house: new Category('House', 'brown', true),
    salary: new Category('Salary', 'green', false)
}