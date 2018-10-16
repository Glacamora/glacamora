var form = document.querySelector(".contact__form");

if(form != undefined || form != null)
{
  var writeUsBtn = form.querySelector(".contact__form-btn");

  var username = form.querySelector("[name=name]");
  var email = form.querySelector("[name=email]");
  var text = form.querySelector("[name=text]");
  var confidenceInput = form.querySelector(".contact__form-input-checkbox");
  var confidence = form.querySelector(".contact__form-checkbox");

  writeUsBtn.addEventListener("click", function(event){
    event.preventDefault();

    if(!username.value && !email.value && !confidence.value && !text.value) {
      form.offsetWidth = form.offsetWidth;
      username.classList.add("contact-error");
      email.classList.add("contact-error");
      confidence.classList.add("contact-error");
      text.classList.add("contact-error");

      return false;
    }


    if(!email.value) {
      email.classList.add("contact__form-error");
      email.addEventListener("focus", function(event) {
        event.preventDefault();
        email.classList.remove("contact__form-error");

        return false;
      });
    }

    if(!confidenceInput.checked) {
      confidence.classList.add("contact__form-error-checkbox");
      confidenceInput.addEventListener("focus", function(event) {
        event.preventDefault();
        confidence.classList.remove("contact__form-error-checkbox");

        return false;
      });
    }

    if(!text.value) {
      text.classList.add("contact__form-error");
      text.addEventListener("focus", function(event) {
        event.preventDefault();
        text.classList.remove("contact__form-error");

        return false;
      });
    }

    if(email.value && !validateEmail(email.value)) {
      email.classList.add("contact__form-error");
      email.addEventListener("focus", function(event) {
        event.preventDefault();
        email.classList.remove("contact__form-error");

        return false;
      });
    }

    sendMessage(text.value);
  });
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function sendMessage(text){
    var data = new FormData();
    data.append("text", "sdfl nifj38ufia fsajd ff ");

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        alert("Ваше сообщение отправлено!");
      }
    });

    xhr.open("POST", "../php/sendtomail.php");

    xhr.send(data);
}
