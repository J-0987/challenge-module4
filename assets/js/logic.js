// access button to change theme
const changeTheme= document.querySelector('#change-theme');
const container = document.querySelector('.container');
const headerTag = document.querySelector('header');
const header = document.querySelector('h2');
const formMainPage = document.querySelector('.form-mainpage');


// Set default mode to light
let mode = 'light';

// Listen for a click event on toggle switch
changeTheme.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'light') {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    header.classList.remove ('header-light');
    header.classList.add ('header-dark');
    headerTag.classList.remove('header-light');
    headerTag.classList.add('header-dark');
  }
  // If mode is light, apply dark background
  else {
    mode = 'light';
    container.setAttribute('class', 'light');
    header.classList.remove ('header-dark');
    header.classList.add ('header-light');
    headerTag.classList.remove('header-dark');
    headerTag.classList.add('header-light');

  }
});

formMainPage.addEventListener ('submit', function (event) {
  event.preventDefault ();
  const submitData = {
    username: document.getElementById ('Username').value,
    title: document.getElementById ('title').value,
    content: document.getElementById ('content').value,
  }
  let logEntry = JSON.parse (localStorage.getItem('logData')) || []
  logEntry.push(submitData);
  localStorage.setItem("logData",JSON.stringify (logEntry));
  location.replace("./blog.html")
})