const buttonNext = document.querySelector("#nextButton");
const buttonBacks = document.querySelectorAll(".right-back-button");
const buttonBuy = document.querySelector("#buyButton");

const forms = document.querySelectorAll(".form-center");
const numbers = document.querySelectorAll(".form-left-number");

const main_form = document.querySelector("#main-form");
const loading_form = document.querySelector("#loading-form");
const pre_buy_form = document.querySelector("#form-pre-buy");
const buy_form = document.querySelector("#form-buy");

buttonBuy.addEventListener("click", () => {
    pre_buy_form.classList.remove("form-active");
    buy_form.classList.add("form-active");
})

buttonNext.addEventListener("click", () => {
    for (let i = 0; i < forms.length;  i++) {
        if (forms[i].classList.value == "form-center active-center") {
            if (i != forms.length - 1) {
                numbers.forEach(number => {
                    number.textContent = "0" + (parseInt(number.textContent) + 1);
                })
                forms[i].classList.remove("active-center"); 
                forms[i + 1].classList.add("active-center");
                break;
            } else {
                loading();
            }         
        }
    }
})

buttonBacks.forEach(buttonBack => {
    buttonBack.addEventListener("click", () => {
        for (let i = forms.length - 1; i > 0;  i--) {
            if (forms[i].classList.value == "form-center active-center") {
                if (i != 0) {
                    numbers.forEach(number => {
                        number.textContent = "0" + (parseInt(number.textContent) - 1);
                    })
                    forms[i].classList.remove("active-center"); 
                    forms[i - 1].classList.add("active-center");
                    break;
                }
            }
        }
    })
})

const loading = () => {
    main_form.classList.remove("form-active");
    loading_form.classList.add("form-active");
    setTimeout(function() {
        loading_form.classList.remove("form-active");
        pre_buy_form.classList.add("form-active");
    },4000);
}