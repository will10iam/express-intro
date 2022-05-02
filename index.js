const express = require("express");

let data = require ("./data")
const router = require("./post.routes")

const app = express();
app.use(express.json());

// Preparar os nossos endpoints (rotas do back-end) antes do listen

//Configurar o nosso back-end para receber JSON

// Criando primeira rota

app.get("/", (req, res) => {

  return res.status(200).json(data);
});

app.post("/", (req, res) => {
  const {endereco} = req.body
  const dados = {ID:`${ new Date().valueOf()}`, endereco:`${endereco}`}
  data.push(dados);
  
  return res.status(201).json(data);
})



app.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (!data.filter((el) => id === el.ID).length) {
    return res.status(404).json("ID Invalido");
  }



  data.forEach((el, idx) => {
    if (id === el.ID) data.splice(idx, 1);
  });

  return res.status(202).json(data);
});



app.put("/:id", (req, res) => {

  const { id } = req.params;

  if (!data.filter((el) => id === el.ID).length) {
    return res.status(404).json("ID Invalido");
  }


  data.forEach((el, idx) => {
    if (id === el.ID) data.splice(idx, 1);
  });

  const {endereco} = req.body
  const dados = {ID:id , endereco:`${endereco}`}
  data.push(dados);

  return res.status(202).json(data);

});

app.patch("/:id",  (req, res ) => {
  const { id } = req.params;


  if (!data.filter((el) => id === el.ID).length) {
    return res.status(404).json("ID Invalido");
  }


  const NovoObj = data.filter((el) => id === el.ID)[0];
  if (req.body.endereco) NovoObj.endereco = req.body.endereco;
  if (req.body.numero) NovoObj.numero = req.body.numero;

  data.forEach((el, idx) => {
    if (id === el.ID) data.splice(idx, 1);
  });

  data.push(NovoObj);

  return res.status(202).json(data);
});



app.listen(4000, () => {
  console.log("Server ta funcionando de boa na lagoa!");
});