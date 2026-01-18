// Deterministic Manhattan distance
function calculateDistance(a, b) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

// Find nearest eligible courier
function findNearestCourier(order, couriers) {
  let nearest = null;
  let minDistance = Infinity;
  const EXPRESS_LIMIT = 5;

  for (const c of couriers) {
    if (!c.isAvailable) continue;

    const d = calculateDistance(order.location, c.location);
    if (order.type === "EXPRESS" && d > EXPRESS_LIMIT) continue;

    if (d < minDistance) {
      minDistance = d;
      nearest = c;
    }
  }
  return nearest;
}

module.exports = { findNearestCourier };
