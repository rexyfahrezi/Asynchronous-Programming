function greeting(name) {
  console.log('Halo ' + name);
}

function processUserInput(callback) {
  var name = 'Rexy';
  callback(name);
}

processUserInput(greeting);