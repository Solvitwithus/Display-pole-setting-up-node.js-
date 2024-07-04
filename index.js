import { SerialPort } from 'serialport'
const port = new SerialPort({path:'COM9',baudRate: 2400 }, function (err) {
    
    if (err) {
    return console.log('Error: ', err.message)
  }
})

port.write('main screen turn on', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message)
  }
  console.log('message written')

  port.write('333388'); 
})
setTimeout(function () {
    // Clear the message
    port.write('');
    port.write(Buffer.from('')); // Write an empty string or appropriate clear command
    console.log('message cleared');
  }, 3000);


