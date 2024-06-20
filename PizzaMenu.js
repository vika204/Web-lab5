let sum = 0;
let countOfZamovlennia = 0;
let listOfAllProducts = [
    {
        id:1,
        icon:'assets/images/pizza_7.jpg',
        title: "Імпреза",
        type: 'М’ясна піца',
        quantity: 1,
        content: {
            meat: ['балик', 'салямі'],
            chicken: ['куриця'],
            cheese: ['сир моцарелла', 'сир рокфорд'],
            pineapple: ['ананаси'],
            additional: ['томатна паста', 'петрушка']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 99
        },
        big_size:{
            weight: 660,
            size: 40,
            price: 169
        },
        is_new:true,
        is_popular:true

    },
    {
        id:2,
        icon:'assets/images/pizza_2.jpg',
        title: "BBQ",
        type: 'М’ясна піца',
        quantity: 1,
        content: {
            meat: ['мисливські ковбаски', 'ковбаски папероні', 'шинка'],
            cheese: ['сир домашній'],
            mushroom: ['шампінйони'],
            additional: ['петрушка', 'оливки']
        },
        small_size:{
            weight: 460,
            size: 30,
            price: 139
        },
        big_size:{
            weight: 840,
            size: 40,
            price: 199
        },
        is_popular:true
    },
    {
        id:3,
        icon:'assets/images/pizza_1.jpg',
        title: "Міксовий поло",
        type: 'М’ясна піца',
        quantity: 1,
        content: {
            meat: ['вітчина', 'куриця копчена'],
            cheese: ['сир моцарелла'],
            pineapple: ['ананаси'],
            additional: ['кукурудза', 'петрушка', 'соус томатний']
        },
        small_size:{
            weight: 430,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 179
        }
    },
    {
        id:4,
        icon:'assets/images/pizza_5.jpg',
        title: "Сициліано",
        type: 'М’ясна піца',
        quantity: 1,
        content: {
            meat: ['вітчина', 'салямі'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            additional: ['перець болгарський',  'соус томатний']
        },
        small_size:{
            weight: 450,
            size: 30,
            price: 111
        },
        big_size:{
            weight: 790,
            size: 40,
            price: 169
        }
    },
    {
        id:17,
        icon:'assets/images/pizza_3.jpg',
        title: "Маргарита",
        type: 'Вега піца',
        quantity: 1,
        content: {
            cheese: ['сир моцарелла', 'сир домашній'],
            tomato: ['помідори'],
            additional: ['базилік', 'оливкова олія', 'соус томатний']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 89
        }
    },
    {
        id:43,
        icon:'assets/images/pizza_6.jpg',
        title: "Мікс смаків",
        type: 'М’ясна піца',
        quantity: 1,
        content: {
            meat: ['ковбаски'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            pineapple: ['ананаси'],
            additional: ['цибуля кримська', 'огірки квашені', 'соус гірчичний']
        },
        small_size:{
            weight: 470,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 180
        }
    },
    {
        id:90,
        icon:'assets/images/pizza_8.jpg',
        title: "Дольче Маре",
        type: 'Морська піца',
        quantity: 1,
        content: {
            ocean: ['криветки тигрові', 'мідії', 'ікра червона', 'філе червоної риби'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        big_size:{
            weight: 845,
            size: 40,
            price: 399
        }
    },
    {
        id:6,
        icon:'assets/images/pizza_4.jpg',
        title: "Россо Густо",
        type: 'Морська піца',
        quantity: 1,
        content: {
            ocean: ['ікра червона', 'лосось копчений'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        small_size:{
            weight: 400,
            size: 30,
            price: 189
        },
        big_size:{
            weight: 700,
            size: 40,
            price: 299
        }
    }
];
let listOfMeatProducts = [
    {
        id: 1,
        icon: "assets/images/pizza_1.jpg",
        title: "Імпреза",
        type: 'М’ясна піца',
        quantity: 1,
        content: {
            meat: ['балик', 'салямі'],
            chicken: ['куриця'],
            cheese: ['сир моцарелла', 'сир рокфорд'],
            pineapple: ['ананаси'],
            additional: ['томатна паста', 'петрушка']
        },
        small_size: {
            weight: 370,
            size: 30,
            price: 99
        },
        big_size: {
            weight: 660,
            size: 40,
            price: 169
        },
        is_new: true,
        is_popular: true
    },
    {
        id:2,
        icon:'assets/images/pizza_2.jpg',
        title: "BBQ",
        type: 'М’ясна піца',
        quantity: 1,
        content: {
            meat: ['мисливські ковбаски', 'ковбаски папероні', 'шинка'],
            cheese: ['сир домашній'],
            mushroom: ['шампінйони'],
            additional: ['петрушка', 'оливки']
        },
        small_size:{
            weight: 460,
            size: 30,
            price: 139
        },
        big_size:{
            weight: 840,
            size: 40,
            price: 199
        },
        is_popular:true
    },
    {
        id:3,
        icon:'assets/images/pizza_1.jpg',
        title: "Міксовий поло",
        type: 'М’ясна піца',
        quantity: 1,
        content: {
            meat: ['вітчина', 'куриця копчена'],
            cheese: ['сир моцарелла'],
            pineapple: ['ананаси'],
            additional: ['кукурудза', 'петрушка', 'соус томатний']
        },
        small_size:{
            weight: 430,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 179
        }
    },
    {
        id:4,
        icon:'assets/images/pizza_5.jpg',
        title: "Сициліано",
        type: 'М’ясна піца',
        quantity: 1,
        content: {
            meat: ['вітчина', 'салямі'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            additional: ['перець болгарський',  'соус томатний']
        },
        small_size:{
            weight: 450,
            size: 30,
            price: 111
        },
        big_size:{
            weight: 790,
            size: 40,
            price: 169
        }
    },
];

let listOfPineapplesProducts = [];
let listOfMushroomsProducts = [];
let listOfSeafoodProducts = [];
let listOfVeganProducts = [
    {
        id:17,
        icon:'assets/images/pizza_3.jpg',
        title: "Маргарита",
        type: 'Вега піца',
        quantity: 1,
        content: {
            cheese: ['сир моцарелла', 'сир домашній'],
            tomato: ['помідори'],
            additional: ['базилік', 'оливкова олія', 'соус томатний']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 89
        }
    },
    {
        id:4,
        icon:'assets/images/pizza_5.jpg',
        title: "Сициліано",
        type: 'М’ясна піца',
        quantity: 1,
        content: {
            meat: ['вітчина', 'салямі'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            additional: ['перець болгарський',  'соус томатний']
        },
        small_size:{
            weight: 450,
            size: 30,
            price: 111
        },
        big_size:{
            weight: 790,
            size: 40,
            price: 169
        }
    }
];
let listOfBoughtPizzas = [];


document.addEventListener('DOMContentLoaded', () => {

    const storedPizzas = localStorage.getItem('boughtPizzas');
    if (storedPizzas) {
        listOfBoughtPizzas = JSON.parse(storedPizzas);

        let innerHTML = '';
        for (let i = 0; i < listOfBoughtPizzas.length; i++) {
            innerHTML += renderPizzaRight(listOfBoughtPizzas[i]);
        }
        document.querySelector(".list-of-pizzas-right").innerHTML = innerHTML;

      
        updateSum();
        updateCountOfZamovlennia();
    }

    renderListOfProducts(listOfAllProducts);

    document.querySelectorAll('.filters-btn').forEach(button => {
        button.addEventListener('click', function() {
            let isActive = this.classList.contains('filters-btn-clicked');

            document.querySelectorAll('.filters-btn').forEach(btn => {
                btn.classList.remove('filters-btn-clicked');
            });

            if (!isActive) {
                this.classList.add('filters-btn-clicked');
            }

            let listOfProductsHTML = "";
            if (this.id === 'meat-btn') {
                console.log("Meat button clicked");
                listOfProductsHTML = renderListOfProducts(listOfMeatProducts);
            } else if (this.id === 'pineapple-btn') {
                console.log("Pineapple button clicked");
                listOfProductsHTML = renderListOfProducts(listOfPineapplesProducts);
            } else if (this.id === 'mushrooms-btn') {
                console.log("Mushrooms button clicked");
                listOfProductsHTML = renderListOfProducts(listOfMushroomsProducts);
            } else if (this.id === 'seafood-btn') {
                console.log("Seafood button clicked");
                listOfProductsHTML = renderListOfProducts(listOfSeafoodProducts);
            } else if (this.id === 'vega-btn') {
                console.log("Vegan button clicked");
                listOfProductsHTML = renderListOfProducts(listOfVeganProducts);
            } else if (this.id === 'all-btn') {
                console.log("All button clicked");
                listOfProductsHTML = renderListOfProducts(listOfAllProducts);
            }

            document.querySelector(".list-of-pizzas-left").innerHTML = listOfProductsHTML;
        });
    });

    document.querySelector('.list-of-pizzas-left').addEventListener('click', function(event) {
        if (event.target && (event.target.classList.contains('buy-pizza-btn-small') || event.target.classList.contains('buy-pizza-btn-big'))) {
            const pizzaContainer = event.target.closest('.pizza-item');
            const pizzaTitle = pizzaContainer.querySelector('.pizza-name').innerText;
            const pizza = listOfAllProducts.find(p => p.title === pizzaTitle);

            const size = event.target.classList.contains('buy-pizza-btn-small') ? 'small_size' : 'big_size';
            const pizzaTitleWithSize = event.target.classList.contains('buy-pizza-btn-small') ? `${pizza.title} (Мала)` : `${pizza.title} (Велика)`;

            let pizzaExists = false;

            for (let i = 0; i < listOfBoughtPizzas.length; i++) {
                if (listOfBoughtPizzas[i].title === pizzaTitleWithSize) {
                    listOfBoughtPizzas[i].quantity++;
                    pizzaExists = true;
                    break;
                }
            }

            if (!pizzaExists) {
                const newPizza = JSON.parse(JSON.stringify(pizza));
                newPizza.size = pizza[size].size;
                newPizza.weight = pizza[size].weight;
                newPizza.price = pizza[size].price;
                newPizza.title = pizzaTitleWithSize;
                newPizza.quantity = 1;

                listOfBoughtPizzas.push(newPizza);
            }

            localStorage.setItem('boughtPizzas', JSON.stringify(listOfBoughtPizzas));

      
            let innerHTML = '';
            for (let i = 0; i < listOfBoughtPizzas.length; i++) {
                innerHTML += renderPizzaRight(listOfBoughtPizzas[i]);
            }
            document.querySelector(".list-of-pizzas-right").innerHTML = innerHTML;

          
            updateSum();
            updateCountOfZamovlennia();
        }
    });


document.querySelector('.list-of-pizzas-right').addEventListener('click', function(event) {
    if (event.target && (event.target.classList.contains('plus-btn') || event.target.classList.contains('minus-btn'))) {
        const pizzaContainer = event.target.closest('.pizza-item-right');
        const pizzaTitle = pizzaContainer.querySelector('.pizza-name-right').innerText;
        const pizza = listOfBoughtPizzas.find(p => p.title === pizzaTitle);

        if (event.target.classList.contains('plus-btn')) {
            pizza.quantity++;
        } else if (event.target.classList.contains('minus-btn')) {
            if (pizza.quantity > 1) {
                pizza.quantity--;
            } else {
                const index = listOfBoughtPizzas.findIndex(p => p.title === pizzaTitle);
                if (index !== -1) {
                    listOfBoughtPizzas.splice(index, 1);
                }
                pizzaContainer.remove();
            }
        }

        let innerHTML = '';
        for (let i = 0; i < listOfBoughtPizzas.length; i++) {
            innerHTML += renderPizzaRight(listOfBoughtPizzas[i]);
        }
        document.querySelector(".list-of-pizzas-right").innerHTML = innerHTML;
        updateSum(); 
        updateCountOfZamovlennia(); 
        localStorage.setItem('boughtPizzas', JSON.stringify(listOfBoughtPizzas));
    } else if (event.target && event.target.classList.contains('cancel-btn')) {
        const pizzaContainer = event.target.closest('.pizza-item-right');
        const pizzaTitle = pizzaContainer.querySelector('.pizza-name-right').innerText;
        const index = listOfBoughtPizzas.findIndex(p => p.title === pizzaTitle);
        if (index !== -1) {
            listOfBoughtPizzas.splice(index, 1);
            localStorage.setItem('boughtPizzas', JSON.stringify(listOfBoughtPizzas)); 
        }
        pizzaContainer.remove();
        updateSum(); 
        updateCountOfZamovlennia(); 
        localStorage.setItem('boughtPizzas', JSON.stringify(listOfBoughtPizzas));
    }
});
    
    

document.querySelector('.header-of-right-section').addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('clean')) {
        // Очищаємо listOfBoughtPizzas
        listOfBoughtPizzas = [];

          // Очищаємо Local Storage
          localStorage.removeItem('boughtPizzas');

        // Оновлюємо відображення на сторінці
        document.querySelector(".list-of-pizzas-right").innerHTML = '';

        // Оновлюємо суму і кількість замовлень
        updateSum();
        updateCountOfZamovlennia();
    }
});
    
 


});






function gatherIngredients(content) {
    let ingredients = [];
    for (let category in content) {
        ingredients = ingredients.concat(content[category].map(item => item.toString()));
    }
    return ingredients;
}

function renderListOfProducts(list) {
    let listOfProductsHTML = "";
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        let ingredients = gatherIngredients(item.content);
        const html = `
        <article class="pizza-item">
            <img class="pizza-images" src="${item.icon}" alt="Pizza Image">
            <div class="lll">
                <span class="pizza-name">
                    <h2>${item.title}</h2>
                </span>
                <p class="type">${item.type}</p>
                <p class="ingredients">${ingredients.join(', ')}</p>
                <div class="sizes" style="${item.small_size && item.big_size ? 'display: grid; grid-template-columns: 1fr 1fr;' : 'display: grid; grid-template-columns: 1fr;'}">
                    ${item.small_size ? `
                    <div class="size">
                        <span class="symbols">Ø ${item.small_size.size}</span>
                        <span class="symbols">
                            <img style="width: 9px; height: 13px; margin-right: 3px;" src="assets/images/weight.svg" alt="SVG Image">
                            ${item.small_size.weight}
                        </span>
                        <span class="price">${item.small_size.price}</span>
                        <span style="margin-bottom: 5px; margin-left: 5px;">грн.</span>
                        <button class="buy-pizza-btn-small">Купити</button>
                    </div>` : ''}
                    ${item.big_size ? `
                    <div class="size">
                        <span class="symbols">Ø ${item.big_size.size}</span>
                        <span class="symbols">
                            <img style="width: 9px; height: 13px; margin-right: 3px;" src="assets/images/weight.svg" alt="SVG Image">
                            ${item.big_size.weight}
                        </span>
                        <span class="price">${item.big_size.price}</span>
                        <span style="margin-bottom: 5px; margin-left: 5px;">грн.</span>
                        <button class="buy-pizza-btn-big">Купити</button>
                    </div>` : ''}
                </div>
            </div>
        </article>`;
        listOfProductsHTML += html;
    }
    return listOfProductsHTML;
}
function renderPizzaRight(pizza) {
    const html = `
    <article class="pizza-item-right" data-id="${pizza.id}">
        <div class="pizza-item-right-left">
            <span class="pizza-name-right">${pizza.title}</span>
            <div class="price-size-right">
                <div class="price-size-right1">
                    <span style="font-size: 14px;">Ø ${pizza.size}</span>
                </div>
                <div class="price-size-right2">
                    <img style="width: 9px; height: 13px; margin-right: 3px;" src="assets/images/weight.svg" alt="SVG Image">
                    <span style="font-size: 14px;">${pizza.weight}</span>
                </div>
            </div>
            <div class="line-right-element">
                <span class="right-cost">${pizza.price} грн</span>
                <div class="three-lines">
                    <button class="minus-btn">-</button>
                    <span class="quantity-right">${pizza.quantity}</span>
                    <button class="plus-btn">+</button>
                </div>
                <button class="cancel-btn">+</button>
            </div>
        </div>
        <div class="image-container">
            <img class="image" src="${pizza.icon}" alt="іконка піци">
        </div>
    </article>`;
    return html;
}





function updateSum() {

    const sumElement = document.querySelector('.order-summary');
    
    if (!sumElement) {
        console.error('Element with class "order-summary" not found');
        return;
    }

    sum = 0;
    listOfBoughtPizzas.forEach(pizza => {
        sum += pizza.quantity * pizza.price;
    });

    sumElement.innerHTML = `
        <span class="sum">
            Сума замовлення
            <span class="sum-cost">${sum} грн</span>
        </span>
        <div class="order-btn">
            <button class="Order">Замовити</button>
        </div>
    `;
}

function updateCountOfZamovlennia() {
    const countOfZamovlenniaElement = document.querySelector('.zamovlennia');
    
    if (!countOfZamovlenniaElement) {
        console.error('Element with class "zamovlennia" not found');
        return;
    }

    countOfZamovlennia = 0;
    listOfBoughtPizzas.forEach(pizza => {
        countOfZamovlennia += pizza.quantity;
    });

    countOfZamovlenniaElement.innerHTML = `
    <span class="zamovlennia">Замовлення
                    <span class="count-of-zamovlennia">${countOfZamovlennia}</span>
                </span>
    `;
}
function addToOrder(pizza) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(pizza);
    localStorage.setItem('orders', JSON.stringify(orders));
}