//! tipe data enum

//? data data yang inputannya sudah fix maka disimpannya di enum  contoh jensis kelamin kategori

enum gender{ Male, Female, Unknown }
let jenisKelamin = gender.Male
console.log(jenisKelamin)

//* merubah nilai default enum
enum li{ Life = 20, live = 10, enjoy = 99 }
let myLife = li.enjoy
console.log(myLife);

enum category{ sport = "badminton", intelegen = "proggrammer", pray = "everday" }
let getCategory = category.sport
console.log(getCategory)

