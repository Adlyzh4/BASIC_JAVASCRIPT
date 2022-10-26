x  = 1
y = ("1")
var c = x + y
console.log(c)

var age = 20
if (age >= 18){
    console.log(age >= 18 ? true : false)
} 

const pilihan = 2;
//percabangan
if (pilihan == 1){
    console.log("light")
}else if (pilihan == 2){
    console.log("dark")
}else if (pilihan == 3){
    console.log("nocturne")
}else if (pilihan == 4){
    console.log("terminal")
}else {
    console.log("indigo")
}

//cara 2
switch(pilihan){
    case 1 :
    console.log("light")
    break
    case 2 :
    console.log("dark")
    break
    case 3 :
    console.log("nocturne")
    break
    case 4 : 
    console.log("terminal")
    break
    default :
    console.log("indigo")
}

console.log(pilihan == 1 ? "light" : pilihan == 2 ? "dark" : pilihan == 3 ? "nocturne" : pilihan == 4 ? "terminal" : "indigo" )


for (let i=10; i>0; i--){
    console.log(i)
}


var a = "50"
var b = "100"
console.log(a+b)


var c = "halo"
var d = "dias"
console.log(c+d)

