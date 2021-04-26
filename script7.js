let me = document.getElementById('click_on');

me.addEventListener("click",(click_on) =>  {
console.log('click!');
click_on.stopPropagation();
click_on.preventDefault();
});

let events = document.getElementById('click_on');

events.addEventListener('click', click_on => {
let myP = document.createElement('p');
myP.innerHTML = 'hello world';
document.body.appendChild(myP);
click_on.stopPropagation();
console.log(click_on);
});

let  title = document.getElementById('start');


let k = document.createTextNode('create-text');
k.innerHTML = 'create-text';
title.appendChild(k);

let A = document.createElement('h1');
A.innerHTML = "i am learn git now";
document.body.appendChild(A);

A.style.width = "500px";
A.style.backgroundColor = "green";
A.style.height = "500px";


let add = document.getElementsByClassName("one");
for(pure of add){
    pure.style.width = "500px";
    pure.style.backgroundColor = "green";
    pure.style.height = "500px";
}

let plus = document.getElementById("mouse");

plus.addEventListener("mousemove" , move => {
console.log("mousemove");
move.stopPropagation();
console.log(move);
});