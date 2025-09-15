function compoundinterest(principleamount,rate,time){
    interest=principleamount*(Math.pow((1+rate/100),time));
    return interest
}
let CI=compoundinterest(10,4,2);
console.log(CI)


let principleamount=prompt("Enter number:");
let rate=prompt("Enter rate:");
let time=prompt("Enter time:");
let CI1=compoundinterest(principleamount,rate,time);
console.log(CI1);