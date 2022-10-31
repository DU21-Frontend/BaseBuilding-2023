class NormalMan {
  public worryList: string[] = ['quá cao'];
  checkMatch(characteristics: string[]): void {
    const isWorry = characteristics.some((characteristic) => this.worryList.indexOf(characteristic) >= 0);
    if (isWorry) {
      console.log('Oops! Not for you!');
    } else {
      console.log('Greats! Someone match you!');
    }
  }
}

// ?? With Open/Close

class FAMan extends NormalMan {
  addWorries(characteristics: string[]): void {
    this.worryList = this.worryList.concat(characteristics);
  }
}
const GirlACharacteristics: string[] = ['xinh', 'chân to'];

console.log('normalMan');
const normalMan = new NormalMan();
normalMan.checkMatch(GirlACharacteristics);

console.log('Doo');

const Doo = new FAMan();
Doo.addWorries(['chân to', 'quá xinh', 'không xinh', 'mặt tròn', 'đầu méo', 'chiếc lược ngà']);
Doo.checkMatch(GirlACharacteristics);
