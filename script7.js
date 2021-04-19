let me = document.getElementById('click_on');

me.addEventListener("click",(click_on) =>  {
console.log('click!');
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