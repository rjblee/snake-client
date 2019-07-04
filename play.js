// const net = require('net');

/**
 * Establishes connection with the game server
 */
// const connect = function() {
//   const conn = net.createConnection({ 
//     host: '192.168.88.218',
//     port: 50541
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8'); 
  
//   // attached an event handler to handle incoming data and console log it for the player.
//   conn.on('data', function(message) {
//     console.log(message);
//   });

//   return conn;
// }

const connect = require('./client');
console.log('Connecting ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on('data', (key) => {
    if (key === '\u0003') {
    }
  })
  return stdin;
}