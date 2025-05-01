const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

function getTimeOrder() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(10);
    return (Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)) * 1000;
}

async function processOrder(order) {
    // TODO: Simular la preparación del pedido usando setTimeout y Promise
    const timeOrder = getTimeOrder();
    console.log(timeOrder);
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), timeOrder);
    });
    // TODO: Actualizar el estado del pedido a "Completado"
    promesa.then(result => {
        if(result){
            updateOrderStatus(order, "Completado")
        }
    });
}