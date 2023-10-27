
const numCounter = document.querySelectorAll('.count'),
counterContainer = document.querySelector('.counter');

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


//

submitButton.addEventListener('click', (e) => { 
  e.preventDefault();
  validateForm(); 
  if(validateForm()){
    alert('Form Submitted Successfully.')
    clearForm();
  }
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
  const nameValue = fieldName.value.trim();
  if (nameValue === '' || nameValue.length < 3 || !isNaN(nameValue)) {
    fieldName.classList.add('error');
    if(nameValue.length < 3) {  errorTextContainer[0].innerText = "enter valid input"; }
    if(nameValue == '' || nameValue == null){ 
      errorTextContainer[0].innerText = errorMsg;
    } else if(!isNaN(nameValue)) {errorTextContainer[0].innerText = 'Name Cannot contain Number';}
    return false;
  } else {
    fieldName.classList.remove('error');
    errorTextContainer[0].innerText = noMsg;
    return true;
  }
}

function validateLastName() {
  const lastname = fieldSurname.value.trim();
  if (lastname === '' || lastname.length < 3 || !isNaN(lastname)) {
    fieldSurname.classList.add('error');
    if(lastname.length < 3) {  errorTextContainer[1].innerText = "enter valid input"; }
    if(lastname == '' || lastname == null){
    errorTextContainer[1].innerText = errorMsg;
    } else if(!isNaN(lastname)){
      errorTextContainer[1].innerText = 'Last Name Cannot contain Number';
    }
    return false;
  } else {
    fieldSurname.classList.remove('error');
    errorTextContainer[1].innerText = noMsg;
    return true;
  }
}

function validateEmail() {
  const email = workemail.value.trim();
  const validRegex =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if( email === '' || email.match(validRegex) == null ) {
    workemail.classList.add('error');
     if(email == '') { errorTextContainer[6].innerText = 'field cannot be empty' }
     else if (email.match(validRegex) == null ) {  errorTextContainer[6].innerText = 'enter valid mail id'; }
    return false;
  } else {
    workemail.classList.remove('error');
    errorTextContainer[6].innerText = noMsg;
    return true;
  }
}

function validateTextBox() {
  const position = fieldPosition.value.trim();
  if (position === '' || /^[a-zA-Z ]$/.test(position)) {
    fieldPosition.classList.add('error');
    errorTextContainer[2].innerText = errorMsg;
    return false;
  } else {
    fieldPosition.classList.remove('error');
    errorTextContainer[2].innerText = noMsg;
    return true;
  }
}

function clearForm() {
  fieldName.value = '';
  fieldSurname.value = '';
  fieldPosition.value = '';
  fieldcompany.value = '';
  companyType.value = ''; 
  country.value = '';
  workemail.value = '';
  subscribe[0].checked = false;
  subscribe[1].checked = false;
  subscribe.forEach((sub, index) => {
    sub.classList.remove('error');
 })
}






