
// access button to change theme
const changeTheme= document.querySelector('#change-theme');
const container = document.querySelector('.container');
const headerTag = document.querySelector('header');
const header = document.querySelector('h2');
const backLink = document.querySelector('a');

//Gets user input from localDtorage and parses it into js
let logEntry = JSON.parse (localStorage.getItem('logData')) || [];

var HTMLcode = ""

//loop to input user content into blog page

for (let i=0; i <logEntry.length; i++) {
HTMLcode += `<div class="blog-title">
    <h3>${logEntry[i].title}</h3>
    <p> ${logEntry[i].content} </p>
    <h6> ${`By:`} ${logEntry[i].Username} </h6>
</div>`

}
let blogEntry = document.querySelector('#blog-entry');
blogEntry.innerHTML = HTMLcode;





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
    backLink.classList.remove ('header-light');
    backLink.classList.add ('header-dark');
  }
  // If mode is light, apply dark background
  else {
    mode = 'light';
    container.setAttribute('class', 'light');
    header.classList.remove ('header-dark');
    header.classList.add ('header-light');
    headerTag.classList.remove('header-dark');
    headerTag.classList.add('header-light');
    backLink.classList.add ('header-light');
    backLink.classList.remove ('header-dark');

  }
});