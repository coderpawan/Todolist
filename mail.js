const firebaseConfig = {
  apiKey: "AIzaSyA1y3lrkIauH1of9VoZjo-qZ83IhMnV3r4",
  authDomain: "school-929b5.firebaseapp.com",
  databaseURL: "https://school-929b5-default-rtdb.firebaseio.com",
  projectId: "school-929b5",
  storageBucket: "school-929b5.appspot.com",
  messagingSenderId: "419175488449",
  appId: "1:419175488449:web:32d439a8eb7583231ded40",
  measurementId: "G-4D031BJV37",
};

firebase.initializeApp(firebaseConfig);
const contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getElementVal("name");
  var email = getElementVal("email");
  var message = getElementVal("message");
  save(name, email, message);
  //   enable the alert
  document.querySelector(".alert").style.display = "block";
  //   disable the alert

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 2000);

  //   reset the form
  document.getElementById("contactform").reset();
}

const save = (name, email, message) => {
  var contact = contactFormDB.push();
  contact.set({
    name: name,
    email: email,
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
