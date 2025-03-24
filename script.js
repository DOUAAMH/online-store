const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const iconClose =document.querySelector('.icon-close');

registerlink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});


iconClose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
});
document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".wrapper");
    const showRegister = document.getElementById("showRegister");
    const showLogin = document.getElementById("showLogin");

    if (wrapper && showRegister && showLogin) {
        showRegister.addEventListener("click", function (event) {
            event.preventDefault();
            wrapper.classList.add("active");
            console.log("Register Clicked - Active added");
        });

        showLogin.addEventListener("click", function (event) {
            event.preventDefault();
            wrapper.classList.remove("active");
            console.log("Login Clicked - Active removed");
        });
    } else {
        console.error("One or more elements are missing!");
    }
});
document.querySelector(".icon-close").addEventListener("click", function() {
    window.location.href = "index.html"; 
});
