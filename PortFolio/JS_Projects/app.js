console.log('Hello Word');
console.log('This is my first console practice'.length);
console.log('Does this sentence start with M.?'.startsWith('D'));
console.log('Change this sentence to uppercase'.toUpperCase());
console.log(Math.random());
console.log(Math.random() * 50);
console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random(Math.ceil(20))));
console.log(Number(2017));
console.log(Number.isInteger(34.2));

let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

let hungerLevel = 7;

if (hungerLevel === 5) {
    console.log('I\'m starving!');
} else if (hungerLevel === 9) {
    console.log('I will eat!');
} else {
    console.log('I\'m not hungry');
}

switch (new Date().getDay()) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('It\'s a Monday!');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
}