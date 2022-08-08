let elForm = document.querySelector(".form");
let enterText = document.querySelector(".enter_text");
let elCheckbox = document.querySelector(".checkbox");
let elZalCheckbox = document.querySelector(".checkbox_zal")

let elP = document.querySelector(".result");

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  if (elCheckbox.checked == 1){
    elP.textContent = "Yomg'ir yog'moqda havo yugurish uchun noqulay"
  }
  else if(elZalCheckbox.checked == 1) {
    elP.textContent = "Zalga borsa boladi"
  }
  else if(enterText.value < 5 || enterText.value > 40) {
    elP.textContent = "Havo juda noqulay"
    return;
  }
  else if(enterText.value > 5 || enterText.value < 40) {
    elP.textContent = "Havo yugurish uchun qulay";
  }
})