let add = document.getElementById('one');
add.innerHTML = "two";

let p = document.createElement('p');
p.innerHTML = "github";
document.body.appendChild(p);
add.appendChild(p);

console.log(add);

let h = document.createElement('h1');
h.innerHTML = "i am learen javaskript";
h.appendChild(h1);