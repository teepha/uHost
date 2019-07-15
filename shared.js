const backDrop = document.querySelector(".backdrop");
const modalPopup = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan .button");
const closeModalButton = document.querySelector(".modal__action--negative");

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function() {
    modalPopup.style.display = "block";
    backDrop.style.display = "block";
  });
}

backDrop.addEventListener("click", closeModal);
closeModalButton.addEventListener("click", closeModal);

function closeModal() {
  modalPopup.style.display = "none";
  backDrop.style.display = "none";
}

