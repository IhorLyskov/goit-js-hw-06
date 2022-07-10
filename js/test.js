const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(potion) {
    const potions = this.potions;
    const { name: newName } = potion;
    for (const { name } of potions) {
      if (name === newName) {
        return `Error! Potion ${newName} is already in your inventory!`;
      }
    }
    potions.push(potion);
    return `Potion ${newName} is added`;
  },
  removePotion(potionName) {
    const potions = this.potions;

    for (let i = 0; i < potions.length; i += 1) {
      const { name } = potions[i];
      if (name === potionName) {
        potions.splice(i, 1);
        return `Potion ${potionName} is deleted`;
      }
    }
    return `Error! Potion ${potionName} is not found`;
  },

  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const { name } = this.potions[i];
      if (name === oldName) {
        this.potions[i].name = newName;
        return;
      }
    }
  },
  // Change code above this line
};
atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
