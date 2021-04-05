let Title = "MoroccanCuisine"; 
let AuthorsName = 1979;
let releaseDate =  "WeissInstitute";
let NamePublishing = "yoni";
let BookDescription = "All about the old and authentic Moroccan cuisine";
let array = ["MoroccanCuisine" , "WeissInstitute" ,"yoni" ,"All about the old and authentic Moroccan cuisine" , 1979];

let objekt ={
    Title,
    AuthorsName,
    releaseDate,
    NamePublishing,
    BookDescription,
    array,
    The_details_of_the_book: function name() {
        return `this is: ${this.Title} and: ${this.AuthorsName}`;
    },
    Continue_the_details: function books() {
        return `this is: ${this.releaseDate} and: ${this.NamePublishing} last name: ${this.BookDescription}`;
    },
    set Add_a_book(add) {
        [this.name] = add.split(" ");
    }
};
console.log(objekt);
console.log(objekt.The_details_of_the_book());
objekt.Add_a_book = "Tripolitan cuisine";
console.log(objekt.name);
console.log(objekt);
for(var prop in objekt){
    console.log(prop);
}
array.push("Persian cuisine");
console.log(array);
array.pop();
console.log(array);
array[0] = "The most perfect Moroccan cuisine";
array[5] = "The least successful Persian cuisine";
console.log(array);

for(let k = 0;k<array.length;k++){
    console.log(k,array);
}
objekt[0] = "Tunisian cuisine";
console.log(objekt);

