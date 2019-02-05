// @toddjohnson - contact page

var contactMe = document.getElementById('contact-me');
var contactForm = document.getElementById('contact-form');
var contacted = document.getElementById('contacted');
var contactTitle = document.getElementById('contact-title');
var submitInquiry = document.getElementById('inquiry-button');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var showContactForm = async function() {
  await sleep(100);
  contactTitle.style = 'display: none;';
  await sleep(100);
  contactForm.style = 'display: block; margin-bottom: -12vh;';
}


var submission = function() {
  var usersName = document.getElementById('users-name').value;
  console.log(usersName);
  console.log('oi');
  var usersEmail = document.getElementById('email').value;
  var usersMessage = document.getElementById('message').value;

  var emailParameters = {
    usersName: usersName,
    usersEmail: usersEmail,
    usersMessage: usersMessage,
  }

  emailjs.send('gmail', 'inquiry_template', emailParameters)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       contactForm.style = 'display: none';
       contactTitle.innerHTML = `INQUIRY SENT`;
       contactTitle.style = 'margin-bottom: -3vh';
    }, function(error) {
       console.log('FAILED...', error);
    });
}

// contacted.onmousedown = function() { showContactForm() };

submitInquiry.onmousedown = function() { submission() };
