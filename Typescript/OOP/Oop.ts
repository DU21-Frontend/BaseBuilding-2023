// Class:

class Phones {
  name: string
  color: string

  constructor(name: string, color: string) {
    this.name = name
    this.color = color
  }

  takePhoto(): void {
    console.log(`${this.name} can take photo`)
  }
}

// Tạo đối tượng từ một class --> Tạo một instance từ class Phones
const iPhone13 = new Phones('iPhone 13', 'gold')

// Tạo đối tượng thủ công:
const iPhone11 = {
  name: 'iPhone 11',
  color: 'black',

  takePhoto() {
    console.log('iPhone 11 can take photo >>>>')
  },
}

// So sánh OOP với POP (Lập trình hướng thủ tục):
/**
 * Vấn đề của POP:
 * @Cồng kềnh, khó quản lý --> OOP dễ dàng tạo ra một đối tượng nhanh chóng
 * @Không hỗ trợ ẩn các dữ liệu cần bảo mật --> OOP hỗ trợ các trạng thái của dữ liệu: private, protected, public.
 *
 */

// Tận dụng được 4 đặc điểm nổi bật của OOP trong lập trình:
// - Subtraction --> Trừu tượng
// - Encapsulation --> Đóng gói
// - Inheritance --> Kế thừa
// - Polymorphism --> Đa hình
