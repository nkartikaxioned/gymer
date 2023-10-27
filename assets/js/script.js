
const numCounter = document.querySelectorAll('.count'),
counterContainer = document.querySelector('.counter'),
nameField = document.querySelector('.name'),
surnameField = document.querySelector('.lastName'),
emaiL = document.querySelector('.workemail'),
subEmail = document.querySelector('.email'),
textField = document.querySelector('.text-box'),
errorTextContainer = document.querySelectorAll('.error-text'),
subBtn = document.querySelector('.subscribe-btn'),
submitBtn = document.querySelector('.submit-btn'),
hamburger = document.getElementById('.hamburger');
const errorMsg = 'Input field cannot be empty', noMsg = '';


const counterFunc = () => {

  numCounter.forEach((element) => {
    const speed = 10;
    const numberIncrement = () => {
      const targetNum = parseInt(element.dataset.target)
      let start = parseInt(element.innerHTML)
      if (start < targetNum) {
        let interval = setInterval(() => {
          start += targetNum / speed;
          element.innerText = `${Math.round(start)}`;
          if (start === targetNum || start >= targetNum) {
            clearInterval(interval)
          }
        }, 160);
      }
    }
    numberIncrement();
  })

}

window.addEventListener('scroll', function() {
  if( window.scrollY > counterContainer.offsetTop-400 ) {
    counterFunc();
  }
})

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
	
$('.services-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  validateForm(); 
  if(validateForm()){
    alert('Form Submitted Successfully.')
    clearForm();
  }
})

subBtn.addEventListener('click', (event) => {
  event.preventDefault();
  validateSubEmail()
  if(validateSubEmail()){
    alert('Subscribed Successfully.')
    clearForm();
  }
})

nameField.addEventListener('blur', () => {
  validateName();
})

surnameField.addEventListener('blur', () => {
  validateLastName()
})

emaiL.addEventListener('blur', (e) => { 
  validateEmail()
})

textField.addEventListener('blur', (e) => { 
  validateTextBox()
})

subEmail.addEventListener('blur', () => {
  validateSubEmail()
})

function validateForm() {
  console.log(validateName() , validateLastName() , validateTextBox() ,validateEmail());
  if(!validateName() || !validateLastName() || !validateTextBox() || !validateEmail()) {
  
  return false
  } else {
    return true
  }
}

function validateName() {
  const nameValue = nameField.value.trim();
  if (nameValue === '' || nameValue.length < 3 || !isNaN(nameValue)) {
    nameField.classList.add('error');
    if(nameValue.length < 3) {  errorTextContainer[0].innerText = "enter valid input"; }
    if(nameValue == '' || nameValue == null){ 
      errorTextContainer[0].innerText = errorMsg;
    } else if(!isNaN(nameValue)) {errorTextContainer[0].innerText = 'Name Cannot contain Number';}
    return false;
  } else {
    nameField.classList.remove('error');
    errorTextContainer[0].innerText = noMsg;
    return true;
  }
}

function validateLastName() {
  const lastname = surnameField.value.trim();
  if (lastname === '' || lastname.length < 3 || !isNaN(lastname)) {
    surnameField.classList.add('error');
    if(lastname.length < 3) {  errorTextContainer[1].innerText = "enter valid input"; }
    if(lastname == '' || lastname == null){
    errorTextContainer[1].innerText = errorMsg;
    } else if(!isNaN(lastname)){
      errorTextContainer[1].innerText = 'Last Name Cannot contain Number';
    }
    return false;
  } else {
    surnameField.classList.remove('error');
    errorTextContainer[1].innerText = noMsg;
    return true;
  }
}

function validateEmail() {
  const email = emaiL.value.trim();
  const validRegex =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if( email === '' || email.match(validRegex) == null ) {
    emaiL.classList.add('error');
     if(email == '') { errorTextContainer[2].innerText = 'field cannot be empty' }
     else if (email.match(validRegex) == null ) {  errorTextContainer[2].innerText = 'enter valid mail id'; }
    return false;
  } else {
    emaiL.classList.remove('error');
    errorTextContainer[2].innerText = noMsg;
    return true;
  }
}

function validateSubEmail() {
  const subemail = subEmail.value.trim();
  const validRegex =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if( subemail === '' || subemail.match(validRegex) == null ) {
    subEmail.classList.add('error');
     if(subemail == '') { errorTextContainer[0].innerText = 'field cannot be empty' }
     else if (subemail.match(validRegex) == null ) {  errorTextContainer[0].innerText = 'enter valid mail id'; }
    return false;
  } else {
    subEmail.classList.remove('error');
    errorTextContainer[2].innerText = noMsg;
    return true;
  }
}

function validateTextBox() {
  const position = textField.value.trim();
  if (position === '' || (position.length < 3)) {
    textField.classList.add('error');
    if(position == '' || position == null){
      errorTextContainer[3].innerText = errorMsg;
      }
      return false;
  } else {
    textField.classList.remove('error');
    errorTextContainer[3].innerText = noMsg;
    return true;
  }
}

function clearForm() {
  nameField.value = '';
  surnameField.value = '';
  textField.value = '';
  emaiL.value = '';
  subEmail.value = '';
}






