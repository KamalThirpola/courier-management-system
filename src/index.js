/*
FEATURE PROOF (Design Intent)

2️⃣ Courier Management
- Couriers maintained in in-memory array
- Each courier has id, name, location, availability
- activeOrderId enforces one active order per courier

3️⃣ Auto-Assignment Logic
- Implemented in assignment.js
- Uses deterministic Manhattan distance
- Returns UNASSIGNED with reason if no courier eligible

4️⃣ Concurrency & Data Safety
- Assignment protected using isLocked flag
- Prevents race conditions during order creation
- Atomic state mutation during assignment
*/
/*
 Courier Management System
 Technical Constraints:
 - Node.js
 - In-memory persistence
 - No external APIs
 - Focus on domain logic
*/

const { simulateMovement } = require("./movement");

// In-memory couriers
const couriers = [
  {
    id: "C1",
    name: "Amit",
    location: { x: 1, y: 2 },
    isAvailable: false,
    activeOrderId: "O1"
  },
  {
    id: "C2",
    name: "Neha",
    location: { x: 5, y: 3 },
    isAvailable: true,
    activeOrderId: null
  }
];

// In-memory orders
const orders = [
  {
    id: "O1",
    pickupLocation: { x: 2, y: 3 },
    dropLocation: { x: 6, y: 6 },
    status: "ASSIGNED"
  }
];

// Background tick simulation
function tick() {
  const courier = couriers.find(c => c.activeOrderId);
  const order = orders.find(o => o.id === courier?.activeOrderId);

  if (courier && order) {
    simulateMovement(courier, order);
    console.log(
      `Courier at (${courier.location.x}, ${courier.location.y}) | Order status: ${order.status}`
    );
  }
}

// simulate multiple ticks
for (let i = 0; i < 10; i++) {
  tick();
}
