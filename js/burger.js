const buttonClosed = document.querySelector("#burgerClosed");
const buttonOpen = document.querySelector("#burgerButton");
const burger = document.querySelector(".burger");

buttonOpen.addEventListener("click", () => {
    buttonOpen.classList.remove("active-burger-button");
    burger.classList.add("active-burger");
})

buttonClosed.addEventListener("click", () => {
    buttonOpen.classList.add("active-burger-button");
    burger.classList.remove("active-burger");
})