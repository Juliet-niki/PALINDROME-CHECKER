const button = document.querySelector("button");
const answer = document.getElementById("answer");

function Palindrome(e) {
  answer.display = "";
  answer.innerHTML = "loading..... Please wait";
  answer.style.color = "rgb(22, 22, 139)";

  const timeout = setTimeout(() => {
    const input = document.getElementById("input-text");
    const reversed = input.value
      .split("")
      .reverse("")
      .join("")
      .replace()
      .toLowerCase();

    if (input.value === "") {
      answer.innerHTML = "Please enter a word or number";
      answer.style.color = "#000";
    } else if (reversed === input.value.toLowerCase()) {
      answer.innerHTML = input.value + " is a Palindrome";
      answer.style.color = "#66dd29";
      input.value = "";
    } else {
      answer.innerHTML = input.value + " is not a Palindrome";
      answer.style.color = "#ff2900";
      input.value = "";
    }
  }, 900);
}

button.addEventListener("click", Palindrome);

document.getElementById("input-text").onkeydown = function (e) {
  if (e.keyCode == 13) {
    document.getElementById("btn").click();
  }
};

/*TERNARY statemt */
// const input =
//   input.value === ""
//     ? alert("please enter a task first")
//     : alert("please enter a task first");
