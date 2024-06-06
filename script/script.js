

// Menu function
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu');
    const mobileNavBar = document.getElementById('menu');
    
    menuIcon.addEventListener('click', function() {
        mobileNavBar.classList.toggle('show');
    });
});

window.onscroll = function(){
    var navBar = document.getElementById('navBar');
    if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
        navBar.style.marginTop = "-50px";
        navBar.style.position = "fixed";
    }else {
        navBar.style.marginTop = "10px";
        navBar.style.position = "absolute";
    }

}
