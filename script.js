let age = document.querySelector("#ageInput")

let checkAge = document.querySelector("#checkAge")

let result = document.querySelector("#result")

checkAge.addEventListener("click" , function() {

    if (age.value >= 18) {
        result.innerHTML = "Senior"
    } else{
        result.innerHTML = "Younger"
    }
})