window.onload = () => {
    const submit = document.getElementById("submit");
    const menu = document.querySelector("#hamburger");
    const mobile = document.querySelector("#mobile");
    
    document.addEventListener("click", (event) => {
        if(event.target.id !== "hamburger" && event.target.id !== "mobile") {
            menu.classList.remove("is-active");
            mobile.classList.remove("is-active");
        }
    })

    menu.addEventListener("click", () => {
        menu.classList.toggle("is-active");
        mobile.classList.toggle("is-active");
    });

    submit.addEventListener("submit", (event) => {
        event.preventDefault();
        submit.reset()
    });
}