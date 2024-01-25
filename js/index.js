function toggleAnswer(id) {
  let answer = document.getElementById("plus_" + id);
  if (answer.style.display === "none") {
    answer.style.display = "block";
    answer.style.marginTop = "10px";
  } else {
    answer.style.display = "none";
  }
}
