const round = document.querySelector('.round')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
    round.classList.toggle('move')
    btn.classList.toggle('btn-bg')
})