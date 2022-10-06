// Substraction: Tính trừu tượng:
/**
 * Tính trừu tượng thể hiện qua việc tạo ra một đối tượng ban đầu
 * có thể có một số đặc điểm chung cho nhiều đối tượng khác như là
 * sự mở rộng của nó nhưng bản thân đối tượng ban đầu không có các biện pháp
 * thi hành.
 * TypeScript sử dụng Abstract class và Interface để thể hiện tính trừu tượng
 */
// 1. Abstract class
// Sử dụng từ khoá 'abstract class'
// Phương thức muốn là trừu tượng sử dụng từ khoá "abstract" trước tên hàm

abstract class Phone {
  public name: string;
  public color: string;
  public weight: number;

  constructor(name: string, color: string, weight: number) {
    this.name = name;
    this.color = color;
    this.weight = weight;
  }

  // Hàm triển khai ở lớp dẫn xuất (lớp con)
  abstract takePhoto(): void;
}

// * Lớp dẫn xuất (extend) từ lớp cha
class Iphone extends Phone {
  constructor(name: string, color: string, weight: number) {
    super(name, color, weight);
  }

  takePhoto(): void {
    console.log(`${this.name} can take photos`);
  }
  sendMail(): void {
    console.log(`${this.name} can send email`);
  }
}

// Lớp trừu tượng hoặc dẫn xuất có thể dùng để tạo tham chiếu kiểu dữ liệu
// Chỉ có thể tạo một instance từ lớp dẫn xuất
// Không thể tạo một instance từ lớp trừu tượng

let iphone12: Iphone;
iphone12 = new Iphone('iPhone 12', 'black', 300);
console.log(iphone12);

iphone12.takePhoto();
iphone12.sendMail();

// 2. Trừu tượng với Interface
// Tương tự như abstract class, các phương thức được khai báo trong
// Interface cũng không thể định nghĩa code xử lý.

interface Car {
  name: string;

  run(): void; // Triểm khai code xử lý ở lớp thực thi interface
}

interface Utility {
  playMusic(): void; // Triển khai code xử lý ở lớp thực thi interface
}

class Mercedes implements Car, Utility {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public run(): void {
    console.log(`${this.name} run faster than Honda CRV`);
  }
  public playMusic(): void {
    console.log(`${this.name} can play a music recoded`);
  }
}

// Có thể tham chiếu kiểu dữ liệu là interface
// Không thể tạo một instance từ interface
let maybach: Mercedes;
maybach = new Mercedes('maybachS450');

console.log(maybach);

maybach.playMusic();

/**
 * Sự khác nhau của abstract class và interface:
 * @Abstrac class: Là một class cha cho tất cả các class có cùng bản chât.
 * Hai hoặc nhiều class khác nhau về bản chất có thể thực hiện cùng một interface
 * @Interface Chỉ như một đơn vị chức năng mà thêm vào một class. Do đó một class có thể thực hiện nhiều Interface.
 * Interface ko thể kế thừa một class.
 *
 */
