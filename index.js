// TODO: Implement JS and addEventListener to share svg button to show popover on click
const shareButton = document.querySelector('.share-svg-button')
const popover = document.querySelector('.popover')

shareButton.addEventListener('click', () => {
    if (popover.classList.contains('show')) {
        popover.classList.remove('show')
    } else {
        popover.classList.add('show')
    }
})