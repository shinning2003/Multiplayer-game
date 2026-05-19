const achievements = [
  {
    id: 1,
    title: 'First Victory',
    unlocked: false
  },
  {
    id: 2,
    title: 'Coin Collector',
    unlocked: false
  },
  {
    id: 3,
    title: 'Speed Master',
    unlocked: false
  }
];

function unlockAchievement(id) {
  const achievement = achievements.find(a => a.id === id);

  if (achievement && !achievement.unlocked) {
    achievement.unlocked = true;
    console.log('Achievement unlocked:', achievement.title);
  }
}
