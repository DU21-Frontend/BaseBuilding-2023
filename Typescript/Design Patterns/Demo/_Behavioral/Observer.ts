
console.log('///////////////////////////////////////////////')
console.log('///////////////////////////////////////////////')
console.log('///////////////////////////////////////////////')
console.log('///////////////////////////////////////////////')
console.log('///////////////////////////////////////////////')
console.log('///////////////////////////////////////////////')


interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

interface Observer {
  update(noti: string): void;
}

// interface IBaseResponse {
//   next?: (res: any) => {},
//   error?: (err: Error) => {},
//   complete?: () => {}
// }
// interface Subject {
//   subscribe(observer: Observer): void;
//   unsubscribe(observer: Observer): void;
//   notify(baseResponse: IBaseResponse): void;
// }

// interface Observer {
//   update(response: IBaseResponse): void;
// }




class AppleStore implements Subject {
  private observers: Array<Observer> = [];

  public subscribe(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('Subject: Observer has been subscribed already.');
    }

    console.log('// Subject: subscribed an observer. //');
    this.observers.push(observer);
  }

  public unsubscribe(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.');
    }

    this.observers.splice(observerIndex, 1);
    console.log('Subject: unsubscribleed an observer.');
  }

  public notify(): void {
    for (const observer of this.observers) {
      observer.update("Guys, let's buy some MamTom Dynamic Island....");
    }
  }

  public releaseNewIphone(): void {
    this.notify();
  }

  // NORMAL CASE 

  // public notify(baseResponse: IBaseResponse): void {
  //   for (const observer of this.observers) {
  //     observer.update(baseResponse);
  //   }
  // }

  // public async releaseNewIphone(): Promise<void> {
  //   try {
  //     // Fetching API to get Iphone 14 ProMax detail 
  //     // const ip = this.getPhone(phoneId);
  //     this.notify({ next: (res: any) => res = 'Iphone14 Promax, let"s change the future' });
  //   } catch (err) {

  //   }
  // }
}

class Shop implements Observer {
  public update(noti: string): void {
    return console.log('[ Shop - noti ]: ', noti);
  }
}

class Company implements Observer {
  public update(noti: string): void {
    return console.log('[ Company - noti ]: ', noti);
  }
}

class Person implements Observer {
  public update(noti: string): void {
    return console.log('[ Person - noti ]: ', noti);
  }
}

// class Shop implements Observer {
//   public update(noti: string): void {
//     return console.log('[ Shop - noti ]: ', baseResponse);
//   }
// }

// class Company implements Observer {
//   public update(noti: string): void {
//     return console.log('[ Company - noti ]: ', baseResponse);
//   }
// }

// class Person implements Observer {
//   public update(noti: string): void {
//     return console.log('[ Person - noti ]: ', baseResponse);
//   }
// }

// ? DEMO TIME ?

// * Create concrete Store
const appStore = new AppleStore();

// * Create concrete Observers
const newShop = new Shop();
const newCompany = new Company();
const newPerson = new Person();

// * Observers are subscribing Subject 
appStore.subscribe(newShop);
appStore.subscribe(newCompany);
appStore.subscribe(newPerson);

// * PmDoo don't want to buy this garbage phone anymore
appStore.unsubscribe(newPerson);

// * Notify all
appStore.releaseNewIphone();






