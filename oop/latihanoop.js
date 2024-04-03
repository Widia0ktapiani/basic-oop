class Cookie{
    constructor(id, nama, price, ingredients, type){
        this.id = id;
        this.nama = nama;
        this.price = price;
        this.ingredients = ingredients;
        this.type = type;
    }
}

class Chocolate extends Cookie{
    constructor(id, nama, price, ingredients, type, isSweet){
        super(id, nama, price, ingredients, type);
        this.isSweet = isSweet;
    }
}


class Sweet extends Cookie{
    constructor(id, nama, price, ingredients, type, isSweet){
        super(id, nama, price, ingredients, type);
        this.isSweet = isSweet;
    }
}

class Strawberry extends Cookie{
    constructor(id, nama, price, ingredients, type, isSweet){
        super(id, nama, price, ingredients, type);
        this.isSweet = isSweet;
    }
}

class Kitchen{
    constructor(containers){
        this.containers = containers
    }
    showCokkies(){
        //menampilkan cookies
        console.log("cookies in container: ")
        if(this.containers.length > 0){

            this.containers.forEach(container => {
                const {id, nama, price, isSweet} = container
                if (isSweet) {
                    console.log(`${id}. [x] ${nama} - Rp. ${price}`);
                } else {
                    console.log(`${id}. [ ] ${nama} - Rp. ${price}`);
                }
                
            });
        } else {
            console.log("Cookies Empty");
        }
    }

    bake(name, price, type){
        //menambahkan cokkies
        let ingredients = [];
        let isSweet = false;
        let id;
        if (this.containers.length === 0) id = 1;

        switch(type){
            case "Chocolate":
                this.containers.push(
                    new Chocolate(id, nama, price, ingredients, type, isSweet)
                );
                break;
            case "Sweet":
                this.containers.push(
                    new Sweet(id, nama, price, ingredients, type, isSweet)
                );
                break;
            case "Chocolate":
                this.containers.push(
                    new Strawberry(id, nama, price, ingredients, type, isSweet)
                );
                break;
        }

    }

    eat(id){
        //menghapus cookies
        this.containers = this.containers.filter (
            (container) => container.id !== id
        );
    }

    addSugar(id, isSweet){
        //mengubah cookies
        this.containers = this.containers.map((container) => {
            if (container.id === id) {
                container.isSweet = true;
                
            }
        });
    }
}

