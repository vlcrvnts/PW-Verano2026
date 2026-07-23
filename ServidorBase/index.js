const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
const PORT =  3000;

let peliculas = [
    {
        id: 1,
        titulo: "Interestelar",
        director: "Christopher Nolan",
        año: 2014
    },
    {
        id: 2,
        titulo: "La sustancia",
        director: "Coralie Fargeat",
        año: 2024
    }
]

let idActual = peliculas.length + 1;

//obtener todas las peliculas 
app.get("/peliculas", (req,res) => {
    res.json(peliculas)
})

//obtener una peliculas por id
app.get("/peliculas/:id", (req,res) => {
    const id = Number(req.params.id);
    const pelicula = peliculas.find(
        pelicula => pelicula.id === id
    );
    if(!pelicula){
        return res.status(404).json({
            mensaje: "Película no encontrada"
        });
    }
    res.json(pelicula);
});

//insertar peliculas
app.post("/peliculas", (req,res) =>{
    const {titulo, director, año} = req.body;
    if(!titulo || !director || !año){
        return res.status(404).json({
            mensaje: "Faltan datos de la película"
        });
    }
    const nuevaPelicula = {
        id: idActual++,
        titulo: titulo,
        director: director,
        año: Number(año)
    };
    peliculas.push(nuevaPelicula);
    res.status(201).json({
        mensaje: "Película resgistrada correctamente",
        pelicula: nuevaPelicula
    });
});

//actualizar pelicula
app.put("/peliculas/:id", (req,res) => {
    const id = Number(req.params.id);
    const {titulo, director, año } = req.body
    if(titulo || !director || !año){
        return res.status(400).json({
            mensaje: "Faltan datos de la película"
        });
    }
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );

    if(indice === -1){
        return res.status(404).json({
            mensaje: "Película no encontrada"
        });
    }
    peliculas[indice] = {
        id: id,
        titulo: titulo,
        director: director,
        año: Number(año)
    };

    res.json({
        mensaje: "Película actualizada correctamente",
        pelicula: peliculas[indice]
    });
});

//eliminar una pelicula 
app.delete("/peliculas/:id", (req,res) => {
    const id = Number(req.params.id);
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );
    if(indice === -1){
        return res.status(404).json({
            mensaje: "Película no encontrada"
        });
    }
    const peliculaEliminada = peliculas[indice];

    peliculas.splice(indice,1);

    res.json({
        mensaje: "Pelicula eliminada correctamente",
        pelicula: peliculaEliminada
    });
});

app.get("/",(req,res) =>{
    res.send("Bienvenido a mi primer servidor");
});

app.get("/pagina",(req,res) =>{
    res.send(`
        <style>
        </style>
        <h1>Mi página</h1>
        <p>Creada con Express</p>
    `);
});

app.get("/saludo/:nombre",(req,res) => {
    const nombre = req.params.nombre;
    res.send("Hola "+nombre);
});

app.listen(PORT,() => {
    console.log("Servidor iniciado en http://localhost:"+PORT);
});

//ejercicio 1
app.get("/par/:numero",(req,res) => {
    const num = req.params.numero;
    if(num % 2 == 0){
        res.send(num + " es un numero par")
    }else{
        res.send(num + " es un numero impar")
    }
})

//ejercicio 2
app.get("/edad/:edad",(req,res) => {
    const edad = req.params.edad;
    if(edad >= 18){
        res.send("Eres mayor de edad")
    }else{
        res.send("Eres menor de edad")
    }
})

//ejercicio 3
app.get("/calculadora/:operacion/:a/:b",(req,res) =>{
    const op = req.params.operacion;
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    let resul=0;

    switch(op){
        case "suma":
            resul = a + b;
            res.send("Resultado: "+resul);
            break;
        case "resta":
            resul = a - b;
            res.send("Resultado: "+resul);
            break;
        case "multiplicacion":
            resul = a * b;
            res.send("Resultado: "+resul);
            break;
        case "division":
            resul = a / b;
            res.send("Resultado: "+resul);
            break;
        default:
            res.send("Operación no valida")
    }    
})

//ejercicio 4
app.get("/tabla/:numero", (req,res) => {
    const num = parseFloat(req.params.numero);
    let resultado = "";

    for(let i = 1; i <=10; i++){
        resultado += `${num} x ${i} = ${num * i}<br>`
    }

    res.send(resultado);
})

//ejercicio 5
app.get("/calificacion/:nota", (req,res) => {
    const nota = parseFloat(req.params.nota);

    if(nota<70){
        res.send(nota + " -> Reprobado");
    }else if(nota>=70 && nota<=79){
        res.send(nota + " -> Aprobado");
    }else if(nota>=80 && nota<=89){
        res.send(nota + " -> Muy bien");
    }else if(nota>=90){
        res.send(nota + " -> Excelente");
    }
})