document
  .getElementById("Number-card-container")
    .addEventListener("click", function (e) {
      if (e.target.classList.contains("heart-btn") || e.target.classList.contains("fa-heart")) {
          let heartCountElement = parseInt(document.getElementById("heart-count").innerText);
          document.getElementById("heart-count").innerText = heartCountElement + 1;
        // console.log(heartCountElement);
      }
  });
