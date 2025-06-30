// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const order = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items.map((item) => {
      return {
        name: item.name,
        price: item.price,
      };
    }),
    totalPrice: items.reduce((total, item) => {
      return total + item.price;
    }, 0),
    status: "Menunggu",
  };

  orders.push(order);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const updateOrder = orders.find((order) => order.id === orderId);
  if (updateOrder) {
    updateOrder.status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === "Selesai")
    .reduce((sum, order) => sum + order.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const deleteOrder = orders.findIndex((order) => order.id === id);
  if (deleteOrder > -1) {
    orders.splice(deleteOrder, 1);
  }
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
