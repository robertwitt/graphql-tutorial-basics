import myCurrentLocation, { message, name, getGreeting } from './myModule';
import add, { subtract } from './math';

console.log(message);
console.log(name);
console.log(myCurrentLocation);
console.log(getGreeting('Jessica'));

console.log(add(5, 9));
console.log(subtract(15, 8));

