class Normal implements PersonInterface, BmiInterface {
  public height: number;
  public weight: number;
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
  public bmi() {
    return this.weight / (this.height * 2);
  }
}

// ?? With IS

class Worriedboiz implements PersonInterface, BmiInterface, LegInterface, WorriesInterface, BeautyInterface {
  public height: number;
  public weight: number;
  public wideLeg: number;
  public isBeautiful: boolean;
  constructor(height: number, weight: number, wideLeg: number, isBeautiful: boolean) {
    this.height = height;
    this.weight = weight;
    this.wideLeg = wideLeg;
    this.isBeautiful = isBeautiful;
  }
  public bmi() {
    return this.weight / (this.height * 2);
  }
  public worries() {
    if (this.wideLeg > 50) {
      return "Leg is too big. It'll break my neck";
    }
    if (this.bmi() >= 23) {
      return 'Too fat';
    }
    if (this.bmi() <= 18.5) {
      return 'Too thin';
    }
    if (this.isBeautiful) {
      return 'Worry';
    }
    if (!this.isBeautiful) {
      return 'Not Beautiful';
    }
    return 'Oke';
  }
}
