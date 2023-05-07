const { Router } = require('express'); 
const router = Router(); 
const _ = require('underscore'); /*se puede asignar _ subguion para declararlo como variable */

const Datosgenerales = require ('../arregloobjetos.json');

router.get('/', (req, res)=> {
    res.json(Datosgenerales);
});

router.post('/', (req, res)=> {
    const {titulo, subtitulo, parrafo, final}= req.body;
    if (titulo && subtitulo && parrafo && final) {
        const id = Datosgenerales.length + 1;
        const newdata = {...req.body, id};
        Datosgenerales.push(newdata);
        res.json(Datosgenerales);
    }else{
        res.send('falta un dato revisar por favor');
    }
});

router.put('/:id', (req, res)=> {
    const { id} = req.params;
    const {titulo, subtitulo, parrafo, final}= req.body;
    if (titulo && subtitulo && parrafo && final) {
        _.each(Datosgenerales, (dato, i) => {
            if (dato.id == id) {
                dato.titulo = titulo;
                dato.subtitulo = subtitulo;
                dato.parrafo = parrafo;
                dato.final = final;
            }
        });
        res.json(Datosgenerales);
    }else{
        res.status(500).json({error: 'hay un error no se puede procesar revise bien'});
    }
});

router.delete('/:id', (req, res)=> {
    const { id} = req.params;
    _.each(Datosgenerales, (dato, i) => {
        if (dato.id == id) {
            Datosgenerales.splice(i, 1);
            
        }
    }); /*el metodo each de la libreria underscore recorre los arreglos  */
    res.send(Datosgenerales)
});

module.exports = router;
