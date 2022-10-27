//? array adalah kumpulan data yang banyak kedalam suatu wadah / larik

let names: string[] = ["ilham", "adi", "Irawan"];
let angka: Array<number> = [2, 1, 2];
// console.log(names);
// console.table(names);

//! tipe data any
let bebas: any = "hello any"
bebas = 20;
bebas = [];
bebas = true;
//==================END=============
//! manipulasi data Array
//* 1. menampilkan isi data array
console.table(names);
console.table(angka);
console.log(names[0])
console.log(angka[2])

//* 2. menambahkan data array
names.push("Diningrat")
console.table(names)
angka.push(7)
console.table(angka)

//* 3. mengubah data array
names[3] = "wijaya"
console.log(names)
angka[0] = 7;
console.log(angka)

//* 4. mengubah data array
delete names[2];
console.log(names);

delete angka[2];
console.log(angka);
//console.log(typeof (names))
//todo 2. array tuple
console.log("\n" + "array tuple")
let villages: [string, number, boolean] = ["pangalengan", 1000, true];
let address: [string,string, string, number, boolean]= ["jalan","Jakarta","Bandung",7,true]
//==================END=============

//! manipulasi array tuple
//* 1. menampilkan isi data array
console.table(villages)
// console.table(address)
console.log(villages[0])
// console.log(address[2])
//* 2. untuk menambahkan array kedalam array tuple itu  tidak bisa karena sudah ditentukan panjang array dan tidak bisa ditambahkan
//* 3. mengubah data array tuple
villages[0] = "Jakarta"
console.log(villages)

address[0] = "street"
console.log(address)

//* 4. Menghapus Data array tuple
