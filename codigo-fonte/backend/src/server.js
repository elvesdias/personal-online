
// const express = require("express");
// const cors = require("cors");
// const UserRoutes = require('./routes/UserRoutes');
// const ExerciseRoutes = require('./routes/ExerciseRoutes');
// const ProgramRoutes = require('./routes/ProgramRoutes');
// const WorkoutRoutes = require('./routes/WorkoutRoutes');

// const app = express();

// // Configuração para lidar com JSON no corpo das requisições
// app.use(express.json());

// // Configuração CORS - Permite qualquer origem
// // Em produção, você pode querer restringir isso para seu frontend
// app.use(cors({ origin: '*' })); // Alterar para um domínio específico em produção

// // Pasta pública para imagens
// app.use(express.static("public"));

// // Adiciona os cabeçalhos para permitir requisições de qualquer origem
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   next();
// });

// // Rota de Healthcheck
// app.get('/healthcheck', (req, res) => {
//   res.status(200).json({
//     status: "OK",
//     message: "Backend is running",
//     timestamp: new Date().toISOString(),
//   });
// });

// // Registrando as rotas principais
// app.use('/users', UserRoutes);
// app.use('/exercises', ExerciseRoutes);
// app.use('/programs', ProgramRoutes);
// app.use('/workouts', WorkoutRoutes);

// // Configuração da porta do servidor
// const PORT = 3333;
// app.listen(PORT, function () {
//   console.log(`Server is running on Port ${PORT}`);
// });


const express = require("express");
const cors = require("cors");
const UserRoutes = require('./routes/UserRoutes');
const ExerciseRoutes = require('./routes/ExerciseRoutes');
const ProgramRoutes = require('./routes/ProgramRoutes');
const WorkoutRoutes = require('./routes/WorkoutRoutes');

const app = express();

// Config JSON response
app.use(express.json());

// Solve CORS
// app.use(cors({ credentials: true, origin: "http://localhost:5173" })); (permitir outras origens)

// Public folder for images
app.use(express.static("public"));

// Adicionar os cabeçalhos Access-Control-Allow-Origin
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Healthcheck endpoint
app.get('/healthcheck', (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Backend is running",
    timestamp: new Date().toISOString(),
  });
});

// Routes
app.use('/users', UserRoutes);
app.use('/', ExerciseRoutes);
app.use('/', ProgramRoutes);
app.use('/', WorkoutRoutes);

const PORT = 3333;
app.listen(PORT, '0.0.0.0', function () {
  console.log(`Server is running on Port ${PORT}`);
});
