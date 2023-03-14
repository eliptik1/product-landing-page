const faqItemElements = document.querySelectorAll(".faq-item");

const toggleActive = (item) => {
    faqItemElements.forEach(el => el.classList.remove("active"))
    item.classList.toggle("active")
}

faqItemElements.forEach(faqItem => faqItem.addEventListener("click", () => toggleActive(faqItem)))