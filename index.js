const toggleBtn = document.getElementById('nav-toggle');
const toggleClose = document.getElementById('nav-toggle-close');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll(".nav-link")

toggleBtn.addEventListener('click', function(){
    navMenu.classList.add('show');
    toggleBtn.style.display = "none";
    toggleClose.style.display = "block"
    toggleClose.style.visibility = "visible"
   
    

})
toggleClose.addEventListener('click', function(){
    navMenu.classList.remove('show');
    toggleBtn.style.display = "block";
    toggleClose.style.display = "none"

})


function linkAction(){
    navLinks.forEach( n =>n.classList.remove('active'))
    this.classList.add('active')

    //to use it to remove menu
    navMenu.classList.toggle('show')
    toggleBtn.style.display = "block";
    toggleClose.style.display = "none"
}

navLinks.forEach(n => n.addEventListener('click', linkAction))