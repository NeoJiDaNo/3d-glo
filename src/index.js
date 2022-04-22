import timer from "./modules/timer";
import menu from "./modules/menu"
import modal from "./modules/modal"
import scroll from "./modules/scroll"
import revision from "./modules/revision"
import tabs from "./modules/tabs"
import slider from "./modules/slider"
import calc from "./modules/calc"

timer('22 april 2022 12:55:00')
menu()
modal()
scroll()
revision()
tabs()
slider([ '.portfolio-content', '.portfolio-item', '.portfolio-dots', '.dot-active'])
calc(100)