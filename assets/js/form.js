//Set variable to obtain element
const formMainPage = document.querySelector('.form-mainpage');

//event listener to be called when form is submitted
formMainPage.addEventListener ('submit', function (event) {
    event.preventDefault ();
    const submitData = {
      username: document.getElementById ('Username').value,
      title: document.getElementById ('title').value,
      content: document.getElementById ('content').value,
    }
    //Stores data and redirects browser to blog page
    let logEntry = JSON.parse (localStorage.getItem('logData')) || []
    logEntry.push(submitData);
    localStorage.setItem("logData",JSON.stringify (logEntry));
    location.replace("./blog.html")
  })