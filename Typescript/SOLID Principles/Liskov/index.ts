class Bird {
  fly(): void {
    console.log('I can fly')
  }
}

class Duck extends Bird {
  quack(): void {
    console.log('Quack quack')
  }
}

class Penguin extends Bird {
  fly(): void {
    throw new Error('Cannot fly')
  }
  swim(): void {
    console.log('I can swim')
  }
}

function makeBirdFly(bird: Bird) {
  bird.fly();
}

const duck = new Duck();
const penguin = new Penguin();

makeBirdFly(duck);
makeBirdFly(penguin);


// class FlyingBird {
//   fly(): void {
//     console.log('I can fly')
//   }
// }

// class SwimmingBird {
//   swim(): void {
//     console.log('I can swim')
//   }
// }

// class Duck extends FlyingBird {
//   quack(): void {
//     console.log('Quack quack')
//   }
// }

// class Penguin extends SwimmingBird {
//   swim(): void {
//     console.log('I can swim')
//   }
// }

// function makeFlyingBirdFly(bird: FlyingBird) {
//   bird.fly();
// }

// function makeSwimmingBirdSwim(bird: SwimmingBird) {
//   bird.swim();
// }