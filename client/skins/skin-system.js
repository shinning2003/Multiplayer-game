const playerSkins = [
  {
    id: 1,
    name: 'Cyber Runner',
    rarity: 'Epic'
  },
  {
    id: 2,
    name: 'Shadow Ninja',
    rarity: 'Legendary'
  },
  {
    id: 3,
    name: 'Neon Hero',
    rarity: 'Rare'
  }
];

let selectedSkin = playerSkins[0];

function equipSkin(skinId) {
  const skin = playerSkins.find(s => s.id === skinId);

  if (skin) {
    selectedSkin = skin;
    console.log('Equipped:', skin.name);
  }
}
