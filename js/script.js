//Active link header-menu
const links = document.querySelectorAll(".header-menu a")

function activeLink(link) {
    const url = location.href
    const href = link.href

    if (url.includes(href)) {
        link.classList.add("active")
    }
}
links.forEach(activeLink)

//Active link insurance items
const parameters = new URLSearchParams(location.search)

function activeProduct(parameter) {
    const element = document.getElementById(parameter)
    if (element) {
    element.checked = true
    }
}
parameters.forEach(activeProduct)

//Frequently Asked Questions
const questions = document.querySelectorAll(".questions button")

function activeQuestion(event) {
    const question = event.currentTarget
    const controls = question.getAttribute("aria-controls")
    const answer = document.getElementById(controls)
    
    answer.classList.toggle("active")
    const active = answer.classList.contains("active")
    question.setAttribute("aria-expanded", active)
    
}

function eventQuestions(ask) {
    ask.addEventListener("click", activeQuestion)
}

questions.forEach(eventQuestions)



//Bicycle Galery
const galery = document.querySelectorAll(".bicycle-images img")
const galeryContainer = document.querySelector(".bicycle-images")

function replaceImage(event) {
    const img = event.currentTarget
    const media = matchMedia("(min-width: 1000px)").matches
    if (media) {
    galeryContainer.prepend(img)
    }
}

function eventGalery(img) {
    img.addEventListener("click", replaceImage)

}

galery.forEach(eventGalery)