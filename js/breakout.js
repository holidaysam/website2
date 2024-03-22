rulesBtn = document.getElementById('rules-btn')
rules = document.getELementById('rules')
closeBtn = document.getElementById('close-btn')

// rules open and close event handlers
rulesBtn.addEventListener('click', () => {
    rules.classList.add('show')
})

closeBtn.addEventListener('click', () => {
    rules.classList.remove('show')
})
