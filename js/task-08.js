const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const result = {};
  result.email = email.value;
  result.password = password.value;

  if (result.email === "" || result.password === "") {
    alert("Please fill in all the fields!");
  } else {
    console.log(result);
  }
  event.currentTarget.reset();
}
