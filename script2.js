const num = function (h){           // פונקציות   //
    return h + h;
}
console.log(num(12));


const ram = function(t,e) {
    return t * e;
}
console.log(ram(20 , 50));
console.log(ram(67 , 34));


const myName = function(){
   console.log("play");
}
 myName();

 const hi = function(well){
    console.log("hello " + well );
 }

hi( "dvd" );
hi( "jain");
hi( "moshe");

       
                                             // טווח   //
let e = 10;
if(e==10){
  let u = 30;
  console.log(u);
  console.log(e);
}
console.log(e);

const halve = function(n) {
    return n / 2;
  }
  
  let n = 10;
  console.log(halve(100));
  
  console.log(n);
  
                                                   // קיצור  דרך של פונקציה   //                                                   
  
const Shortcut = (f) => {    
 return f * f;
}
console.log(Shortcut(5));

                                                  // קיצור  דרך של פונקציה   //

const Shortcuts = k =>   k + k;

console.log(Shortcuts(10));



const horn = () => {
    console.log("Toot")
}

horn();


for(let q = 0; q<=10;q++){
    console.log("q is :" + q);                            
    for(let c = 0;c<=10;c++){
    console.log(q,c);
}
}


const power = function(a,b){
    let ans = 1;
    for(let count = 0;count<b;count++){
        ans *= a;
    }
    return ans;
}
console.log(power(3,12));



const sum = function(e,z){
    return e + z ;
}
console.log(sum(5,9));




let apeer = 200;

  function moltiple (arg){
    apeer = 15;
    return arg - apeer;
}
moltiple (70);
apeer = 100;
moltiple (100);

console.log(moltiple(50));
console.log(apeer);

let way = " ";
for(let zero = 1;zero<11;zero++){
    way+=" # ";
    console.log(way);
}



for(let as = 1;as<6;as++){
    console.log("as",as);
    for(let year = 0;year<6;year++){
        console.log("year",year);
    }
}


let  free =" ";

 for (let one =1;one<6;one++){
     for(let two =1;two<one;two++){
    
     free += " # ";
     console.log(free);
    }
                                                 //ארגומנטים //
 }
const see = function (we){
    return we * we;
}
console.log(see(4, true ,"good"));

const wer = function (p,o){
 if(o==undefined) return -p;
 else return p - o;
}
console.log(wer(10));
console.log(wer(10 , 5));

const citi = function (base , som = 5){
    let result = 1;
    for(let xl = 0; xl<som;xl++){
        result *= base;
    }
    return result;
}
console.log(citi(4));
console.log(citi(2 , 6));

const mdrid = function (vl , rm){
    if(rm==undefined)
        return - vl;
    
    else 
        return vl - rm; 
        
}
console.log(mdrid(10));
console.log(mdrid(10 , 15));



let sory = 1;                                   //  עצרת   //
 
for(let full = 1;full<=5;full++){                           
       sory *= full;
       console.log(sory);
}

                                                //   חזקות   //
let url = 1;
for(let scoop = 1;scoop<=5;scoop++){
    url *= 5;
    console.log(url);
}



let fair = 5;

while(fair<=1000){                                   //  while = חזקות //
    console.log(fair);
     fair *= 5;
     
}

                                                    //   while = עצרת   //
   let hiv = 1;
   let vodka = 1;

   while(hiv<=5) {
       vodka *= hiv;
       console.log(vodka);
       hiv++;
   }


                                      // while do  = חזקה //
let goal = 5;
do{
    console.log(goal );
   goal  *= 5;
}while(goal <=1000);
                            

                                          // while do = עצרת  //
let par = 1;
let soon = 1;
do{
     soon *= par;
     console.log(soon);
     par++;
}while(par<=5);
