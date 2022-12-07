const glyphStates = {
  "♡": "♥",
  "♥": "♡",
};
const colorStates = {  red: "",
"": "red",
};
// STEP 1: The line of code below is what lets JavaScript find the elements that
// we want to make clickable. Without JavaScript, clicking on these heart shapes
// does nothing. Uncomment the code and refresh the demo page. 
const articleHearts = document.querySelectorAll(".like-glyph");
function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
  .then(function (serverMessage) {
    alert(serverMessage);
    heart.innerText = glyphStates[heart.innerText];
    heart.style.color = colorStates[heart.style.color];
  })
  .catch(function (error) {
    alert("Something went wrong!");
  });
}
for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}
function mimicServerCall() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });