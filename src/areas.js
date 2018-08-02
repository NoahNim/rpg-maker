export class Area {
  constructor(areaName, areaType){
    this.areaName = areaName;
    this.areaType = areaType;
    this.areaEnemyDensity = 0;
  }
}

export class Forest extends Area {
  constructor(areaName){
    super(areaName);
    this.areaType = "Forest";
    this.areaEnemyDensity = 1;
  }
}
