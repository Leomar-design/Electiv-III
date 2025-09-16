const form = document.getElementById('contactForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', async (e) => {
e.preventDefault();

const data = {
    name: form.name.value,
    email: form.email.value
};

try {
    const response = await fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
    messageDiv.style.color = 'green';
    messageDiv.textContent = result.message;
    form.reset();
    } else {
    messageDiv.style.color = 'red';
    messageDiv.textContent = result.error || 'Error al enviar el formulario';
    }
} catch (error) {
    messageDiv.style.color = 'red';
    messageDiv.textContent = 'Error de conexión con el servidor';
}
});
