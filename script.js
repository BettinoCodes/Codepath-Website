
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length){
    slideIndex = 1;
  }
  if (n < 1){
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

document.getElementById("darkmode-button").addEventListener("click", toggleDarkMode);



function addSignature(name) {
  var listItem = document.createElement("li");

  listItem.textContent = name;

  var signatureList = document.getElementById("signatureList");

  signatureList.appendChild(listItem);
}


var signButton = document.querySelector('.signButton');

const validateForm = (event) => {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  let containsErrors = false;
  
  if (name.length < 2) {
    nameInput.classList.add("error");
    containsErrors = true;
    nameInput.value = "";
  }

  if (!name && !email) {
    nameInput.classList.add("error");
    emailInput.classList.add("error");
    containsErrors = true;
  }

  if (!name && email) {
    nameInput.classList.add("error");
    containsErrors = true;
  }

  if (name && !email) {
    emailInput.classList.add("error");
    containsErrors = true;
  }


  if (email.length < 2 || !isValidEmail(email)) {
    emailInput.classList.add("error");
    emailInput.value = "";
    containsErrors = true;
    return;
  }

  if (!containsErrors) {
    togglePopup(`Thank you ${name} from ${email} for signing the petition.`);
    addSignature(`${name} from ${email} signed the petition.`);
    nameInput.value = "";
    emailInput.value = "";
  }

  nameInput.classList.remove("error");
  emailInput.classList.remove("error");
};

var signButton = document.querySelector('.signButton');
signButton.addEventListener('click', validateForm);


function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

window.addEventListener('scroll', () => {
  const quotes = document.querySelectorAll('.s3-quote');
  const paragraphs = document.querySelectorAll('.s3-paragraph');

  const screenHeight = window.innerHeight;

  for (let i = 0; i < quotes.length; i++) {
    const quote = quotes[i];
    const quotePosition = quote.getBoundingClientRect().top;

    if (quotePosition < screenHeight && quotePosition > 0) {
      quote.classList.add('show');
    } else {
      quote.classList.remove('show');
    }
  }

  for (let j = 0; j < paragraphs.length; j++) {
    const paragraph = paragraphs[j];
    const paraPosition = paragraph.getBoundingClientRect().top;

    if (paraPosition < screenHeight && paraPosition > 0) {
      paragraph.classList.add('show');
    } else {
      paragraph.classList.remove('show');
    }
  }
});


function togglePopup(message) {
  var popup = document.getElementById("popup-1");
  var popupMessage = popup.querySelector(".content h1");

  if (message) {
    popupMessage.textContent = message;
  }

  popup.classList.toggle("active");

  if (popup.classList.contains("active")) {
    setTimeout(function() {
      popup.classList.remove("active");
    }, 5000);
  }
}

function toggleLogin() {
  var popup = document.getElementById("popup-1-1");
  popup.classList.toggle("active");

}

const buttons = document.querySelectorAll('.survey-button');
const submitButton = document.querySelector('.survey-submit');
let selectedCount = 0;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    const button = this;
    if (button.classList.contains('selected')) {
      button.classList.remove('selected');
      selectedCount--;
    } else {
      if (selectedCount < 3) {
        button.classList.add('selected');
        selectedCount++;
      }
    }
  });
}

