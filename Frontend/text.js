console.log("SRIT")

num=12;
console.log(num);
str="hi";
console.log(str);
bol=true;
bigint=54732836927343246;
const name="sabitha";
console.log(name);
const names="sabi";
console.log(names)
num2=12;
console.log(num+num2);
sum=0;
for(i=0;i<5;i++){
    sum=sum+i;
}
console.log(sum);
function generateMessage(name){
    return "welcome," +name+"! Good morning";
}
let message=generateMessage("sabitha");
console.log(message)

let person=details("sabitha","CSM",20,"srit");
console.log("Name:"+person.name);
console.log("Branch:"+person.branch);
console.log("Age:"+person.age);
console.log("College:"+person.college);

function details(name,branch,age,college){
    return {name,branch,age,college};
}
age=20;
let addage=age+2;
let subage=age-2;
let mulage=age*2;
let divage=age/2;

console.log(addage);
console.log(subage);
console.log(mulage);
console.log(divage);

console.log("Player Name:"+name)
pscore=50
let pscoreadd=pscore+2;
let pscoresub=pscore-2;
let pscoremul=pscore*2;
let pscorediv=pscore/2;

console.log(pscoreadd);
console.log(pscoresub);
console.log(pscoremul);
console.log(pscorediv);
//area of triangle
function areaoftriangle(base,height){
    Area=1/2*base*height;
    return Area
}

let Triangle=areaoftriangle(2,3);
console.log(Triangle)

//factorial number
let factorial=1
let number=5
for(i=1;i<=number;i++){
    factorial*=i;
}
console.log("Factorial of 5:"+factorial)