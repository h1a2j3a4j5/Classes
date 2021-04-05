const iair = function( sx ,fp){
    let sume = 1;
    for(let i = 0;i<fp;i++){
     sume *= sx;
    }
    return sume;
}
console.log(iair(2 , 10));


const minus = (r , t) => {
    return r - t;
}
console.log(minus(5 , 2));

const molti = (s , a ) => {
    return s + a;
}
console.log(molti(5 , 3));

const cefel = function(p , z){
    return p * z;
}
console.log(cefel(2 , 4));

//const num = d => d / d;
//console.log(num(20 ));

const way = function(shimi , dvd){
if(dvd==undefined) return - shimi;
else return shimi + dvd;
}
console.log(way(20));
console.log(way(20 , 4));

const ans = function(){
    console.log("didi");
}
ans();




const min = function(h , j ){
    if(j==undefined) return h;
    else return j;
    
}

console.log(min(0));
console.log(min(0 , 10)); 

function greet (who){
console.log("hello " + who);
}
greet("harry ");
console.log("bye");

/*let num2 = 18;
num2 = prompt(" Welcome entry over the age of 18 ");
console.log(num2);

if((num2==18) || (num2>18)){
    console.log("good luck");
}
else{
    console.log("You are not allowed to enter");
}
*/
const nim = function(yu , yt = 5){
    let cv = 1;
    for(let ch = 0;ch<yt;ch++){
        cv *= yu;
    }
    return cv;
}
console.log(nim(10));
console.log(nim(2 , 10));

for(let israel =1;israel<11;israel++){
    console.log("the israel",israel);
    for(let dahan = 0;dahan<israel;dahan++){
        console.log("the dahan",dahan,);
    }
}
const tamp = function(x , y){
    return x + y;
}
console.log(tamp(2 , 10));       





function hifa (ml , ed = 2){
return ml + ed;
}
console.log(hifa(10))
console.log(hifa(20 , 40));


function dreen (sde ,alert ){
    let ser = 1;
for(let fun = 1;fun<=alert;fun++){
     ser *=sde ; 
    }
return ser;
}
console.log(dreen(2 , 10));

let didi = 1;
for(let asi = 1;asi<=5;asi++){
   didi *= asi;
}
console.log(didi);  
function name(a , c) {
    return a + c;
}
console.log(name(2, 1));



let num = 1;
for( let w = 1;w<=4;w++){
   num *=w;
   console.log(num);
}
function  geli(zi) {
    let wa = 1;
    for(let vered = 1;vered<=zi;vered++){
       wa *= vered
    }
    return wa ;
}
console.log(geli(4));



let res = "";
                                
                                     //לוח הכפל//

for(let i = 1;i<=10;i++){
    for(let x = 1;x<=10;x++){
       res += i * x ;
    }
    res += "\n";
}
console.log(res);   



let mako = " hello " ;
console.log(mako + "wsb");

