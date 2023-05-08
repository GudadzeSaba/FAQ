const button = document.querySelectorAll(".faq");
const answer = document.querySelectorAll(".answer");
const question = document.querySelectorAll(".question");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    if (answer[i].classList.contains("hidden")) {
      answer[i].classList.remove("hidden");
      question[i].style.fontWeight = "700";
    } else {
      answer[i].classList.add("hidden");
      question[i].style.fontWeight = "400";
    }
  });
}
