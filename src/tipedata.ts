//! Tipe data Primitip

//todo 1. Boolean
//* tipe data ini terdiri dari "true" dan "false" maka selain ini dianggap bukan boolean
let isDone: boolean = true;
let isMarried: boolean = false;
isMarried = true //? no error
isDone= false
// isMarried=20 // error
console.log(typeof (isDone))

//todo 2. Number
//* tipe data in terdiri dari angka decimal()
let decimal: number = 6;
let hex: number = 0xf00d; //? prefix 0x
let binary: number = 0b1010;  //? prefix 0b
let octal: number = 0o744;  //? prefix 0o
decimal = 9
hex=0xfffffffffffff
//error
//decimal = "hello"
//hex= true
console.log(typeof(decimal))
console.log(typeof(hex))
console.log(typeof(binary))
console.log(typeof (octal))

//todo 3. String
let fristName: string = "Ilham"
let lastName: string = "Adi"
lastName= "hjj"
// lastName = 30; //error
fristName = fristName + " Irawan"

let sayHello: string=`hello ${fristName} , selamat pagi`
console.log(typeof(fristName))
console.log(typeof(fristName))
console.log(fristName)
console.log(sayHello)
