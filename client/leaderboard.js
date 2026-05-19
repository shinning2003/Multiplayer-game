const leaderboard = [
  {
    player: 'Player1',
    wins: 5,
    coins: 1000
  }
];

function addWin(playerName) {
  let player = leaderboard.find(p => p.player === playerName);

  if (player) {
    player.wins++;
  } else {
    leaderboard.push({
      player: playerName,
      wins: 1,
      coins: 0
    });
  }

  console.log('Leaderboard Updated');
}

function showLeaderboard() {
  console.table(leaderboard);
}
