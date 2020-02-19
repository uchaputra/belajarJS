// penulisan variabel ada 3 didalam js
//var dan let bisa dirubah nilainya
var message = "hello coding"; //var berlaku disemua tempat bisa dirubah di semua tempat
let msg = 'halo'; //let berlaku di satu tempat 

if(true){
    var message = 1; //pembuktian var bisa di akases dimana saja
    let msg = 2; //let tidak berubah karna hanya bisa di akses satu tempat yang sama
}
msg = 'hola berubah';
//tidak bisa dirubah karna nilai nya sudah constan
const msg2 = 'koding';

console.log(message);
console.log(msg);