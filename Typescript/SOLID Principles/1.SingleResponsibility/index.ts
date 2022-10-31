class NguoiYeu {
  public chieuCao: number;
  public canNang: number;
  public diaChi: string;

  constructor(chieuCao: number, canNang: number, diaChi: string) {
    this.chieuCao = chieuCao;
    this.canNang = canNang;
    this.diaChi = diaChi;
    this.isMatch;
  }

  isMatch() {
    const result = (this.canNang / Math.pow(this.chieuCao, 2)) * 10000;
    const conditionMatch = result > 18;
    if (conditionMatch) {
      return `this girl is match for Doo,her address is ${this.diaChi}`;
    }
    return 'dont Match';
  }
}

const newBae1 = new NguoiYeu(170, 55, 'ha noi').isMatch();
console.log('newBae__', newBae1);

//-----WHEN USE SRP-----

class NguoiYeu_ {
  public bmi: CheckHang;
  constructor(bmi: CheckHang) {
    this.bmi = bmi;
  }
}

class CheckHang {
  public chieuCao: number;
  public canNang: number;
  public diaChi: string;

  constructor(chieuCao: number, canNang: number, diaChi: string) {
    this.chieuCao = chieuCao;
    this.canNang = canNang;
    this.diaChi = diaChi;
  }

  isMatch() {
    const resultBMI = (this.canNang / Math.pow(this.chieuCao, 2)) * 10000;
    console.log('resultBMI', resultBMI);
    const conditionMatch = resultBMI > 18;
    console.log('condition', conditionMatch);
    if (conditionMatch) {
      return `this girl is match for Doo,her address is ${this.diaChi}`;
    }
    return 'dont Match';
  }
}

const newBae2 = new CheckHang(160, 46, 'hanoi').isMatch();
console.log('newBae', newBae2);
