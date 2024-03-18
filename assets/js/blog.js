let logEntry = JSON.parse (localStorage.getItem('logData')) || [];
var HTMLcode = ""

for (let i=0; i <logEntry.length; i++) {
HTMLcode += `<div class="blog-title">
    <h2>${logEntry[i].title}</h2>
    <p> ${logEntry[i].content} </p>
    <h6> ${logEntry[i].Username} </h6>
</div>`

}
let blogEntry = document.querySelector('#blog-entry');
blogEntry.innerHTML = HTMLcode;
