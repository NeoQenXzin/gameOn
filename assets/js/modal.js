function editNav() {
  const topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
}
// toggle button color
let toggle = false

const toggleButton = document.querySelector('.fa');
toggleButton.style.color = '#fe142f';
toggleButton.addEventListener('click', () => {
  toggle = !toggle
  if (toggle) {
    toggleButton.style.color = 'white'
    toggleButton.style.textShadow = '0px 0 2px #fe142f';

  } else if (toggle === false) {
    toggleButton.style.color = '#fe142f';
    toggleButton.style.textShadow = '0px 0 2px white';
  }
})



// Selection de lien navbar  change couleur
const mainNavbar = document.querySelector('.main-navbar');
for (elm of mainNavbar.children) {
  elm.addEventListener('click', (e) => {
    for (let i = 0; i < mainNavbar.children.length; i++) {
      if (mainNavbar.children[i] === e.target) {
        mainNavbar.children[i].classList.add('active')
      }
       else if (mainNavbar.children[i] !== e.target) {
        mainNavbar.children[i].classList.remove('active')
      }
    }
  })
}



// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnClose = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const btnSubmit = document.querySelector(".btn-Submit");
const modalBody = document.querySelector(".modal-body");
const modalConfirm = document.querySelector(".modal-confirm");
const btnCloseModaleConfirm = document.querySelector(".btn-close-modal-confirm");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtnClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalBody.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  modalConfirm.style.display = "none";
}
// close modal form confirm
btnCloseModaleConfirm.addEventListener('click', () => {
  modalConfirm.style.display = "none";
  closeModal();
});