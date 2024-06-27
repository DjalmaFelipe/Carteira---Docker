// server/index.js
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const routes = require('./routes');

// const app = express();

// app.use(cors({
//   origin: 'http://127.0.0.1:5500/FrontEnd/index.html',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

// app.use(cors());
// app.use(bodyParser.json());
// app.use('/api', routes);
// app.options('*', cors());

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

// Middleware para configurar headers CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Configurações adicionais para requisições OPTIONS
app.options('*', cors());

app.use(bodyParser.json());
app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});