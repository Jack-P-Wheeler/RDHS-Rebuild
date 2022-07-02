//Script for the main page of Russell Gardeners
var mobileMenuButton = document.getElementById("mobileMenuButton")
var mobileMenu = document.getElementById("mobileMenuDropdown")
var mobileMenuOpen = false

mobileMenuButton.addEventListener("click", function(){
    if(mobileMenuOpen){
        mobileMenuOpen = false;
        mobileMenu.style.display = "none";
    }
    else{
        mobileMenuOpen = true;
        mobileMenu.style.display = "flex";
    }
});
    