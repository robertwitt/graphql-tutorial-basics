const message = 'Some message from myModule.js';
const name = 'Robert';
const location = 'Berlin';

const getGreeting = name => `Welcome to the course ${name}`;

export { message, name, location as default, getGreeting };