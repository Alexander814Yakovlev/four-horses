// Logo Horses
const logo = document.querySelector(".header__logo_img")
for (let i = 0; i < 4; i++) {
    const horse = document.createElement("img")
    horse.src = 'img/logo_horse.svg'
    logo.appendChild(horse)
}

document.querySelector(".dark").onclick = () => {
    navigator.vibrate(80)
}
document.querySelector(".light").onclick = () => {
    navigator.vibrate(80)
}

// Side-scroll ticker
const quotes = [
    'Дело помощи утопающим — дело рук самих утопающих!',
    'Шахматы двигают вперед не только культуру, но и экономику!',
    'Лед тронулся, господа присяжные заседатели!',
]
const tickers = document.querySelectorAll(".ticker")
for (let ticker of tickers) {
    for (let _ = 0; _ < 2; _++) {
        for (let i = 0; i < quotes.length; i++) {
            const quote = document.createElement("div")
            const divider = document.createElement("div")
            quote.className = "ticker__item"
            quote.textContent = quotes[i]
            divider.classList.add("ticker__item")
            divider.classList.add("ticker__divider")
            ticker.appendChild(quote)
            ticker.appendChild(divider)
        }
    }
}

// Support
const support = document.querySelector(".support__inner")
const bottomText = document.querySelector(".support__text_bottom")
const moveText = () => {
    if (window.innerWidth < 992) {
        support.appendChild(bottomText)
    }
}
moveText()


// Steps
const grid = document.querySelector(".steps__grid")
let counter = 1

const switchStep = (direction = "backward") => {
    const dots = grid.querySelectorAll(".mobile_dot")

    const isForward = direction === "forward"
    const isBackward = direction === "backward"
    const flex = document.querySelector(".steps__mobile_flex")
    if (counter < 5 && counter > 0 || counter === 5 && !isForward) {
        flex.animate([
            { transform: `translateX(calc(-96vw * ${counter - 1 * (isForward + isBackward)}))` },
            { transform: `translateX(calc(-96vw * ${counter - 1 * !isForward * 2}))` },
        ], {
            duration: 200,
            iterations: 1,
        })
        flex.style.transform = `translateX(calc(-96vw * ${counter - 1 * !isForward * 2}))`

        counter = isForward ? ++counter : isBackward ? --counter : counter
        for (let dot of Array.from(dots)) {
            if (dot.dataset.id == counter) {
                dot.classList.add("mobile_dot-active")
            } else {
                dot.className = 'mobile_dot'
            }
        }
    }
    navigator.vibrate(80)
}

const mergeCells = () => {
    const [card1, card2, card3, card4, card5, card6, card7] = [...Array(7)].map((_, id) => grid.querySelector(`.card_${id + 1}`))
    const plane = grid.querySelector(".steps__grid_image")
    grid.innerHTML = ''

    const stepButtons = document.createElement("div")
    stepButtons.className = "steps__mobile_buttons"

    const prevButton = document.createElement("button")
    const pervChevron = document.createElement("img")
    pervChevron.src = 'img/chevron_left.svg'
    prevButton.className = 'slider__button'
    prevButton.appendChild(pervChevron)
    prevButton.disabled = counter === 1
    prevButton.onclick = () => {
        switchStep('backward')
        prevButton.disabled = counter === 1
        nextButton.disabled = counter === 5
    }

    const nextButton = document.createElement("button")
    const nextChevron = document.createElement("img")
    nextChevron.src = 'img/chevron_right.svg'
    nextButton.className = 'slider__button'
    nextButton.appendChild(nextChevron)
    nextButton.disabled = counter === 5
    nextButton.onclick = () => {
        switchStep('forward')
        prevButton.disabled = counter === 1
        nextButton.disabled = counter === 5
    }

    const mobileDots = document.createElement("div")
    mobileDots.className = "steps__mobile_dots"
    for (let i = 0; i < 5; i++) {
        const dot = document.createElement("div")
        dot.className = 'mobile_dot'
        dot.dataset.id = i + 1
        if (i === 0) {
            dot.classList.add("mobile_dot-active")
        }
        mobileDots.appendChild(dot)
    }

    stepButtons.appendChild(prevButton)
    stepButtons.appendChild(mobileDots)
    stepButtons.appendChild(nextButton)

    if (window.innerWidth < 992) {
        const flexWrapper = document.createElement("div")
        flexWrapper.className = "steps__mobile_flex"
        const newCard1 = document.createElement("div")
        newCard1.classList.add("steps__grid_card")
        newCard1.classList.add("steps__mobile_card")
        newCard1.appendChild(card1)
        newCard1.appendChild(card2)
        const newCard3 = document.createElement("div")
        newCard3.classList.add("steps__grid_card")
        newCard3.classList.add("steps__mobile_card")
        newCard3.appendChild(card3)
        const newCard4 = document.createElement("div")
        newCard4.classList.add("steps__grid_card")
        newCard4.classList.add("steps__mobile_card")
        newCard4.appendChild(card4)
        newCard4.appendChild(card5)
        const newCard6 = document.createElement("div")
        newCard6.classList.add("steps__grid_card")
        newCard6.classList.add("steps__mobile_card")
        newCard6.appendChild(card6)
        const newCard7 = document.createElement("div")
        newCard7.classList.add("steps__grid_card")
        newCard7.classList.add("steps__mobile_card")
        newCard7.appendChild(card7)

        for (let card of [newCard1, newCard3, newCard4, newCard6, newCard7]) {
            flexWrapper.appendChild(card)
        }
        grid.appendChild(flexWrapper)
        grid.appendChild(plane)
        grid.appendChild(stepButtons)
    } else {
        for (let card of [card1, card2, card3, card4, card5, card6, card7]) {
            grid.appendChild(card)
            grid.appendChild(plane)
        }
    }

}
if (window.innerWidth < 992) {
    mergeCells()
}



// Participants
const participantButtons = document.querySelector(".participants__pagination")
const participantsWrapper = document.querySelector(".participants")
const participantsList = document.querySelector(".participants__list")
let participants = [
    {
        name: "Хозе-Рауль Капабланка",
        state: "Чемпион мира по шахматам"
    },
    {
        name: "Эммануил Ласкер",
        state: "Чемпион мира по шахматам"
    },
    {
        name: "Александр Алехин",
        state: "Чемпион мира по шахматам"
    },
    {
        name: "Арон Нимцович",
        state: "Чемпион мира по шахматам"
    },
    {
        name: "Рихард Рети",
        state: "Чемпион мира по шахматам"
    },
    {
        name: "Остап Бендер",
        state: "Гроссмейстер"
    },
]
const paginationCounter = document.querySelector(".participants__pagination_count")
let index;
const len = participants.length
paginationCounter.textContent = `${1}/${len}`

const createCard = (i) => {
    const card = document.createElement("div")
    card.className = "participant__card"
    card.dataset.index = i + 1
    const image = document.createElement("img")
    image.src = "img/participant.png"
    image.className = "participant__card_image"
    const name = document.createElement("h3")
    name.textContent = participants[i].name
    name.className = "participant__card_title"
    const status = document.createElement("p")
    status.textContent = participants[i].state
    status.className = "participant__card_status"
    const details = document.createElement("button")
    details.textContent = "Подробнее"
    details.className = "participant__card_button"
    card.appendChild(image)
    card.appendChild(name)
    card.appendChild(status)
    card.appendChild(details)
    return card
}

const moveButtons = () => {
    if (window.innerWidth < 992) {
        participantsWrapper.appendChild(participantButtons)
    }
}
moveButtons()

const prevSlide = document.querySelector("#participants_prev")
const nextSlide = document.querySelector("#participants_next")

const slide = (direction) => {
    let showedList = document.querySelectorAll(".participant__card")
    let index = direction === "left" ? 0 : showedList.length - 1
    let sign = direction === "left" ? '-' : '+'
    for (let item of showedList) {
        item.animate([
            { transform: 'translateX(0)' },
            { transform: `translateX(calc(${sign}100% ${sign} 40px))` },
        ], {
            duration: 300,
            iterations: 1
        })
    }
    setTimeout(() => {
        if (direction === 'left') {
            participantsList.appendChild(showedList[index])
        } else {
            participantsList.prepend(showedList[index])
        }

    }, 300)
    paginationCounter.textContent = `${showedList[1].dataset.index}/${len}`
}

for (let i = 0; i < 6; i++) {
    const card = createCard(i)
    participantsList.appendChild(card)
}

let autoSlider = setInterval(() => slide('left'), 4000)

nextSlide.onclick = () => {
    clearInterval(autoSlider)
    slide('left')
    navigator.vibrate(80)
    autoSlider = setInterval(() => slide('left'), 4000)
}
prevSlide.onclick = () => {
    clearInterval(autoSlider)
    slide('right')
    navigator.vibrate(80)
    autoSlider = setInterval(() => slide('left'), 4000)
}


addEventListener('resize', () => {
    moveText();
    mergeCells();
    moveButtons();
})
