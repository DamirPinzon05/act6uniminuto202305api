
const mongoose = require('mongoose');
const { Router } = require('express');
const router = Router();
const _ = require('underscore');

// Define el esquema de tu modelo
const datosSchema = new mongoose.Schema({
    titulo: String,
    subtitulo: String,
    parrafo: String,
    final: String
});

// Crea tu modelo de Mongoose
const Datosgenerales = mongoose.model('datosgenerales', datosSchema);

// Conéctate a la base de datos de MongoDB en Atlas
mongoose.connect('mongodb+srv://<user_bd>:<lBNUMJP3hJUlPtVB>@<cluster0>.mongodb.net/<blog>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conexión exitosa a MongoDB Atlas'))
    .catch((err) => console.log(err));

// Definir rutas para operaciones CRUD
router.get('/', (req, res) => {
    Datosgenerales.find()
        .then((datos) => res.json(datos))
        .catch((err) => res.status(500).json({ error: err }));
});

router.post('/', (req, res) => {
    const { titulo, subtitulo, parrafo, final } = req.body;
    if (titulo && subtitulo && parrafo && final) {
        const newData = new Datosgenerales({ titulo, subtitulo, parrafo, final });
        newData.save()
            .then(() => res.json(newData))
            .catch((err) => res.status(500).json({ error: err }));
    } else {
        res.send('Falta un dato, por favor revise');
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, subtitulo, parrafo, final } = req.body;
    if (titulo && subtitulo && parrafo && final) {
        Datosgenerales.findByIdAndUpdate(id, { titulo, subtitulo, parrafo, final }, { new: true })
            .then((datoActualizado) => res.json(datoActualizado))
            .catch((err) => res.status(500).json({ error: err }));
    } else {
        res.status(500).json({ error: 'Hay un error, no se puede procesar. Por favor, revise' });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Datosgenerales.findByIdAndDelete(id)
        .then(() => res.send('Eliminado correctamente'))
        .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;