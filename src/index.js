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
  {
    id: "C1",
    name: "Amit",
    location: { x: 1, y: 2 },
    isAvailable: true,
    isLocked: false,        
    activeOrderId: null
  },
  {
    id: "C2",
    name: "Neha",
    location: { x: 5, y: 3 },
    isAvailable: true,
    isLocked: false,        
    activeOrderId: null
  }
];
function createOrder(order) {
  // pick only unlocked + available couriers
  const courier = couriers.find(
    c => c.isAvailable && !c.isLocked
  );

  if (!courier) {
    console.log("Order unassigned: No available courier (concurrent requests)");
    return {
      status: "UNASSIGNED",
      reason: "No available courier due to concurrent assignments"
    };
  }

  // 🔒 LOCK courier immediately (atomic step)
  courier.isLocked = true;

  // assignment
  courier.isAvailable = false;
  courier.activeOrderId = order.id;

  console.log(`Courier ${courier.name} assigned to order ${order.id}`);

  // 🔓 UNLOCK after assignment
  courier.isLocked = false;

  return {
    status: "ASSIGNED",
    courierId: courier.id
  };
}
