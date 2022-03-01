let elMyMoney = document.querySelector('.result__money');
let elBtnPluseOrMinuse = document.querySelectorAll('#main__product-btn');
let elCounter = document.querySelectorAll('.counter');

let myMoney = 100000000000;
elMyMoney.innerHTML = `$ ${myMoney}`;

// ALL-products:
let product = {
    cocaCola: {
        name: 'Coca Cola',
        price: 2,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    bigBurger: {
        name: 'Big Mac',
        price: 5,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    lavash: {
        name: 'Big Lavash',
        price: 8,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    bellisimoPizza: {
        name: 'Bellisimo PIZZA',
        price: 12,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    plov: {
        name: 'Plov of Beshqozon',
        price: 20,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    lobsterDinner: {
        name: 'Lobster Dinner',
        price: 35,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    cap: {
        name: 'Cap',
        price: 40,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    nikeShoes: {
        name: 'Nike Shoes',
        price: 50,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    palmAngels: {
        name: 'Palm Angels',
        price: 60,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    skate: {
        name: 'Skate',
        price: 65,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    roller: {
        name: 'Roller',
        price: 80,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    bike: {
        name: 'Bike',
        price: 100,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    smartWatch: {
        name: 'Apple Smart Watch',
        price: 150,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    handClock: {
        name: 'Hand Clock',
        price: 200,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    airpods: {
        name: 'Aplle Airpods',
        price: 250,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    tennisBall: {
        name: 'Tennis Ball',
        price: 400,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    fifaBall: {
        name: 'Nike Team FIFA ball',
        price: 500,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    basketball: {
        name: 'NBA Team',
        price: 1000,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    iphoneProMax: {
        name: 'Iphone 13 Pro max',
        price: 80,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    carJentra: {
        name: 'Jentra',
        price: 13000,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    carMalibu: {
        name: 'Malibu 2 TURBO',
        price: 20000,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    plane: {
        name: 'PLANE',
        price: 200000000,
        amount: 0,
        get summ() {
            return this.price * this.amount
        },

    },

    helicopter: {
        name: 'HELICOPTER',
        price: 300000000,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    villa: {
        name: 'VILLA',
        price: 1000000000,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    }

}

// BUTTONS + -
for (let i = 0; i < elBtnPluseOrMinuse.length; i++) {
    elBtnPluseOrMinuse[i].addEventListener('click', function () {
        buyOrSell(this);
    })
}

// + i -
function buyOrSell(element) {
    const productID = element.closest('.main__product').getAttribute('id');;
    const count = element.closest('.main__product').querySelector('.counter');
    const action = element.getAttribute('data-symbol') // "+" or "-"
    const productAmount = product[productID].amount

    if (action == '+' && productAmount < 50) {
        if (myMoney == 0) return alert("Pulingiz yo'qku!!!")

        product[productID].amount++
        buyProduct(product[productID].price)
    }

    else if (action == '-' && productAmount > 0) {
        product[productID].amount--
        sellProduct(product[productID].price)
    }

    count.innerHTML = product[productID].amount;
}

function buyProduct(price) {
    myMoney = (myMoney - price)
    elMyMoney.innerHTML = `$ ${myMoney}`
}

function sellProduct(price) {
    myMoney = (myMoney + price)
    elMyMoney.innerHTML = `$ ${myMoney}`
}