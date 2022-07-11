//Script for the main page of Russell Gardeners
var mobileMenuButton = document.getElementById("mobileMenuButton")
var mobileMenu = document.getElementById("mobileMenuDropdown")
var body = document.getElementsByTagName("body")[0]
var mobileMenuOpen = false

body.addEventListener("click", function(event){
    if (event.target == mobileMenuButton){
        if(mobileMenuOpen){
            mobileMenuOpen = false;
            mobileMenu.style.display = "none";
        }
        else{
            mobileMenuOpen = true;
            mobileMenu.style.display = "flex";
        }
    }else{
        mobileMenuOpen = false;
        mobileMenu.style.display = "none";
    }
});

