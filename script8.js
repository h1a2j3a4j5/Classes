let add = document.querySelectorAll(".nav-link");


add.forEach(el => {
    el.addEventListener("click", ev => {
      add.forEach(i => {
          i.className = "nav-link";
      })
      console.log("ev");
      console.log(ev);
      ev.target.setAttribute("class", "nav-link active");
    });
});
