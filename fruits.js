class FruitBasket {
    constructor(){
        this.fruits = [];
    }

    addItem(item) {
        this.fruits.push(item);
        console.log(`Kamu baru saja menambahkan ${item}`);
    }

    getInformation() {
        console.log(`List buah dikeranjang ${this.fruits}`);
    }

    removeLastItem(item){
        this.fruits.pop(item);
        console.log(`Kamu baru saja menghapus ${item}`);
    }
}

const fruits = new FruitBasket();
fruits.addItem("Jeruk");
fruits.addItem("Apel");
fruits.addItem("Mangga");
fruits.getInformation();
fruits.removeLastItem("Mangga");
fruits.getInformation();