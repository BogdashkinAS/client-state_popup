const subscribeModal = document.getElementById('subscribe-modal')
const modalClose = document.querySelector('.modal__close')

// deleteAllCookies() // для проверки локального хранилища

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
}

function getCookie(name) {
    const pairs = document.cookie.split('; ')
    const cookie = pairs.find(p => p.startsWith(name + '='))
    return cookie
}

function deleteAllCookies() {
    let cookies = document.cookie.split(';')
    for (i = 0; i < cookies.length; i++) {
        let cookie = cookies[i]
        let parts = cookie.split('=')
        let name = parts[0].trim()
        document.cookie = name + '=;expires=Thu, 01, Jan 1970 00:00:00 UTC; path=/;'
    }
}

if (document.cookie.indexOf('window=open') ==-1) {
    subscribeModal.classList.add('modal_active')
    setCookie('window', 'close')
}

modalClose.addEventListener('click', (event) => {
    subscribeModal.classList.remove('modal_active')
    setCookie('window', 'open')
})