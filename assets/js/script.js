
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
dayss = document.querySelectorAll('.day-common'),
timee = document.querySelector('.time'),
customerss = document.querySelector('.customers'),
hamBar1 = document.querySelector('.bar.first'),
hamBar2 = document.querySelector('.bar.second'),
hamBar3 = document.querySelector('.bar.third'),
navBar = document.querySelector('header nav'),
html = document.querySelector('html'),
hamburger = document.querySelector('.hamburger');
const errorMsg = 'Input field cannot be empty', noMsg = '';
let dayNumber=0;
const custName = [
    monday = {
        name1: "John Doe",
        name2:"James Holmes",
        name3:"Ben Smith",
        name4:"Criag Peters",
        name5:"Paul Green"
    },
    tuesday = {
      name1: "John Doe",
      name2:"Paul Green",
      name3:"Ben Smith",
      name4:"Criag Peters",
      name5:"James Holmes"
    },
    wednesday = {
      name1: "Ben Smith",
      name2:"James Holmes",
      name3:"John Doe",
      name4:"Criag Peters",
      name5:"Paul Green"
    },
    thrusday = {
      name1: "Paul Green",
      name2:"James Holmes",
      name3:"Criag Peters",
      name4:"Ben Smith",
      name5:"John Doe"
    },
    friday = {
        name1: "John Doe",
        name2:"James Holmes",
        name3:"Ben Smith",
        name4:"Criag Peters",
        name5:"Paul Green"
    },
    saturday = {
        name1: "John Doe",
        name2:"James Holmes",
        name3:"John Doe",
        name4:"Criag Peters",
        name5:"Paul Green"
    },
    sunday = {
        name1: "Criag Peters",
        name2:"James Holmes",
        name3:"Ben Smith",
        name4:"Criag Peters",
        name5:"Paul Green"
    }
];

const time = [
  week = {
      earlymorning:"8:30am - 10:00am",
      morning:"10:00am - 10:30am",
      afternoon:"1:00pm - 2:30pm",
      midafternoon:"3:00pm - 3:45pm",
      evening:"5:00pm - 5:30pm"
  }
];

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

window.addEventListener('load', function() {
  const li1 = document.createElement('li'),
    li2 = document.createElement('li'),
    li3 = document.createElement('li'),
    li4 = document.createElement('li'),
    li5 = document.createElement('li');

    li1.textContent = time[0].earlymorning;
    li2.textContent = time[0].morning;
    li3.textContent = time[0].afternoon;
    li4.textContent = time[0].midafternoon;
    li5.textContent = time[0].evening;

    timee.appendChild(li1);
    timee.appendChild(li2);
    timee.appendChild(li3);
    timee.appendChild(li4);
    timee.appendChild(li5);

    const li6 = document.createElement('li'),
    li7 = document.createElement('li'),
    li8 = document.createElement('li'),
    li9 = document.createElement('li'),
    li10 = document.createElement('li');

    li6.textContent = custName[dayNumber].name1;
    li7.textContent = custName[dayNumber].name2;
    li8.textContent = custName[dayNumber].name3;
    li9.textContent = custName[dayNumber].name4;
    li10.textContent = custName[dayNumber].name5;

    customerss.appendChild(li6);
    customerss.appendChild(li7);
    customerss.appendChild(li8);
    customerss.appendChild(li9);
    customerss.appendChild(li10);
})

dayss.forEach((dayz) => {
  dayz.addEventListener('click', function() {
    remove();
    dayz.classList.add('day-common-active');
    dayNumber = dayz.dataset.day;
    
    const li1 = document.createElement('li'),
    li2 = document.createElement('li'),
    li3 = document.createElement('li'),
    li4 = document.createElement('li'),
    li5 = document.createElement('li');

    li1.textContent = time[0].earlymorning;
    li2.textContent = time[0].morning;
    li3.textContent = time[0].afternoon;
    li4.textContent = time[0].midafternoon;
    li5.textContent = time[0].evening;

    timee.appendChild(li1);
    timee.appendChild(li2);
    timee.appendChild(li3);
    timee.appendChild(li4);
    timee.appendChild(li5);
    
// <span class="error-text"></span>

    const li6 = document.createElement('li'),
    li7 = document.createElement('li'),
    li8 = document.createElement('li'),
    li9 = document.createElement('li'),
    li10 = document.createElement('li');

    li6.textContent = custName[dayNumber].name1;
    li7.textContent = custName[dayNumber].name2;
    li8.textContent = custName[dayNumber].name3;
    li9.textContent = custName[dayNumber].name4;
    li10.textContent = custName[dayNumber].name5;

    customerss.appendChild(li6);
    customerss.appendChild(li7);
    customerss.appendChild(li8);
    customerss.appendChild(li9);
    customerss.appendChild(li10);
  })
})

function remove() {
  timee.innerHTML="";
  customerss.innerHTML="";
  dayss.forEach((day) => {
    day.classList.remove('day-common-active')
  })
}

hamburger.addEventListener('click', () => {
  hamBar1.classList.toggle('active1');
  hamBar2.classList.toggle('active2');
  hamBar3.classList.toggle('active3');
  navBar.classList.toggle('active');
  html.classList.toggle('html-scroll');
})