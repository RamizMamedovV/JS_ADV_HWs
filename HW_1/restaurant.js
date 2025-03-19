// const cooks = new Map();

// cooks.set('Victor', 'Pizza');
// cooks.set('Olga', 'Sushi');
// cooks.set('Dima', 'Desserts');

const pizza = ['Margarita', 'Pepperoni'];
const sushi = ['Philadelphia', 'California'];
const desserts = ['Tiramisu', 'Cheesecake'];

const cooks = new Map();

cooks.set('Victor', pizza);
cooks.set('Olga', sushi);
cooks.set('Dima', desserts);

const customerAleksey = new Map();
customerAleksey.set( 'Alex', ['Pepperoni', 'Tiramisu']);

const customerMariya = new Map();
customerMariya.set('Mariya', ['California', 'Margarita']);

const customerIrina = new Map();
customerIrina.set('Irina', ['Cheesecake']);


const orders = new Set();

orders.add(customerAleksey);
orders.add(customerMariya);
orders.add(customerIrina);



console.log(`Victor: ${cooks.get('Victor').join(', ')}`);

console.log('Вывод всех заказов:')
orders.forEach((order) => {
    order.forEach((dishes, name) => {
      console.log(`${name}: ${dishes.join(', ')}`);
    });
  });

