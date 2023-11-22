// champs formulaire
const form = document.querySelector("form");
const firstname = document.querySelector("#first");
const lastname = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const radios = document.getElementsByName("location");
const radiosMsgPosition = document.querySelectorAll(".checkbox-input[type=radio]");
const checkbox1 = document.querySelector("#checkbox1");
const checkbox2 = document.querySelector("#checkbox2");
const btnClick = document.querySelector(".btnSubmit");
const emptyPlaceError = document.querySelector('#emptyPlaceError')

// Regex
const firstRegex = /^[a-zA-Z ]+$/;
const lastRegex = /^[a-zA-Z ]+$/;
const emailRegex = /\S+@\S+\.\S+/;
const birthdateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
const quantityRegex =  /^[0-9/ ]+$/;
//message erreur
const formDataName = document.querySelectorAll('.form-data ');
const firstError = "Le prénom doit comporter au moins 2 caractères majuscule ou minuscule";
const lastError = "Le nom doit comporter au moins 2 caractères majuscule ou minuscule";
const emailError = "Entrez un email valide";
const birthdateError = "Sélectionner une date";
const quantityError = "Vous devez renseigner un nombre";
const radioError = "Vous devez choisir un tournoi";
const checkbox1Error = "Vous devez accepter les conditions générales";

const emptyField = "veuillez renseigner tout les champs";





//fonction ajouter message erreur
function addDataError(inputName, errorMsg){
  inputName.parentElement.setAttribute('data-error-visible', 'true')
  inputName.parentElement.setAttribute('data-error', errorMsg)
}
//fonction supprimer message erreur
function removeDataError(inputName){
  inputName.parentElement.removeAttribute('data-error-visible')
  inputName.parentElement.removeAttribute('data-error')
}

// Test et validation des champs avec affichage et suppression message erreur

//test prénom
firstname.addEventListener('input', () => {
  if (firstname.value.length < 3 || firstRegex.test(firstname.value) == false ) {
    addDataError(firstname, firstError)
    return false
  }
  if (firstname.value.length < 3 || (firstRegex.test(firstname.value) == true)) {
    removeDataError(firstname)
    return true
  }
})
//test nom
lastname.addEventListener('input', () => {
  if (lastname.value.length < 3 || lastRegex.test(lastname.value) == false ) {
    addDataError(lastname, lastError);
    return false
  }
  if (lastname.value.length < 3 || (lastRegex.test(lastname.value) == true)) {
    removeDataError(lastname);
    return true
  }
})
//test email
email.addEventListener('input', () => {
  if (email.value.length < 5 || emailRegex.test(email.value) == false ) {
    addDataError(email, emailError)
    return false
  }
  if (email.value.length < 5 || (emailRegex.test(email.value) == true)) {
    removeDataError(email)
    return true
  }
})
//test Quantité de participation tournoi 
function testQuantity() {
  if (quantityRegex.test(quantity.value) == false ) {
    addDataError(quantity, quantityError)
    return false
  }
  if (quantityRegex.test(quantity.value) == true && quantity.value !== null) {
    removeDataError(quantity)
    return true
  }
}
//test birthdate
function testBirthdate() {
    if (birthdateRegex.test(birthdate.value) === true) {
      formDataName[3].removeAttribute('data-error-visible')
      formDataName[3].removeAttribute('data-error')
      return true
    }
  if (birthdateRegex.test(birthdate.value) === false ) {
    formDataName[3].setAttribute('data-error-visible', 'true')
    formDataName[3].setAttribute('data-error', birthdateError)
  }
}
//test location radio
function testRadios(){

for(let i = 0 ; i < radios.length ; i++){
  if(radios[i].checked === true){
    formDataName[5].removeAttribute('data-error-visible')
    formDataName[5].removeAttribute('data-error')
    return true
  }else{
    formDataName[5].setAttribute('data-error-visible', 'true')
    formDataName[5].setAttribute('data-error', radioError)
  }
}
}
//test checkbox
function testCheckbox() {
  if( checkbox1.checked === true){
    removeDataError(checkbox1)
  }
  else{
    addDataError(checkbox1, checkbox1Error)
  }
}



//Soumission du formulaire 
//bouton submit
form.addEventListener('submit', (e) => {
  testBirthdate()
  testQuantity()
  testRadios()
  testCheckbox()
  testValueNotEmpty()
  // console.log(testValueNotEmpty());
  validate()
  if (validate() === true) {
    modalBody.style.display = "none";
    modalConfirm.style.display = "flex"
    e.preventDefault()
  }
  else{
    console.log('erreur lors de la validation ');
    e.preventDefault()
  }
  })

  // test verification que les valeurs ne soit pas vide
function testValueNotEmpty() {
  let falseCounter = 0;
  if(firstname.value === ""){
    falseCounter++;
  }
  if(lastname.value === ""){
    falseCounter++;
  }
  if (email.value === ""){
     falseCounter++;
  }
  if (quantity.value === "") {
    falseCounter++;
  }
  if (falseCounter > 0){
    addDataError(emptyPlaceError, emptyField)
    console.log(falseCounter);
  }
  if(falseCounter === 0) {
    removeDataError(emptyPlaceError)
    return true
  } 
  falseCounter = 0;
}


// fonction  Verification que tous les champs soient correctes
function validate(){
  testValueNotEmpty()
  if(
    firstname.value.length > 2 && (firstRegex.test(firstname.value) === true) &&
    lastname.value.length > 2 && (lastRegex.test(lastname.value) === true) &&
    email.value.length > 5 && (emailRegex.test(email.value) === true) &&
    quantityRegex.test(quantity.value) === true && quantity.value !== null &&
    birthdateRegex.test(birthdate.value) === true &&
    testRadios() === true &&
    checkbox1.checked === true &&
    testValueNotEmpty() === true  ){
    return true
  }
  else{
    console.log("probleme fonction validate")
    console.log(testValueNotEmpty());
    return false

  }
}


