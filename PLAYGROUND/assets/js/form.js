const formMainPage = document.querySelector('.form-mainpage');


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