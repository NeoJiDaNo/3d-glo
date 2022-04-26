import timer from "./modules/timer";
import menu from "./modules/menu"
import modal from "./modules/modal"
import scroll from "./modules/scroll"
import revision from "./modules/revision"
import tabs from "./modules/tabs"
import slider from "./modules/slider"
import calc from "./modules/calc"
import sendForm from "./modules/sendForm"

timer('26 april 2022 14:55:00')
menu()
modal()
scroll()
revision()
tabs()
slider([ '.portfolio-content', '.portfolio-item', '.portfolio-dots', '.dot-active'])
calc(100)
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})