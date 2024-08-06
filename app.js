const express = require('express');
const connectDB = require('./config/db')

// Rutas de la app
const authRoutes = require('./routes/authRoutes');
const app = express();

const port = process.env.APP_PORT || 5000;

//Middleware
app.use(express.json());
//app.use(express.urlencoded({ extended: false}));

//Rutas
app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
})

//Conexión a base de datos
connectDB();