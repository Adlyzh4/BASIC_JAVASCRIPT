function person(name, age, muka){
    this.name = name 
    this.age = age 
    this.muka = muka 
}
var p1 = new person("jeka", 37, "ganteng")
var p2 = new person("dias", 27, "jelek")

console.log(p1.name)
console.log(p2.muka)