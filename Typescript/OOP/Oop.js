class Phones {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    takePhoto() {
        console.log(`${this.name} can take photo`);
    }
}
const iPhone13 = new Phones('iPhone 13', 'gold');
const iPhone11 = {
    name: 'iPhone 11',
    color: 'black',
    takePhoto() {
        console.log('iPhone 11 can take photo >>>>');
    },
};
