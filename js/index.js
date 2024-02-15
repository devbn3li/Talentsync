let box = document.getElementsByClassName("box");
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.paddingTop = "0px"
      content.style.maxHeight = null;
      box.style.border = "none";
    } else {
      content.style.paddingTop = "10px"
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
