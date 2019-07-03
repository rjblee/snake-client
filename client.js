const net = require('net');
const conn = net.createConnection({ 
  host: '192.168.88.126', // change to IP address
  port: 3000
});

conn.setEncoding('utf8'); // interpret data as text

// client.js
conn.on('data', (data) => {
  console.log('Server says: ', data);
});

conn.on('connect', () => {
  conn.write('Hi Julia!');
});

const connect = function() {
    const conn = net.createConnection({ 
      host: '192.168.88.218',
      port: 50541
    });
    // interpret incoming data as text
    conn.setEncoding('utf8'); 
    
    // attached an event handler to handle incoming data and console log it for the player.
    conn.on('data', function(message) {
      console.log(message);
    });
  
    return conn;
  };

module.exports = connect;