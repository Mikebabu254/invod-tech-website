window.onscroll = function(){
    var navBar = document.getElementById('navBar');
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navBar.style.marginTop = "-50px";
        navBar.style.position = "fixed";
    }else {
        navBar.style.marginTop = "10px";
        navBar.style.position = "absolute";
    }

}
