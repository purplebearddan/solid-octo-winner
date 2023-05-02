// selecting the required elements
const nameSubmissionForm = document.querySelector('#nameSubmissionForm')
const nameSubmissionFormInput = document.querySelector(
    '#nameSubmissionForm>#nameInput',
)
const nameSubmissionFormButton = document.querySelector(
    '#nameSubmissionForm>button',
)

nameSubmissionForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(nameSubmissionFormInput.value)
    nameSubmissionFormInput.value = ''
})
