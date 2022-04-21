const menu = function () {
    const menu = document.querySelector('menu')

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }
    
    document.addEventListener('click', (e) => {
        if (e.target.closest('.menu') || e.target.closest('ul')) {
            e.preventDefault()
            handleMenu()
        } 
    })
}

export default menu