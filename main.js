import { sleep } from './sleep.js';
import { getRandomNumber } from './random.js';
import { Person } from './person.js';

const main = async () => {
  const randomMilliseconds = getRandomNumber();
  console.log(`Sleeping for ${randomMilliseconds} milliseconds...`);

  await sleep(randomMilliseconds);

  const person = new Person('John Doe', 1995);
  console.log(person.getInfo());
};

main();
