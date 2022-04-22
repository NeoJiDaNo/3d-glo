 import { animate } from "./helpers";

 const modal = () => {
     const modal = document.querySelector('.popup')
     const modalContent = document.querySelector(".popup-content");


         document.addEventListener('click', (e) => {
            if (e.target.closest('.popup-btn')) {
                modal.style.display = 'block';
                animate({
                    duration: 500,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modalContent.style.opacity = progress;
                        modalContent.style.top = 20 * progress + "%";
                    },
                });
            } else if (e.target.closest('.popup-close') ||
                      e.target.classList.contains('popup')) {
                        modal.style.display = 'none'
                    }
         })
 };

 export default modal