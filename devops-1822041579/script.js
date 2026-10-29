const button = document.getElementById("changeText");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "JavaScript hoạt động bình thường!";
});
