document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('subscriptionForm');
  form.addEventListener('submit', validateForm);
});

function validateForm(event) {
  event.preventDefault();
  const emailInput = document.querySelector('.e-mail-input');
  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (emailPattern.test(emailInput.value)) {
    console.log('Valid email, sending request to backend.');
    fetch('https://your-energy.b.goit.study/api/subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "email": emailInput.value }),
    })
    .then(response => {
      if (response.status === 201) {
        return response.json();
      } else if (response.status === 400) {
        throw new Error('Bad request (invalid request body)');
      } else if (response.status === 404) {
        throw new Error('Not found');
      } else if (response.status === 409) {
        throw new Error('Subscription already exists');
      } else if (response.status === 500) {
        throw new Error('Server error');
      } else {
        throw new Error('Unexpected error');
      }
    })
    .then(data => {
      console.log(data);
      alert(data.message || 'Subscription successful!');
    })
    .catch(error => {
      console.error('Error:', error);
      alert(error.message || 'Subscription failed. Please try again.');
    });
  } else {
    console.log('Invalid email format.');
    alert('Please enter a valid email address.');
  }
}

