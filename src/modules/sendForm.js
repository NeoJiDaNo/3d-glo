const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с вами свяжется'

    const loaderInit = () => {
        const preloader = document.querySelector('#preloader')
        console.log(preloader);
        const loaderAnimate = (e) => {
            e.style.cssText = `width: 100%; height: 50px; min-width: 1000px; background: url(http://hello-site.ru//main/images/preloads/puff.svg) center center no-repeat`
            e.style.opacity = 1
            const preloaderInterval = setInterval(() => {
                e.style.opacity = e.style.opacity - 0.05
                if (e.style.opacity <= 0.05) {
                    clearInterval(preloaderInterval)
                    e.style.display = 'none'
                }
                console.log('ok');
            }, 100)
        }
        loaderAnimate(preloader)
    }

    const validate = (list) => {
        const regexArray = {
            user_name: /[а-яА-я\-\ ]/g,
            user_email: /[a-zA-Z0-9\@\-\_\.\!\~\*\']/g,
            user_phone: /[\d\()\-]/g,
            user_message: /[^\d\W]/g
        }

        let errors = {};

        list.forEach(input => {

            if (regexArray[input.name].test(input.value) === false){
                errors[input.name] = false;
            } else {
                errors[input.name] = true;
            }
        })
        return errors;
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.innerHTML = '<div id="preloader"></div>'
        form.append(statusBlock)
        loaderInit()
        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)

            if(elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if(elem.type === 'input') {
                formBody[elem.id] = element.value
            }
        })

        if(validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText

                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            alert('Данные не валидны!!!')
        }
    }



    try {
        if(!form) {
            throw new Error('Верните форму на место')
        }


        form.addEventListener('submit', (event) => {
            event.preventDefault()
    
            submitForm()
        })
    } catch(error) {
        console.log(error.message);
    }
}

export default sendForm