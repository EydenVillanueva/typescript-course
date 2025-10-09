const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];
const carsByMakeCustom: (string[] | string)[] = [
  ['f150'],
  ['corolla'],
  ['camaro'],
  'hola',
];

// Help with inference when extracting values
const myCar = carMakers[0];
const mySecondCar = carMakers.pop();

// Prevent incomplatible values
carMakers.push(100);

// Help with built in functions like map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible - arrays can still contain multiple different types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(new Date());
