const btn = document.querySelector(".btn");
const input = document.getElementById("input");
const copyIcon = document.querySelector(".fa-clone");
const alertContainer = document.querySelector(".alert-container");

btn.addEventListener("click", () => {
    createPassword();
});

copyIcon.addEventListener("click", () => {

    if(input.value) {
        copyPassword();
        alertContainer.classList.remove("active");

        setTimeout(() => {
            alertContainer.classList.add("active")
        }, 1500);
    }
});

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;

    let password = "";
    for ( let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random()*chars.length);
        password += chars[randomNum];
    }

    input.value = password;
};

function copyPassword() {
    navigator.clipboard.writeText(input.value).then(() => {
        alertContainer.innerText = "Password copied";
    }).catch(err => {
        alertContainer.innnText = "Failed to copy password", err;
    })
};

