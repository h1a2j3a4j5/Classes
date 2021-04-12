let add = document.getElementById('one');
add.innerHTML = "two";

let p = document.createElement('p');
p.innerHTML = "github";
document.body.appendChild(p);
add.appendChild(p);
console.log(add);

let h = document.createElement('p');
h.innerHTML = "i am learen javaskript";
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
