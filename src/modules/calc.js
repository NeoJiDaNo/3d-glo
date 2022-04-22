import { animate } from "./helpers";
const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block')
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    const total = document.getElementById('total')
    const calcType = document.querySelector('.calc-type')

    const countSum = () => {
        let totalValue = 0
        let countValue = 1
        let dayValue = 1
        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10
        }
        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5
        }
        if (typeValue && squareValue) {
            totalValue = Math.round(price * typeValue * squareValue * dayValue * countValue)
        }

        const totalAnim = () => {
            animate({
                duration: 1000,
                timing: (timeFraction) => {
                    return timeFraction;
                },
                draw: (progress) => {
                    total.textContent = Math.round(totalValue * progress);
                }
            })
        }

        totalAnim(total)
        if(total === 0) {
            calcSquare.value = ''
            calcCount.value = ''
            calcDay.value = ''
        }
    }

    calcBlock.addEventListener('input', e => {
        if (e.target.matches('select') || e.target.matches('input')) {
            countSum()
        }
    })
}
export default calc;