import express from 'express';
import cors from 'cors';
import usuariosRoutes from './routes/usuarios.routes.js';
import livrosRoutes from './routes/livros.routes.js';
import avaliacoesRoutes from './routes/avaliacoes.routes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/usuarios', usuariosRoutes);
app.use('/livros', livrosRoutes);
app.use('/avaliacoes', avaliacoesRoutes);

app.get('/', (req, res) => {
  res.send('Servidor da Livraria está funcionando!');
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
