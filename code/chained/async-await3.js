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

async function mergeContent() {
  try {
    const result = await Promise.all([
      readFile('content1.txt', 'utf-8'),
      readFile('content2.txt', 'utf-8'),
      readFile('content3.txt', 'utf-8'),
      readFile('content4.txt', 'utf-8'),
    ]);

    console.log(result);
    await writeFile('result.txt', result.join(''))
  } catch (err) {
    throw err
  }

  return readFile('result.txt')
}

mergeContent();