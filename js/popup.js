var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var appeal = popup.querySelector("[name=appeal]");
var isStorageSupport = true;
var storageLogin = "";
var storageEmail = "";
try {
  storageLogin = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

try {
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storageLogin) {
    login.value = storageLogin; /*сохранение логина в LocalStorage*/
    email.value = storageEmail; /*сохранение email в LocalStorage*/
    appeal.focus();
  }else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value||!appeal.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
