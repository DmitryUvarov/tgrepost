// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

window.addEventListener('load', pageLoad)

function pageLoad() {
    const htmlTag = document.documentElement

    document.addEventListener('click', e => {
        const targetElement = e.target

        if (targetElement.closest('.class')) {
            console.log('1');
        }
    })

    const dataCircles = document.querySelectorAll('[data-circle]')

    if (dataCircles) {
        dataCircles.forEach(dataCircle => {
            let dataCirclePercentage = Number(dataCircle.querySelector('.minister__circle-percentage').innerHTML)
            let dataCircleRound = dataCircle.querySelector('[data-circle-round]')
            let dataCircleRoundStrokeDasharray = 296 - (296 * dataCirclePercentage) / 100

            dataCircleRound.style.cssText =  `
                stroke-dashoffset: ${dataCircleRoundStrokeDasharray};
            `

        });
    }

    ////////

    const progresBars = document.querySelectorAll('[data-progres]')

    if (progresBars) {
        progresBars.forEach(progresBar => {
            const progresBarValue = Number(progresBar.getAttribute("data-progres"))
            const progresBarLine = progresBar.querySelector('[data-progres-line]')

            if (progresBarValue < 10 || progresBarValue > 80) {
                progresBarLine.classList.add("top-position")
            }

        });
    }

}