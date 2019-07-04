const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
    // interpret incoming data as text
  conn.setEncoding('utf8'); 
    
    // attached an event handler to handle incoming data and console log it for the player.
  conn.on('data', function(message) {
    console.log(message);
  });

  conn.on('connect', function() {
    conn.write("Name: R.L");
    conn.write("Say: What the snake")
    console.log("Successfully connected to game server");
    //setInterval(function() {conn.write("Move: up")}, 500);
  });

 
  // setInterval(function() {conn.write("Move: down")}, 50);
  // setInterval(function() {conn.write("Move: left")}, 50);
  // setInterval(function() {conn.write("Move: right")}, 50);

  
  return conn;
};

module.exports = connect;
