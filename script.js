function phoneNumberFormat(input) {
    const cleaned = ('' + input.value).replace(/\D/g, '');

    if (cleaned.length !== 11) {
        alert("Invalid phone number. Make sure it's 11 digits.");
        input.style.border = "1px solid red";
    } else {
        let formattedPhoneNumber = cleaned;
        if (cleaned.startsWith('0')) {
            formattedPhoneNumber = cleaned.slice(1);
        }
        input.value = `+63${formattedPhoneNumber}`;
        input.style.border = "1px solid green";
    }
}

const password = document.querySelector("#pass");
const confirmPass = document.querySelector("#confirmPassword");
const validPass = document.querySelector("#pass-validation");

function isPassValid() {
    if (password.value === confirmPass.value) {
        validPass.textContent = "";
        password.style.border = "1px solid blue";
        confirmPass.style.border = "1px solid green";
    } else {
        validPass.textContent = "Passwords do not match!";
        password.style.border = "1px solid red";
        confirmPass.style.border = "1px solid red";
    }
}
