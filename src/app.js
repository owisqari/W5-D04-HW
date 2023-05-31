const commentInput = document.getElementById("commentInput");
const commentResult = document.getElementById("commentResult");
const commentButton = document.getElementById("commentBtn");
const commentDelete = document.getElementById("commentDelete");

commentButton.addEventListener("click", () => {
  const comment = commentInput.value;
  commentResult.innerHTML = comment;
});

commentDelete.addEventListener("click", () => {
  commentResult.innerHTML = "";
});

const like = document.querySelectorAll("#like");
const likeCount = document.querySelectorAll("#likeCount");
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", () => {
    likeCount[i].innerHTML = Number(likeCount[i].innerHTML, 10) + 1;
    jquery.data(like, "test", { test: likeCount[i].innerHTML });
    $(likeCount).test().text(jQuery.data(div, "test").test);
  });
}
