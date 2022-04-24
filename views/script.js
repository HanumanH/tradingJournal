// toggling between the two different forms
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("hideForm");
        createAccountForm.classList.remove("hideForm");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("hideForm");
        createAccountForm.classList.add("hideForm");
    });
});