const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.218',
    port: 50541
  });
    // interpret incoming data as text
  conn.setEncoding('utf8'); 
    
    // attached an event handler to handle incoming data and console log it for the player.
  // conn.on('data', function(message) {
  //   console.log(message);
  // });

  conn.on('connect', function() {
    conn.write("Name: R.L");
    console.log("Successfully connected to game server");
  });
  
  return conn;
};

module.exports = connect;