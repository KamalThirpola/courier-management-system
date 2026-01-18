/*
Courier Management System
Technical Constraints:
- Node.js
- In-memory persistence
- No external APIs
- Focus on domain logic
*/
const { findNearestCourier } = require("./assignment");
const couriers = [
  { id: "C1", name: "Amit", location: { x: 1, y: 2 }, isAvailable: true, activeOrderId: null },
  { id: "C2", name: "Neha", location: { x: 5, y: 3 }, isAvailable: true, activeOrderId: null }
];

function createOrder(order) {
  const courier = findNearestCourier(order, couriers);

  if (!courier) {
    console.log("Order unassigned: No eligible courier available");
    return {
      status: "UNASSIGNED",
      reason: "No eligible courier available within distance constraints"
    };
  }

  courier.isAvailable = false;
  courier.activeOrderId = order.id;

  console.log(`Courier ${courier.name} assigned to order ${order.id}`);
  return { status: "ASSIGNED", courierId: courier.id };
}

const order = {
  id: "O101",
  location: { x: 2, y: 3 },
  type: "EXPRESS"
};

createOrder(order);
