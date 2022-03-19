import { smoothScroll } from "./helper"

const menu = () => {
    const topMenu = document.querySelector('.top-menu')
    
    const toggleMenu = (e) => {
        if (e.target.closest('.top-menu')) {
            if (e.target.matches('ul>li>a')) {
                smoothScroll()
            }
        }
    }

    document.addEventListener("click", (e) => toggleMenu(e));
}

export default menu