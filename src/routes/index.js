const { Router } = require('express'); /*aqui le estamos diciendo a express que llame el metodo Router  */
const router = Router(); /*declaramos la variable constante router la cual ejecuta el objeto de express Router */

/*router.get('/',(req, res)=> {
    res.json({"Title":"los corchetes reciben un objeto de tipo json"}); /*res.send recibe un string o cadena de texto // res.json responde la informacion con formato json 
});*/

router.get('/test', (req, res)=> {
    const data = {
        "name": "solicita un nombre",
        "sitio web": "solicita otro parametro"
    };
    res.json(data); /*esta es otra manera de recibir un parametro en especifico por que lo que hace es que dentro del obtener le dice que cada vez que se mencione test traiga la informacion que dentro de la variable resida */ 
});

module.exports = router;

/*lo que estamos haciendo aqui es importar las rutas desde otro archivo para que se ejecute en index.js */