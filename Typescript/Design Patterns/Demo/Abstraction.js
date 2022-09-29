class Phone {
    constructor(name, color, weight) {
        this.name = name;
        this.color = color;
        this.weight = weight;
    }
}
class Iphone extends Phone {
    constructor(name, color, weight) {
        super(name, color, weight);
    }
    takePhoto() {
        console.log(`${this.name} can take photos`);
    }
    sendMail() {
        console.log(`${this.name} can send email`);
    }
}
let iphone12;
iphone12 = new Iphone("iPhone 12", "black", 300);
console.log(iphone12);
iphone12.takePhoto();
iphone12.sendMail();
class Mercedes {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`${this.name} run faster than Honda CRV`);
    }
    playMusic() {
        console.log(`${this.name} can play a music recoder`);
    }
}
let maybach;
maybach = new Mercedes('maybachS450');
console.log(maybach);
maybach.playMusic();
