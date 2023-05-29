/**
 * Vending Machine Item
 */
interface Item {
  name: string;
  price: number;
  quantity: number;
}

/**
 * Vending Machine Coin
 */
interface Coin {
  value: number;
  quantity: number;
}

/**
 * Vending Machine
 */
interface VendingMachine {
  inventory: Item[];
  coins: Coin[];
  currentAmount: number;
  selectedItems: Item[];
}

/**
 * Creates a new Vending Machine instance.
 * @returns {VendingMachine} The newly created VendingMachine object.
 */
function createVendingMachine(): VendingMachine {
  return {
    inventory: [],
    coins: [],
    currentAmount: 0,
    selectedItems: [],
  };
}

/**
 * Adds an item to the Vending Machine's inventory.
 * @param {VendingMachine} machine - The Vending Machine object.
 * @param {string} name - The name of the item.
 * @param {number} price - The price of the item.
 * @param {number} quantity - The initial quantity of the item.
 */
function addItem(
  machine: VendingMachine,
  name: string,
  price: number,
  quantity: number
) {
  const item: Item = { name, price, quantity };
  machine.inventory.push(item);
}

/**
 * Adds coins to the Vending Machine's coin inventory.
 * @param {VendingMachine} machine - The Vending Machine object.
 * @param {number} value - The value of the coin.
 * @param {number} quantity - The initial quantity of the coin.
 */
function addCoins(machine: VendingMachine, value: number, quantity: number) {
  const existingCoin = machine.coins.find((coin) => coin.value === value);
  if (existingCoin) {
    existingCoin.quantity += quantity;
  } else {
    const coin: Coin = { value, quantity };
    machine.coins.push(coin);
  }
}

/**
 * Displays the inventory of items in the Vending Machine.
 * @param {VendingMachine} machine - The Vending Machine object.
 */
function displayInventory(machine: VendingMachine) {
  console.log("Available Items:");
  for (const item of machine.inventory) {
    console.log(`${item.name} - $${item.price} - Quantity: ${item.quantity}`);
  }
}

/**
 * Inserts a coin into the Vending Machine.
 * @param {VendingMachine} machine - The Vending Machine object.
 * @param {number} value - The value of the coin.
 */
function insertCoin(machine: VendingMachine, value: number) {
  const existingCoin = machine.coins.find((coin) => coin.value === value);
  if (existingCoin) {
    machine.currentAmount += value;
    existingCoin.quantity++;
  } else {
    console.log("Invalid coin.");
  }
}

/**
 * Selects an item from the Vending Machine.
 * @param {VendingMachine} machine - The Vending Machine object.
 * @param {string} itemName - The name of the item to select.
 */
function selectItem(machine: VendingMachine, itemName: string) {
  const item = machine.inventory.find((item) => item.name === itemName);
  if (item) {
    if (item.quantity > 0) {
      if (machine.currentAmount >= item.price) {
        machine.selectedItems.push(item);
        machine.currentAmount -= item.price;
        item.quantity--;
        console.log(`Selected ${item.name}.`);
      } else {
        console.log("Insufficient funds. Please insert more coins.");
      }
    } else {
      console.log("Out of stock.");
    }
  } else {
    console.log("Invalid item.");
  }
}

/**
 * Dispenses the selected items and any remaining change from the Vending Machine.
 * @param {VendingMachine} machine - The Vending Machine object.
 */
function dispenseItemsAndChange(machine: VendingMachine) {
  if (machine.selectedItems.length === 0) {
    console.log("No items selected.");
    return;
  }

  for (const item of machine.selectedItems) {
    console.log(`Dispensing ${item.name}. Enjoy!`);
  }

  dispenseChange(machine, machine.currentAmount);
  machine.selectedItems = [];
  machine.currentAmount = 0;
}

/**
 * Dispenses the appropriate change from the Vending Machine.
 * @param {VendingMachine} machine - The Vending Machine object.
 * @param {number} change - The amount of change to dispense.
 */
function dispenseChange(machine: VendingMachine, change: number) {
  const availableCoins = machine.coins
    .filter((coin) => coin.quantity > 0)
    .sort((a, b) => b.value - a.value);

  for (const coin of availableCoins) {
    if (change >= coin.value) {
      const count = Math.min(Math.floor(change / coin.value), coin.quantity);
      console.log(`Dispensing ${count} ${coin.value} cent coin(s).`);
      change -= count * coin.value;
      coin.quantity -= count;
    }
    if (change === 0) {
      break;
    }
  }

  if (change > 0) {
    console.log(`Unable to dispense ${change} cents as change.`);
  }
}

// Example usage

// Create a new Vending Machine
const vendingMachine = createVendingMachine();

// Add items to the Vending Machine
addItem(vendingMachine, "Coke", 1.5, 5);
addItem(vendingMachine, "Chips", 1.2, 3);
addItem(vendingMachine, "Water", 0.8, 10);

// Add coins to the Vending Machine
addCoins(vendingMachine, 1, 10);
addCoins(vendingMachine, 5, 5);
addCoins(vendingMachine, 10, 2);

// Display available items in the Vending Machine
displayInventory(vendingMachine);

// Insert coins into the Vending Machine
insertCoin(vendingMachine, 5);
insertCoin(vendingMachine, 10);

// Select multiple items from the Vending Machine
selectItem(vendingMachine, "Coke");
selectItem(vendingMachine, "Chips");
selectItem(vendingMachine, "Water");

// Dispense selected items and any remaining change
dispenseItemsAndChange(vendingMachine);

// Display available items in the Vending Machine after purchasing
displayInventory(vendingMachine);
