/*
function person(name, age, muka){
    this.name = name 
    this.age = age 
    this.muka = muka 
}
var p1 = new person("jeka", 37, "ganteng")
var p2 = new person("dias", 27, "jelek")

console.log(p1.name)
console.log(p2.muka)
*/

/*
function person(name,usia,warna){
    this.name = name
    this.usia = usia
    this.warna = warna
    this.changename = function changename(name){
        this.name = name
    }
}

var p = new person('dias', 30, 'putih')
p.changename('jeka')
console.log(p.name)
*/

/*
function bilangan(a,b){
    this.a = a
    this.b = b
    this.jumlah = function jumlah(a,b){
        c = a * b
        return c
    }
}
var hasil = new bilangan(3,2)
var x = hasil.jumlah (hasil.a, hasil.b)
console.log(x)
*/

/*
var course = new Array ('menjahit','berenang','memasak')
course[1] = 'menyanyi'
console.log(course[1])
*/

/*
var course = new Array()
course[0] = 'memasak'
course[1] = 'menyanyi'
course[2] = 'menjahit'
course[3] = 'menari'

*/

/*
var course = ['belajar','pintar','malas']
var menu = ['chicken', 'geprek', 'ayam bakar']
var concatarray = course.concat(menu)
console.log(concatarray)
*/
/*
var person ={ 
name : 'john',
age : 32,
}
var person2 = []
var a = person['name'] = 'john'
var b = person['age'] = 32
console.log(a)
console.log(b)
console.log(person['name'])
console.log(person['age'])
*/

/*
console.log(Math.PI)
console.log(Math.sqrt(81))
var random = Math.floor(Math.random()*10)
console.log(random)
*/

/*
function main() {
    var year = 2005
    
    //the output
    console.log(calcCent(year));
    
}

//complete the function
function calcCent(y){
    return Math.ceil(y/100)
}
main()
*/

// function main() {
//     var year = 2005
//     var month = 5
//     var day = 2
        
//     console.log(getWeekDay(year, month, day)); 
//     }

//     function getWeekDay(year, month, day) {
//     var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     var d = new Date(year, month, day);
//         //complete the function 
//         var day = d.getDay()
//         return names[day]
//     }
//     main()