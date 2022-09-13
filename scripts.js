
var acc = document.getElementsByClassName("question");
for(let i = 0; i < acc.length; i++){
  acc[i].addEventListener("click", function() {
    /* Toggle between hiding and showing the active panel */
    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}