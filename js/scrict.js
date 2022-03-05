let elMyMoney = document.querySelector('.result__money');
let elBtnPluseOrMinuse = document.querySelectorAll('#main__product-btn');
let elCounter = document.querySelectorAll('.counter');

// RECEIPT:
let elReceiptContainer = document.querySelector('.receipt__container');
let elProductTotal = document.querySelector('.products__total');
// let elTotalBox = document.querySelector('.total__box');
let elResultTotalPrice = document.querySelector('.total__price')

let myMoney = 100000000000;
elMyMoney.innerHTML = `$ ${(new Intl.NumberFormat().format(myMoney))}`;

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
        name: 'Beshqozon Plov ',
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
        name: 'Smart Watch',
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
        name: 'FIFA ball',
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
        name: 'Iphone 13Pro M',
        price: 1300,
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
        name: 'Plane',
        price: 200000000,
        amount: 0,
        get summ() {
            return this.price * this.amount
        },

    },

    helicopter: {
        name: 'Helicopter',
        price: 300000000,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    },

    villa: {
        name: 'Villa',
        price: 1000000000,
        amount: 0,
        get summ() {
            return this.price * this.amount
        }
    }
}

const order = {
    products: {
        cocaCola: 0,
        bigBurger: 0,
        lavash: 0,
        bellisimoPizza: 0,
        plov: 0,
        lobsterDinner: 0,
        cap: 0,
        nikeShoes: 0,
        palmAngels: 0,
        skate: 0,
        roller: 0,
        bike: 0,
        smartWatch: 0,
        handClock: 0,
        airpods: 0,
        tennisBall: 0,
        fifaBall: 0,
        basketball: 0,
        iphoneProMax: 0,
        carJentra: 0,
        carMalibu: 0,
        plane: 0,
        helicopter: 0,
        villa: 0
    },

    get total() {
        return this.products.cocaCola +
            this.products.bigBurger +
            this.products.lavash +
            this.products.bellisimoPizza +
            this.products.plov +
            this.products.lobsterDinner +
            this.products.cap +
            this.products.nikeShoes +
            this.products.palmAngels +
            this.products.skate +
            this.products.roller +
            this.products.bike +
            this.products.smartWatch +
            this.products.handClock +
            this.products.airpods +
            this.products.tennisBall +
            this.products.fifaBall +
            this.products.basketball +
            this.products.iphoneProMax +
            this.products.carJentra +
            this.products.carMalibu +
            this.products.plane +
            this.products.helicopter +
            this.products.villa;
    }
}

// BUTTONS + -
for (let i = 0; i < elBtnPluseOrMinuse.length; i++) {
    elBtnPluseOrMinuse[i].addEventListener('click', function () {
        buyOrSell(this);
    })
}

// Calculate order price
function calculateOrderPrice() {
    order.products.cocaCola = product.cocaCola.summ;
    order.products.bigBurger = product.bigBurger.summ;
    order.products.lavash = product.lavash.summ;
    order.products.bellisimoPizza = product.bellisimoPizza.summ;
    order.products.plov = product.plov.summ;
    order.products.lobsterDinner = product.lobsterDinner.summ;
    order.products.cap = product.cap.summ;
    order.products.nikeShoes = product.nikeShoes.summ;
    order.products.palmAngels = product.palmAngels.summ;
    order.products.skate = product.skate.summ;
    order.products.roller = product.roller.summ;
    order.products.bike = product.bike.summ;
    order.products.smartWatch = product.smartWatch.summ;
    order.products.handClock = product.handClock.summ;
    order.products.airpods = product.airpods.summ;
    order.products.tennisBall = product.tennisBall.summ;
    order.products.fifaBall = product.fifaBall.summ;
    order.products.basketball = product.basketball.summ;
    order.products.iphoneProMax = product.iphoneProMax.summ;
    order.products.carJentra = product.carJentra.summ;
    order.products.carMalibu = product.carMalibu.summ;
    order.products.plane = product.plane.summ;
    order.products.helicopter = product.helicopter.summ;
    order.products.villa = product.villa.summ;
}

// Render order price:
function renderOrderPrice() {
    elResultTotalPrice.innerHTML = `$${order.total}`;
}

// + i -
function buyOrSell(element) {
    const productID = element.closest('.main__product').getAttribute('id');
    const count = element.closest('.main__product').querySelector('.counter');
    const action = element.getAttribute('data-symbol') // "+" or "-"
    const productAmount = product[productID].amount;
    const productName = product[productID].name;
    const productPrice = product[productID].price;

    if (action == '+' && productAmount < 100) {
        if (myMoney == 0) return alert("Pulingiz yo'qku!!!");

        product[productID].amount++;
        buyProduct(product[productID].price);

        calculateOrderPrice();
        renderOrderPrice();

        addProductToReceipt(
            productID,
            productName,
            product[productID].amount,
            productPrice,
        )
    }

    else if (action == '-' && productAmount > 0) {
        product[productID].amount--;
        sellProduct(product[productID].price);

        calculateOrderPrice();
        renderOrderPrice();

        removeProductToReceipt(
            productID,
            product[productID].amount,
            productPrice,
        );
    }

    count.innerHTML = product[productID].amount;
}

function buyProduct(price) {
    myMoney = (myMoney - price);
    elMyMoney.innerHTML = `$ ${(new Intl.NumberFormat().format(myMoney))}`;
}

function sellProduct(price) {
    myMoney = (myMoney + price);
    elMyMoney.innerHTML = `$ ${(new Intl.NumberFormat().format(myMoney))}`;
}

function addProductToReceipt(id, name, amount, price) {
    // Receipt 
    elReceiptContainer.style.display = 'block';

    const isAlreadyInReceipt = elProductTotal.querySelector(`[data-product-id=${id}]`);
    if (isAlreadyInReceipt) {
        isAlreadyInReceipt.querySelector(".product__counterEnd").innerHTML = `x${amount}`;
        isAlreadyInReceipt.querySelector(".product__price").innerHTML = `$${price}`;
        return
    }

    // All 'li'
    let elProductsBoxLi = document.createElement('li');
    elProductsBoxLi.setAttribute('class', 'product__box-C-P');
    elProductsBoxLi.setAttribute('data-product-id', id);
    elProductTotal.appendChild(elProductsBoxLi);

    // Elements inside 'li':
    let elProductName = document.createElement('p');
    elProductName.setAttribute('class', 'product__name');
    elProductsBoxLi.appendChild(elProductName);
    elProductName.innerHTML = name;

    let elProductCounter = document.createElement('p');
    elProductCounter.setAttribute('class', 'product__counterEnd');
    elProductsBoxLi.appendChild(elProductCounter);
    elProductCounter.innerHTML = `x${amount}`;

    let elProductPrice = document.createElement('p');
    elProductPrice.setAttribute('class', 'product__price');
    elProductsBoxLi.appendChild(elProductPrice);
    elProductPrice.innerHTML = `$${price}`;

};

function removeProductToReceipt(id, amount, price) {

    const isAlreadyInReceipt = elProductTotal.querySelector(`[data-product-id=${id}]`)
    if (isAlreadyInReceipt) {
        isAlreadyInReceipt.querySelector(".product__counterEnd").innerHTML = `x${amount}`
        isAlreadyInReceipt.querySelector(".product__price").innerHTML = `$${price}`
        return
    }
}