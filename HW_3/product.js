class Product {

    array = [];

    constructor(imgSource, id) {
        this.imgSource = imgSource;
        this.id = id;
    }
    createProduct (num, imgSource) {
        for (let i = 0; i < num; i++) {
            this.array[i] = new Product(imgSource, i);
            
        }
        return this.array;
    }
}
