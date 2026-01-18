/*
Courier Management System
Technical Constraints:
- Node.js
- In-memory persistence
- No external APIs
- Focus on domain logic
*/

const couriers = [
  { id: "C1", name: "Amit", location: { x: 1, y: 2 }, isAvailable: true, activeOrderId: null },
  { id: "C2", name: "Neha", location: { x: 5, y: 3 }, isAvailable: true, activeOrderId: null }
];

function assignCourier(orderId) {
  const courier = couriers.find(c => c.isAvailable);
  if (!courier) {
    console.log("No courier available");
    return;
  }
  courier.isAvailable = false;
  courier.activeOrderId = orderId;
  console.log(`Courier ${courier.name} assigned to order ${orderId}`);
}

function completeOrder(orderId) {
  const courier = couriers.find(c => c.activeOrderId === orderId);
  if (!courier) return;
  courier.isAvailable = true;
  courier.activeOrderId = null;
  console.log(`Order ${orderId} completed`);
}

// Demo
assignCourier("O1");
assignCourier("O2");
completeOrder("O1");
assignCourier("O2");
