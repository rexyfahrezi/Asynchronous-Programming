let janji = new Promise((resolve, reject) => {
  resolve('Janji berhasil ditepati');
  // reject('Janji gagal');
});

janji
.then(handleResolve,handleReject)
.catch((error) => { console.log(error)})
.finally(console.log('Promise dijalankan'));

function handleResolve(result) {
  console.log(result);
}

function handleReject(result) {
  console.log(result);
}