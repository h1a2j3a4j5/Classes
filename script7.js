let me = document.getElementById('click_on');
me.addEventListener("click",(click_on) =>  {
console.log('click!');
});

let events = document.getElementById('click_on');

events.addEventListener('click', (click_on) => {
let myP = document.createElement('p');
myP.innerHTML = 'hello world';
document.body.appendChild(myP);
});

let  title = document.getElementById('start');

let k = document.createTextNode('create-text');
k.innerHTML = 'create-text';
title.appendChild(k);

