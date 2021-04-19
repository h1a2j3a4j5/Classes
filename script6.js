let add = document.getElementById('one');
add.innerHTML = "two";

let w = document.getElementById("par");

let p = document.createTextNode("new-par");
p.innerHTML = "new-par";
w.appendChild(p);



let h = document.createElement('p');
h.innerHTML = "i am learn javascript";
document.body.appendChild(p);

let now = document.getElementById('first');
now.style.width = '100px';
now.style.color = 'red';
now.style.height = '50px';


let dom = document.getElementsByClassName('box');

for(k of dom){
    k.style.width = '100px';
    k.style.backgroundColor = 'green';
    k.style.height = '50px';  
}
let s = document.querySelectorAll('.box');
console.log(s);

let creat = document.createElement('h1');
creat.innerHTML = "title";
document.body.appendChild(creat);
