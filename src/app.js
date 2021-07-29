import express from 'express';
import fechaRoutes from './routes/fecha.routes.js';
import archivoRoutes from './routes/archivo.routes.js';
import saludoRoutes from './routes/saludo.routes.js';

const app = express();

app.use(express.json());

app.use('/api/fecha', fechaRoutes);
app.use('/api/archivo', archivoRoutes);
app.use('/api/saludo', saludoRoutes);

export default app;