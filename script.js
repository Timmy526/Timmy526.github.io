//NavBar Script
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

//Quote of the Day Script
let request = new XMLHttpRequest();
let url = "https://api.adviceslip.com/advice";

request.open("GET", url, true);

request.onload = function(){
    //Begin accessing JSON data here. Data stored in request.response
    let data = JSON.parse(this.response);
    let quote = document.getElementById('quote');
    
    if (request.status >= 200 && request.status <400){
        quote.innerHTML = data["slip"].advice;
    }
    
};
request.send();

//Programming Card Project Number Changer
