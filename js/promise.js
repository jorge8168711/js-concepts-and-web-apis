const fs = require('fs');

/*
  EXAMPLES OF THE USAGE OF THE PROMISE OBJECT.

  The Promise object represents the eventual completion (or failure) of an
  asynchronous operation and its resulting value. Essentially, a promise is a
  returned object to which you attach callbacks, instead of passing callbacks into a function.

  A Promise is in one of these states:
  - pending: initial state, neither fulfilled nor rejected.
  - fulfilled: meaning that the operation was completed successfully.
  - rejected: meaning that the operation failed.
*/

/**
  The promise receive only the parameter executor, a function to be executed by the constructor. It
  receives two functions as parameters: resolutionFunc and rejectionFunc. Any errors thrown in
  the executor will cause the promise to be rejected, and the
  return value will be neglected.
  The promise object will become resolved when either of the functions
  resolutionFunc or rejectionFunc are invoked.

  1. executor typically wraps some asynchronous operation which provides a callback-based API.
    readFile("./data.txt", (error, result) => {});

  2. The callback (the one passed to the original callback-based API) is defined within
    the executor code, so it has access to the resolutionFunc and rejectionFunc.

  3. The promise is informed of the asynchronous task's eventual result, received
    from the callback, through the invocation of resolutionFunc or rejectionFunc.

  4. Once resolutionFunc or rejectionFunc is called, the promise's state moves
    from "pending" to either "fulfilled" or "rejected".

  5. The Promise object (asynchronously) invokes any further handlers
    associated by .then(handleFulfilled) or .catch(handleRejected).

  6. The argument passed to resolutionFunc or rejectionFunc, i.e., the fulfillment value
    or rejection reason, is passed to the invocation of handleFulfilled and handleRejected
    as an input parameter.
*/
const readFilePromise = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (error, result) => {
    if (error) {
      reject(error);
    } else {
      resolve(result);
    }
  });
});

const fileCOntent = readFilePromise(`${__dirname}/data.txt`)
  .then((result) => console.log(result))
  .catch((error) => console.error(`Failed to read data ${error}`));

const HEROES = {
  batman: {
    id: 1,
    name: 'Batman'
  },
  spiderman: {
    id: 2,
    name: 'Spiderman'
  },
  hulk: {
    id: 3,
    name: 'Hulk'
  },
};


/*
function getHero (id) {
  const hero = HEROES[id];

  return new Promise((resolve, reject) => {
    if (hero) {
      resolve(hero);
    } else {
      reject(new Error(`The hero ${id} doesn't exist.`));
    }
  });
}
*/

// automatically returns a promise with the returned value
async function getHero (id) {
  const hero = HEROES[id];

  if (!hero) {
    throw new Error(`The hero ${id} doesn't exist.`)
  };

  return HEROES[id];
}

async function printHeroesList () {
  const table = [];
  const promisesArr = ['batman', 'spiderman', 'hulk'].map(h => getHero(h));

  // FOR AWAIT
  for await(const hero of promisesArr) {
    table.push(hero);
  }

  // if await
  // if ( (await getHero('batman')).name === 'batman ) {}

  console.table(table)
}

const wait = (ms) => new Promise((resolve) => setTimeout(() => resolve(`${ms}ms`), ms));

(async() => {
  try {
    const promises = [wait(1000), wait(2000), wait(4000)];
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
    const allPromises = await Promise.race(promises);
    const h = await getHero('batman');

    printHeroesList();
  } catch (error) {
    console.log(error)
  }
})()
