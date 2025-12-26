function showMessage() {
  alert("Website is working successfully 🚀");
}

function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  document.getElementById("formMessage").innerText =
    `Thank you, ${name}! We will contact you at ${email}.`;

  // Clear form
  event.target.reset();
}
