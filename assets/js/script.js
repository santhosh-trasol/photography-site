document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");

  dropdownButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const dropdownContent = this.nextElementSibling;
      const dropdownIcon = this.querySelector(".dropdown-icon");

      // Toggle the dropdown content
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }

      // Toggle the rotation of the icon
      dropdownIcon.classList.toggle("rotate-icon");
    });
  });
});

// modal

// Get the modal and buttons
var modal = document.getElementById("myModal");
var openBtn = document.getElementById("openModalBtn");
var closeBtn = document.getElementById("closeModalBtn");

// Open the modal when the button is clicked
openBtn.onclick = function () {
  modal.style.display = "block";
};

// Close the modal when the close button is clicked
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close the modal when the user clicks outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
