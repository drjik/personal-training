const faqs = document.querySelectorAll(".faqq");
const answers = document.querySelectorAll(".form-center-answer");
const navigation_easy = document.querySelector("#navigation-easy");
const navigation_availability = document.querySelector("#navigation-availability");
const about_easy = document.querySelector("#about-easy");
const about_availability = document.querySelector("#about-availability");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("faq-active");
    })
})

answers.forEach(answer => {
    answer.addEventListener("click", () => {
        answer.classList.toggle("answer-active");
    })
})

navigation_easy.addEventListener("click", () => {
    navigation_easy.classList.add("active-navigation");
    navigation_availability.classList.remove("active-navigation");
    about_easy.classList.add("active-cart");
    about_availability.classList.remove("active-cart");
})

navigation_availability.addEventListener("click", () => {
    navigation_availability.classList.add("active-navigation");
    navigation_easy.classList.remove("active-navigation");
    about_availability.classList.add("active-cart");
    about_easy.classList.remove("active-cart");
})