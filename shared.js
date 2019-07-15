const backDrop = document.querySelector(".backdrop");
const modalPopup = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan .button");
const closeModalButton = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

// console.dir(backDrop.getElementsByClassName.backgroundImage);
// console.dir(backDrop.getElementsByClassName["background-image"]);

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function() {
    // modalPopup.style.display = "block";
    // backDrop.style.display = "block";
    // modalPopup.className = ".open";  //This will override the complete class list
    modalPopup.classList.add("open");
    backDrop.classList.add("open");
  });
}

backDrop.addEventListener("click", function() {
  closeModal();
});

if (closeModalButton) {
  closeModalButton.addEventListener("click", closeModal);
}

function closeModal() {
  if (modalPopup) {
    modalPopup.classList.remove("open");
  }
  backDrop.classList.remove("open");
}

toggleButton.addEventListener("click", function() {
  let value = mobileNav.classList.contains("open");

  if (value) {
    mobileNav.classList.remove("open");
  } else {
    mobileNav.classList.add("open");
  }
});
