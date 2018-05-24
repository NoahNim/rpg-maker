export class Character {
  constructor(name, race) {
    this.name = name;
    this.race = race;
    this.hp = 50;
    this.mana = 50;
    this.stamina = 50;
    this.level = 1;
    this.experience = 0;
    this.inventory = [];
  }
  levelUp() {
    this.level += 1;
  }
  expGain(exp) {
    this.experience += exp;
    if (this.experience >= 1000) {
      this.experience = 0;
      this.levelUp();
    }
  }
  addItem(item) {
    this.inventory.push(item);
    this.hp += item.hpMod;
    this.mana += item.manaMod;
    this.stamina += item.staminaMod;
    if (item.experienceMod > 0) {
      this.expGain(item.experienceMod);
    }
    if (this.inventory.length > 5) {
      this.inventory.pop();
    }
  }
  dropItem(item){
    this.inventory.splice(item, 1);
    this.hp -= item.hpMod;
    this.mana -= item.manaMod;
    this.stamina -= item.staminaMod
  }
}

export class Warrior extends Character {
  constructor(name, race) {
    super(name, race);
    this.hp += 100;
    this.stamina += 50;
  }
}
export class Wizard extends Character {
  constructor(name, race) {
    super(name, race);
    this.hp += 20;
    this.stamina += 10;
    this.mana += 100;
  }
}
export class Thief extends Character {
  constructor(name, race) {
    super(name, race);
    this.hp += 30;
    this.stamina += 100;
    this.mana += 10;
  }
}

export class Priest extends Character {
  constructor(name, race) {
    super(name, race);
    this.hp += 25;
    this.stamina += 10;
    this.mana += 110;
  }
}
