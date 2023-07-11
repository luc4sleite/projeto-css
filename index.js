var body = document.querySelector("body");
var themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        themeButton.innerHTML = `
            <span class="material-symbols-outlined">
                dark_mode
            </span>`;
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        themeButton.innerHTML = `
            <span class="material-symbols-outlined"> 
                light_mode 
            </span>`;
    }
});
