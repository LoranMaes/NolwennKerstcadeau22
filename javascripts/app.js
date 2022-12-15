(function(){
    'use strict'

    const login = document.querySelector("#login")
    const submitLogin = document.querySelector("#submitLogin")
    const password = document.querySelector("#password")
    const main = document.querySelector("#main")
    const errorLogin = document.querySelector("#login p.error")
    window.addEventListener("load", function(){
        login.style.opacity = 1;
        login.style.transformScale = 1;
    })

    submitLogin.addEventListener("click", function(){
        if(password.value === "iloveyou"){
            login.style.visibility = "hidden"
            login.style.display = "none"
            login.style.position = "absolute"

            main.style.visibility = "visible"
            main.style.display = "flex"
            main.style.position = "relative"

            errorLogin.style.visibility = "hidden"
            errorLogin.style.position = "absolute"
        }
        else{
            errorLogin.style.visibility = "visible"
            errorLogin.style.position = "relative"
        }
    })
})()