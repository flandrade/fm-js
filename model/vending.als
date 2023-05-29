abstract sig Item {
  name: String,
  price: Int,
  quantity: Int
}

abstract sig Coin {
  value: Int,
  quantity: Int
}

sig VendingMachine {
  inventory: set Item,
  coins: set Coin,
  currentAmount: Int,
  selectedItems: set Item
}

pred insertCoin[m: VendingMachine, c: Coin] {
  c.value > 0 and c.quantity > 0
  m'.inventory = m.inventory
  m'.coins = m.coins + c
  m'.currentAmount = m.currentAmount + c.value
  m'.selectedItems = m.selectedItems
}

pred selectItem[m: VendingMachine, i: Item] {
  i in m.inventory and i.quantity > 0 and i.price <= m.currentAmount
  m'.inventory = m.inventory - i
  m'.coins = m.coins
  m'.currentAmount = m.currentAmount - i.price
  m'.selectedItems = m.selectedItems + i
}

pred dispenseItemsAndChange[m: VendingMachine] {
  all i: Item | i in m.selectedItems implies i not in m.inventory
  no i: Item | i in m.selectedItems and i.quantity > 0
  let change = m.currentAmount |
    some c: Coin | c in m.coins and c.quantity > 0 and c.value <= change
  m'.inventory = m.inventory
  m'.coins = m.coins
  m'.currentAmount = 0
  m'.selectedItems = none
}

run {} for 5 but 5 VendingMachine, 10 Coin, 15 Item
