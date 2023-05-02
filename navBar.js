// Use query selector to select nav items and the menu button
const navLinks = document.querySelector('#navLinksList')
const navRevealButton = document.querySelector('#navRevealButton')

// we need to add an event listener to our menu
// button to listen for a click event
navRevealButton.addEventListener('click', function () {
    navLinks.classList.toggle('hide')
})

// // hide navigation when we click off of the navbar
// navRevealButton.addEventListener('blur', function () {
//     navLinks.classList.toggle('hide')
// })

const stringVariable = 'This is the value'
