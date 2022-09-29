// Encapsulation --> Tính đóng gói
// Tính đóng gói của OOP được thể hiện qua 3 khía cạnh:
/**
 * @Các properties và methods là đại diện chung cho một kiểu dữ liệu
 * được đóng gói thành các lớp để tiện quản lý và sử dụng.
 * Code demo: Xem lại file OOP
 *
 *
 * @Dấu đi những thông tin, phương thức mà không muốn public ra ngoài
 * thông qua trạng thái của các properties, method được định nghĩa: 
 * (public, private, protected, readonly, getter, setter)
 *
 *
 * @Đối tượng khác không thể truy cập vào lớp đó để thay đổi
 * hoặc thực hiện phương thức trng class đó
 * Code demo: Ví dụ bên dưới.
 */

// Person Object:
class Person {
  public name: string
  readonly weight: number
  private phone: number
  protected age: number

  constructor(name: string, weight: number, phone: number, age: number) {
    this.name = name
    this.age = age
    this.phone = phone
    this.weight = weight
  }
}

class Students extends Person {
  private _studentId: string
  // public factory: string

  constructor(name: string, weight: number, phone: number, age: number, public factory: string) {
    //By calling the super() method in the constructor method, we call the parent's constructor method 
    //and get access to the parent's properties and methods
    super(name, weight, phone, age) // The super() method refers to the parent class.
    // this.factory = factory
  }

  public get studentId() {
    return this._studentId
  }

  public set studentId(value: string) {
    if(value.length === 0) {
      throw new Error("Invalid...")
    }
    this._studentId = value;
  }

  // Có thể truy cập biến protected từ class con.
  sayHi(): void {
    console.log(`hi, my name is ${this.name}, I'm ${this.age}`)
  }
}

const student1 = new Students('Lan Anh', 50, 0982313422, 18, 'Tieng anh')
// Chỉ có thể truy cập các biến public ở bên ngoài class:
console.log(student1.name)
// Truy cập vào biến protected trong class con:
student1.sayHi()
// Không thể truy cập vào biến private ngoài class:
// console.log(student1.phone);//--> Throw Error

// Không thể sửa biến readonly:
// student1.weight = 55 //--> Throw error.

/**
 * @getters : Return the value of a property.
 * @Setters : Update value of a property.
 */
student1.studentId = '' // accsess setter
console.log(student1.studentId) // access getter
console.log(student1)

// Computer Object:
class Computer {
  color: string
  model: string
  constructor(color: string, model: string) {
    this.color = color
    this.model = model
  }
}

const computer1 = new Computer('black', 'Dell-2022')

console.log(computer1)


console.log('<<<<<<<<<<<< ENCAPSULATION EN >>>>>>>>>>>>>>>>')