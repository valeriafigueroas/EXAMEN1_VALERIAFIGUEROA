const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.listen(3000, () => console.log("App escuchando en el puerto 3000!"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://valeriafigueroas:Sortopanda2020@cluster0.isjxj.mongodb.net/?retryWrites=true&w=majority"
  )
  .catch((error) => handleError(error));

  const videosSchema = new mongoose.Schema(
      {
        _id,
        titulo: String,
        descripcion: String,
        duracion: String,
        autor: String,
        enlace: String,
        fecha: {type: Date, default:Date.now}
      },
      {
          collection: "videos",
      }
  )

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname,"public", "index.html"))
})

  app.post("api/videos", function (req, res){
    const newvideo = new videos({
        _id,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        duracion: req.body.duracion,
        autor: req.body.autor,
        enlace: req.body.enlace,
        fecha: {type: Date, default:Date.now}
    })
  });
  
  app.get("/api/videos", (req, res) => {
    videos.find((err, videos) => {
        if (err) res.status(500).send("Error en la base de datos");
        else res.status(200).json(videos);
      });
  });

  app.get("/api/videos/:id", (req, res) => {
    videos.findById(req.params.id, function(err, videos){
        if (err) res.status(500).send("Error en la base de datos");
        else {
            if (videos != null) {
              res.status(200).json(videos);
            } else res.status(404).send("No se encontro ese ID");
          }
    })
  });

  app.get("/api/videos/autor", (req, res) => {
    videos.findById(req.params.autor, function(err, videos){
        if(err) res.status(500).send("Error en la base de datos");
        else {
            if (videos != null) {
                res.status(404).send("No existe el autor")
            }
        }
    })
  })


