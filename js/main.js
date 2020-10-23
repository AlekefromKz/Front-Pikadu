let menuToggle = document.querySelector("#menu-toggle");
let sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener('click', function(event){
    event.preventDefault();
    sidebar.classList.toggle('visible');
});