# Courier Management System

## Overview
A Node.js based Courier Management System designed to focus on core domain logic.
The system manages a fixed pool of couriers and enforces the rule that one courier
can handle only one active order at a time.

## Technical Constraints
- Language: Node.js (Express-style structure)
- Persistence: In-memory data structures
- No external APIs or managed services
- Focus on business rules, not deployment

## Core Features
- Fixed pool of couriers with unique ID and location
- Availability tracking for each courier
- Single active order per courier enforced
- Order lifecycle management

## Key Domain Rules
- A courier can be assigned to only one active order
- Orders remain pending if no courier is available
- Courier becomes available only after order completion

## Project Structure
- couriers/: Courier domain logic
- orders/: Order domain logic
- utils/: Helper functions
- index.js: Application entry point

## How to Run
```bash
npm install
node src/index.js
---
/*
Technical Constraints:
- Node.js based implementation
- In-memory persistence
- No external APIs or services
- Focus on domain logic
*/

git init
git add .
git commit -m "Initial commit: courier management domain logic"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main

Built a Courier Management System in Node.js using in-memory persistence, enforcing strict domain rules such as single active order per courier. (GitHub)
## Sample Output

```text
Courier Amit assigned to order O1
Courier Neha assigned to order O2
Order O1 completed
Courier Amit assigned to order O2
Courier Management System | Node.js
Designed and implemented a courier management system focusing on core domain logic
Enforced single active order per courier using in-memory persistence
Modeled real-world constraints through explicit state transitions
🔗 GitHub: https://github.com/KamalThirpola/courier-management-system

## Auto-Assignment Logic
On order creation, the system automatically assigns the nearest eligible courier using a deterministic Manhattan distance formula.  
Express orders are assigned only within a defined distance threshold.  
If no courier is eligible, the order remains unassigned with a clear reason returned.

### Concurrency & Data Safety
Courier assignment is performed atomically using in-memory locking to prevent race conditions where a courier could be assigned to multiple orders concurrently.
- Implemented in-memory locking to ensure atomic courier assignment
- Prevents race conditions during concurrent order creation
- Ensures a courier can never be assigned to multiple orders simultaneously

## Courier Movement & Order Progression

- Courier movement is simulated step-by-step using a deterministic Manhattan-style approach.
- The courier moves one unit at a time toward pickup and drop locations.
- Order state transitions are strictly controlled:
  - ASSIGNED → PICKED_UP → DELIVERED
- An order progresses to the next state only when the courier physically reaches the required location.
- Manual or forced state jumps are prevented by design.
- Once an order is delivered, the courier is automatically marked available for new assignments.
### Architecture
- index.js: Application orchestration
- assignment.js: Courier selection & auto-assignment logic
- movement.js: Courier movement & order state progression
