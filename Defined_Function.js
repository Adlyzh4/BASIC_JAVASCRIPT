function pesan(){
    console.log("this is function")
}
pesan()


function score(team1,team2){
    if(team1 < team2){
    console.log("team 1 menang")
}else if(team2 > team1){
    console.log("team 2 menang")
}else{
    console.log("draw")
}
}
score(2,2)

function avg(a,b,c){
    d=(a+b+c)/3
    console.log(d)
}
avg(3,6,9)