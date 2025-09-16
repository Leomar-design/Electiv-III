const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
const { name, email } = req.body;

if (!name || !email) {
    return res.status(400).json({ error: 'Nombre y correo son obligatorios' });
}

console.log('Datos recibidos:', { name, email });

res.json({ message: `Gracias ${name}, tu formulario fue recibido.` });
});

app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
