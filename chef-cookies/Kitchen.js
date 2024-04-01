const { Chocolate, Sweet, Strawberry } = require("./Cookie");

class Kitchen {
  constructor(containers) {
    this.containers = containers;
  }
  showCookies() {
    // menampilkan cookies
    console.log("Cookies in container:");
    if (this.containers.length > 0) {
      this.containers.forEach((container) => {
        const { id, name, price, isSweet } = container;
        if (isSweet) {
          console.log(`${id}. [X] ${name} - Rp. ${price}`);
        } else {
          console.log(`${id}. [ ] ${name} - Rp. ${price}`);
        }
      });
    } else {
      console.log("Cookies empty");
    }
  }

  bake(name, price, type) {
    // menambahkan cookies
    let ingredients = [];
    let isSweet = false;
    let id;
    if (this.containers.length === 0) id = 1;

    switch (type) {
      case "Chocolate":
        this.containers.push(
          new Chocolate(id, name, price, ingredients, type, isSweet)
        );
        break;

      case "Sweet":
        this.containers.push(
          new Sweet(id, name, price, ingredients, type, isSweet)
        );
        break;

      case "Strawberry":
        this.containers.push(
          new Strawberry(id, name, price, ingredients, type, isSweet)
        );
        break;
    }
  }

  eat(id) {
    // menghapus cookies
    this.containers = this.containers.filter(
      (container) => container.id !== id
    );
  }

  addSugar(id) {
    // mengubah cookies
    this.containers = this.containers.map((container) => {
      if (container.id === id) {
        container.isSweet = true;
      }
    });
  }
}

module.exports = { Kitchen };