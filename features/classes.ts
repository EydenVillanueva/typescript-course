class Vehicle {
  protected honk(): void {
    console.log('honk honk');
  }

  constructor(public color: string) {}
}

const vehicle = new Vehicle('oracle');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
