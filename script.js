function validateEmail() {
    const fname = document.forms.signup.fname.value;
    const lname = document.forms.signup.lname.value;
    const email = document.forms.signup.email;
    const password = document.forms.signup.password.value;

    console.log(fname, lname, email, password);

    const constraint = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
    console.log(constraint);

    if (constraint.test(email.value)) {
        email.setCustomValidity("");
    } else {
        email.setCustomValidity("Enter a valid email!");
    }

    return false;

    return true;
}

window.onload = () => {
    document.getElementById("email").oninput = validateEmail;
}