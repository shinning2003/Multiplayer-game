const shopItems = [
  {
    id: 1,
    name: 'Speed Boost',
    price: 100
  },
  {
    id: 2,
    name: 'Double Jump',
    price: 250
  },
  {
    id: 3,
    name: 'Golden Skin',
    price: 500
  }
];

let coins = 1000;

function buyItem(itemId) {
  const item = shopItems.find(i => i.id === itemId);

  if (!item) return;

  if (coins >= item.price) {
    coins -= item.price;
    console.log('Purchased:', item.name);
  } else {
    console.log('Not enough coins');
  }
}
