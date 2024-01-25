function toggleAnswer(id) {
  let answer = document.getElementById("plus_" + id);
  let box = document.getElementById("box" + id);
  const list = box.classList;
  let image = document.getElementById("image" + id);

  if (answer.style.display === "none") {
    answer.style.display = "block";
  } else if (answer.style.display === "block"){
    answer.style.display = "none";
  }
  if (list.contains("box")) {
    box.classList.remove("box");
    box.classList.add("rm-box");
    image.src = "./images/pluscircle.svg";
  } else if (list.contains("rm-box")) {
    box.classList.remove("rm-box");
    box.classList.add("box");
    image.src = "./images/minuscircle.svg";
  }

}
