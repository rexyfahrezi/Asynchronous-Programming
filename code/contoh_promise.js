const fs = require('fs')

const readFile = (file, options) => new Promise((resolve, reject) => {
  fs.readFile(file, options, (err, isifile) => {
    if (err) return reject(err);
    return resolve(isifile);
  });
});

readFile('content.txt', 'utf-8')
  .then(result => {
    console.log('Baca file berhasil, isinya:', result)
  })
  .catch(err => {
    console.log('Terjadi error saat membaca file:', err)
  })