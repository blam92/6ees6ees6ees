class RetiredForagerBee extends ForagerBee {
  constructor() {
    super();
    this.age = 40
    this.job = 'gamble'
    this.canFly = false
    this.color = 'grey'
  }

  forage() {
    return 'I am too old, let me play cards instead';
  }
  gamble() {
    super.forage();
  }

  static olderBee(firstBee, secondBee) {
    if(firstBee.age > secondBee.age) {
      return firstBee;
    } else {
      return secondBee;
    }
  }
}

