window.onscroll = function(){
    var navBar = document.getElementById('navBar');
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop >50){
        navBar.style.top = "-5px";
        navBar.style.position = "fixed";
    }else{
        navBar.style.top = "5px";
        navBar.style.position = "relative";
    }

}
