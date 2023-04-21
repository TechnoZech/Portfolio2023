//selectors
let theme = document.querySelector(".theme");


//event listeners
theme.addEventListener("click", chnageTheme);

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