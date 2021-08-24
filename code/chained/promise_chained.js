const fs = require('fs')

const readFile = (file, options) => new Promise((resolve, reject) => {
  fs.readFile(file, options, (err, isifile) => {
    if (err) return reject(err);
    return resolve(isifile);
  });
});

const writeFile = (file, content) => new Promise((resolve, reject) => {
  fs.writeFile(file, content, (err) => {
    if (err) return reject(err);
    return resolve();
  });
});

let result = ''

readFile('content1.txt', 'utf-8')
  .then(content1 => {
    result += content1
    return readFile('content2.txt', 'utf-8')
  })
  .then(content2 => {
    result += content2
    return readFile('content3.txt', 'utf-8')
  })
  .then(content3 => {
    result += content3
    return readFile('content4.txt', 'utf-8')
  })
  .then(content4 => {
    result += content4
    return writeFile('result.txt', result)
  })
  .then(() => {
    console.log('writing done!')
  })
  .catch(err => {
    throw err
  })