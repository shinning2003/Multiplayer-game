const playerSkills = {
  speedBoost: {
    duration: 5000,
    active: false
  },
  doubleJump: {
    active: false
  },
  shield: {
    duration: 3000,
    active: false
  }
};

function activateSkill(skillName) {
  if (!playerSkills[skillName]) return;

  playerSkills[skillName].active = true;
  console.log(skillName + ' activated');

  if (playerSkills[skillName].duration) {
    setTimeout(() => {
      playerSkills[skillName].active = false;
      console.log(skillName + ' expired');
    }, playerSkills[skillName].duration);
  }
}
