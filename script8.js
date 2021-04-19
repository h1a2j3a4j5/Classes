let add = document.querySelectorAll(".nav-link");
let tabPane = document.querySelectorAll(".tab-pane");
let chooseTab;




add.forEach(el => {
    el.addEventListener("click", ev => {
        chooseTab = ev.target.id;
        add.forEach(i => {
          i.className = "nav-link";
      });
      tabPane.forEach(iTab => {
        iTab.className = "tab-pane";
      if(iTab.getAttribute("aria-labelledby") ==  chooseTab){
        console.log(iTab);
        iTab.setAttribute("class" , "tab-pane active");
      }
    });
     console.log("event");
      console.log(ev);
      ev.target.setAttribute("class", "nav-link active");
    });
});
