function p1() {
  console.log('Proses 1 Selesai!');
}

function p2(callback) {
  setTimeout(() => { 
    console.log('Proses 2 Selesai!');
    callback();
  },1000); // tunda selama 1 detik
}

function p3() {
  console.log('Proses 3 Selesai!');
}

p1();
p2(p3);
