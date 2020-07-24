// my loading screen
var preloader = document.getElementById('loader');
function myloader() {
    preloader.style.display = 'none';
}

// @ts-nocheck
// toggle button code
function toggleBtn(){
    var a=document.getElementById("mynav-toggle").title;
    if(a=="Open Menu (ctlt+M)"){
        document.getElementById("mini").classList.add("nav-border-t");
        document.getElementById("res-menu").classList.add("menu-res-open");
        document.getElementById("hamb1").classList.add("hamb1");
        document.getElementById("hamb2").classList.add("hamb2");
        document.getElementById("hamb3").classList.add("hamb3");
        document.getElementById("mynav-toggle").title="Close Menu (ctlt+M)";
    }else{
        document.getElementById("mini").classList.remove("nav-border-t");
        document.getElementById("res-menu").classList.remove("menu-res-open");
        document.getElementById("hamb1").classList.remove("hamb1");
        document.getElementById("hamb2").classList.remove("hamb2");
        document.getElementById("hamb3").classList.remove("hamb3");
        document.getElementById("mynav-toggle").title="Open Menu (ctlt+M)";
    }
}

// toggle shortcut key
document.onkeyup = function(e){
	if(e.ctrlKey && e.which == 77){
		var a=document.getElementById("mynav-toggle").title;
        if(a=="Open Menu (ctlt+M)"){
            document.getElementById("mini").classList.add("nav-border-t");
            document.getElementById("res-menu").classList.add("menu-res-open");
            document.getElementById("hamb1").classList.add("hamb1");
            document.getElementById("hamb2").classList.add("hamb2");
            document.getElementById("hamb3").classList.add("hamb3");
            document.getElementById("mynav-toggle").title="Close Menu (ctlt+M)";
        }else{
            document.getElementById("mini").classList.remove("nav-border-t");
            document.getElementById("res-menu").classList.remove("menu-res-open");
            document.getElementById("hamb1").classList.remove("hamb1");
            document.getElementById("hamb2").classList.remove("hamb2");
            document.getElementById("hamb3").classList.remove("hamb3");
            document.getElementById("mynav-toggle").title="Open Menu (ctlt+M)";
        }
	}	
}

function removeEdd(){
    var a=window.innerWidth;
    if(a>992){
        document.getElementById("mini").classList.remove("nav-border-t");
        document.getElementById("res-menu").classList.remove("menu-res-open");
        document.getElementById("hamb1").classList.remove("hamb1");
        document.getElementById("hamb2").classList.remove("hamb2");
        document.getElementById("hamb3").classList.remove("hamb3");
        document.getElementById("mynav-toggle").title="Open Menu (ctlt+M)";
    }
}
// sticky navbar code
$(document).ready(function(){
    $(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $('#mini').addClass('animated fadeInDown');
        $('#mini').css({'position':'fixed'});
    }else{
        $('#mini').removeClass('animated fadeInDown');
        $('#mini').css({'position':'relative'});
    }
})
})


// gallery slider 
lightbox.option({
    'resizeDuration': 100,
    'wrapAround': true,
    'maxHeight': 450,
    'positionFromTop': 75,
    'showImageNumberLabel': false,
    'disableScrolling' : true
})