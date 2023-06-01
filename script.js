//selectors
let theme = document.querySelector(".theme");
let openNavIcon = document.querySelector(".mobile-menu");
let closeNavIcon = document.querySelector(".fa-xmark");
let mobileNav = document.querySelector(".m_nav_section");
let mobileNavLinks = document.querySelectorAll(".m_nav_link");


//event listeners
theme.addEventListener("click", chnageTheme);
openNavIcon.addEventListener("click", mobileNavOpen);
closeNavIcon.addEventListener("click", mobileNavClose);
for (let i = 0; i < mobileNavLinks.length; i++) { //added event listners to all mobile navlinks to close on click
    mobileNavLinks[i].addEventListener("click", mobileNavClose);
}

//Functions
function chnageTheme(e){
    if(theme.classList[1] == "fa-solid"){
        theme.classList.remove("fa-moon");
        theme.classList.remove("fa-solid");
        theme.classList.add("fa-regular");
        theme.classList.add("fa-sun");
    }else{
        theme.classList.remove("fa-regular");
        theme.classList.remove("fa-sun");
        theme.classList.add("fa-solid");
        theme.classList.add("fa-moon");
    }
    document.body.classList.toggle("dark-theme");
}

function mobileNavOpen(e){
    mobileNav.classList.add("active_mob_nav");
}

function mobileNavClose(e){
    mobileNav.classList.remove("active_mob_nav");

}

// ================================

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

