const express = require("express");

const app = express();

// Preparar os nossos endpoints (rotas do back-end) antes do listen

//Configurar o nosso back-end para receber JSON
app.use(express.json());

// Criando primeira rota

app.use("/", (req, res) => {
  return res.status(200).json("Eai? Blzinha?");
});

app.listen(4000, () => {
  console.log("Server ta funcionando de boa na lagoa!");
});
