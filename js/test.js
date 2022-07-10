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
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const { name } = this.potions[i];
      if (name === potionName) {
        this.potions.splice(i, 1);
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
atTheOldToad.addPotion({ name: "aaaaa", price: 5 });
console.log(atTheOldToad.removePotion("aaaaa"));
