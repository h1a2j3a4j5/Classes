                                            // אובייקט. ואובייקט בתוך אובייקט ועם פונקציות ומערכים בייחד  //
let firstName = "yoni";
let surName = "meir";
let lastName = "hajaj";
let age = "24";
let walla = "22";
let grade = [23 , 67 , 89 , 45];
let happy = {
    ynuar: 1,
    week: 3,
}

let day = {
    firstName,
    surName,
    lastName,
    age,
    walla,
    grade,
    happy,
    sum: function chek() {
      return `this is ${this.firstName} and  ${this.surName} final ${this.lastName}`;
   },
    price: function calculator () {
       return this.age * this.walla;
   },
    type: function calculation (x , k) {
       return x + k;
   },
    num: function well (a , v) {
       let result = 1;
       for(let i  = 1;i<=v;i++){
       result *= a;
       }
       return result;
   },
    getFullName () {
        return `this is array: ${this.grade} and objekt: ${this.firstName}`;
       
    } ,

}
console.log(day);
console.log(day.grade);
//grade.push("dvd");
console.log(grade);
console.log(day.sum())
console.log(day.price());
console.log(day.type(2 , 3));
console.log(day.num(2 , 10));
console.log(day.getFullName());



                                                                 //  פונקציה בנאית = אופציה ב' לאובייקט//
function cars (car , model) {
    this.car = car;
    this.model = model;
    this.fullName = function () {
        return `this is: ${this.car} and so: ${this.model}`;
    }

}
let dodo = new cars("siat" , "sobaru");
console.log(dodo.fullName());
console.log(dodo);


                                                                    //class = אופציה ג' לאובייקט//

class didi  {
       constructor (call , street , banna , important){
        this.call = call;
        this.street = street;
        this.banna = banna;
        this.important = important;
        this.marks = [];
       }
        getFullAnd () {
            return `this is ${this.important} and ${this.street}`;
        }

        setMarks (change) {
            this.marks.push(change);
        }
}
let fal = new didi("0234845" , "hanas" , "banna" , "yoni");
// let fal = new didi ("yoni",new Date(1992 , 6 ,1));              //שעון עכשווי  //
// console.log(fal);


console.log(fal);
console.log(fal.important);
console.log(fal.getFullAnd());



fal.setMarks(100);
fal.setMarks(95);
fal.setMarks(85);
fal.setMarks(50);
console.log(fal);

