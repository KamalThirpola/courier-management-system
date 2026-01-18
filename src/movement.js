function moveOneStep(courier, target) {
  if (courier.location.x < target.x) courier.location.x++;
  else if (courier.location.x > target.x) courier.location.x--;
  else if (courier.location.y < target.y) courier.location.y++;
  else if (courier.location.y > target.y) courier.location.y--;
}

function simulateMovement(courier, order) {
  if (order.status === "ASSIGNED") {
    moveOneStep(courier, order.pickupLocation);

    if (
      courier.location.x === order.pickupLocation.x &&
      courier.location.y === order.pickupLocation.y
    ) {
      order.status = "PICKED_UP";
    }
  }

  if (order.status === "PICKED_UP") {
    moveOneStep(courier, order.dropLocation);

    if (
      courier.location.x === order.dropLocation.x &&
      courier.location.y === order.dropLocation.y
    ) {
      order.status = "DELIVERED";
      courier.isAvailable = true;
      courier.activeOrderId = null;
    }
  }
}

module.exports = { simulateMovement };
