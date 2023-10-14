const modal = document.getElementById('modal')
const videoModal = document.getElementById('videoModal')
const btnModal = document.getElementById('assistirTrailer')
const closeBtn = document.getElementById('closeBtn')
const videoTrailer = document.getElementById('videoTrailer')


btnModal.addEventListener('click', function(e) {
    e.preventDefault()
    modal.style.display = 'flex';
})
closeBtn.addEventListener('click', function(e) {
    e.preventDefault()
    modal.style.display = 'none';
})


function scrollToTop() {
    const scroll = window.scrollTo(0, 0)

    if (scrollToTop == window.scrollTo(0, 0)) {
        scroll.style.display = 'none'
    }
}

const images = document.querySelectorAll('.imagem')

images.forEach(images => {
    images.addEventListener("mouseover", function() {
        const targetID = images.getAttribute("data-target")

        const paragrafo = document.getElementById(targetID)

        paragrafo.style.display = "flex"
    })

    images.addEventListener("mouseout", function() {
        const targetID = images.getAttribute("data-target")

        const paragrafo = document.getElementById(targetID)

        paragrafo.style.display = "none"
    })

})