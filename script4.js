                                     //פונקציה בתוך פונקציה //
let one = "la";           
console.log(one + " liga ");

function two(factor) {
 return  function (params) {
       return factor * params; 
    }
}
let res = two(10);
console.log(res);
let x = res (5);
console.log(x);

                                   // מערכים //
 
let  num = [2 , 3 , 6 ,29 ,45]; 
console.log(num[2]);

for(let i = 0;i<3;i++){
    console.log(num[3]);  
    console.log(num); 
}

let necklace = ["yoni" , "moshe" , "gabi" , "dvd" , "yosi"];
console.log(necklace[3]);

necklace.push("avi");             //  הכנסת שם למערך בסוף//
console.log(necklace);

necklace.unshift("menachem");      // הכנסת שם למערך בהתחלה  //
console.log(necklace);

necklace.shift();                 // הסרה שם מהמערך בהתחלה  //
console.log(necklace);

necklace.pop();                   // הסרת שם מהמערך בסוף  //
console.log(necklace);

let index = necklace.lastIndexOf("moshe");       // מה המיקום במספר של כל איבר  //
//console.log(necklace);
console.log("index",index);


let moltiple = ["yoni" , "moshe" , "gabi" , "dvd" , "yosi" , "haim" , "yaron"  , "yovav" , "liron" , "hodaya"];     //  להסיר כמה איברים מהאמצע //
let splicemoltiple = moltiple.splice(3);      
//console.log("splicemoltiple",splicemoltiple);
console.log("moltiple",moltiple);

let animals = ["yoni" , "moshe" , "gabi" , "dvd" , "yosi" , "haim" , "yaron"  , "yovav" , "liron" , "hodaya"];     //  להסיר כמה איברים מהאמצע פחות מומלץ//
console.log(animals.slice(2,3));


let names = ["yoni" , "moshe" , "gabi" , "dvd" , "yosi"];   //  לדעת כמה יש לי איברים יש לי במערך   // 

for(let y = 0;y<=names.length -1 ;y++){
   console.log(y);
    console.log(names[y]);
}



names.forEach( (u) => {       //  לדעת כמה יש איברים במערך אופציה ב  //
   return u;
    
})
   console.log(names);



   const avi = ['e' , 'w' , 'i'];               //  לדעת כמה יש איברים במערך אופציה ב  //   
avi.forEach (q =>
    console.log(q));



avi.forEach( (f) => {                          //  לדעת כמה יש איברים במערך אופציה ב  //   
    return f;
})
console.log(avi);



names.forEach( (d) => {
   
 d = " hello " + d;
   console.log(d);
})




for(let entry of names) {                   //    לדעת כמה אברים יש במערך אופציה ג   //
    console.log("entry",entry);
} 

const citi = ["hazor" , "zefat" , "tri" , "fol" , "jhy" , "fia" , "dori"];
const center = citi.filter( (citi) => {
    return citi.length <= 3;
})
console.log(center);



/*let sum = names.filter((z) => {
    return z[0] == "y" ; 
})
console.log("sum",sum); */


let ari1 = [ 4 , 64 , 23];             //  לחבר שני מערכים יחד  //
let ari2 = [3 , 5 , 10];
let ari3 = ari1.concat(ari2);
console.log(ari3);



                                          //   רקורסיה (עצרת)  //

let Recursion = (num) => {
    if(num==10){
        return 10;
    }
    else {
        return ( num * Recursion (num + 1));
    }
}
console.log(Recursion(1));




let Recursion2 = (num2) => {
    if(num2==1){
        return 1;
    }
    else {
        return ( num2 * Recursion2 (num2 - 1));
    }
}
console.log(Recursion2(5));





   //console.log(sory);





//console.log(sory);




   //תרגיל//

// const name = ["avi" , "yosi" , "dvd" , "rafi" , "menachem"];
// let res = name;
// console.log(res);

// let Scores = [35 , 59 ,79 ,90 ,100];
// let rse = Scores;
// console.log(rse);

// let together = name.concat(Scores);
// console.log(together);

// let sum = name.filter((e) => {
//     return e[0]  == 'a' ;
    
// })
// console.log("sum",sum);

// let xl = Scores.filter((a) => {
//     return a[1] == 35 ;
// })
// console.log("xl",xl);

// name.push("haim");
// console.log(name);

// Scores.push(80);
// console.log(Scores);

// let removaStudent = name ;
// spliceremovaStudent  = removaStudent.splice(5);
// console.log("removaStudent",removaStudent);

// let Removalgrade = Scores;
// spliceRemovalgrade = Removalgrade.splice(5);
// console.log("Removalgrade",Removalgrade);





