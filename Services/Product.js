const faker = require('faker');

class ProductsService {

    constructor() {
        this.products = [];
        this.generate();
    }

    generate() {
        const limit = 5;
        for (let index = 0; index < limit; index++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
            });
        }
    }

    create(data) {
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }

    findOne(id) {
        return this.products.find(item => item.id === id);
    }

    update(id, changes) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('product not found');
        }
        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        };
        return this.products[index];
    }
    //Otra forma de hacer el Update con el map
    // update(id, changes) {
    //     const items = this.products.map(item => items.id !== id ? item : { item, ...changes });
    //     this.products = items;
    //     return this.products;
    // }

    delete(id) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('product not found');
        }
        this.products.splice(index, 1);
        return { id };
    }

    //Otra forma de hacer el Delete con el filter
    // delete(id) {
    //     const items = this.products.filter(item => item.id !== id);
    //     this.products = items;
    //     return this.products;
    // }

}

module.exports = ProductsService;
