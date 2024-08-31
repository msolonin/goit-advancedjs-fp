function validateForm(event) {
  event.preventDefault();
  const emailInput = document.querySelector('.e-mail-input');
  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (emailPattern.test(emailInput.value)) {
    console.log('Valid email, sending request to backend.');
    fetch('/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: emailInput.value }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  } else {
    console.log('Invalid email format.');
  }
}
