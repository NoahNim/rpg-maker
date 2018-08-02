export class Spells {
  constructor(){
    this.hp = 0;
  }
}

export class Attack extends Spells
{
  constructor() {
  super()
  this.hp = 10;
  }
}

export class Defend extends Spells
{
  constructor()
  {
    super()
    this.hp = 10;
  }
}
export class Magic extends Spells
{
  constructor()
  {
    super()
    this.hp = 20;
  }
}
