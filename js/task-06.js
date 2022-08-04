const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputTextBlur);

function onInputTextBlur(event) {
  if (Number(inputRef.dataset.length) === event.currentTarget.value.trim().length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}
