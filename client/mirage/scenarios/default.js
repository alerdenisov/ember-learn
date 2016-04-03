/**
 * Get a random floating point number between `min` and `max`.
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {float} a random floating point number
 */
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Get a random integer between `min` and `max`.
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {int} a random integer
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);

  var makeChain = function(server) {
    let t = server.createList('task', getRandomInt(1, 10));
    let f = server.create('feature', { tasks: t });
    // let f = server.create('feature');
    // let t = server.createList('task', getRandomInt(1, 10), { feature: f });
  }

  makeChain(server);
  makeChain(server);
  makeChain(server);
  makeChain(server);
}
