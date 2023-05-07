const express = require('express');
const app = express();
const morgan = require('morgan');

// CONFIGURACIONES 

app.set('port', process.env.PORT || 3000); /*aqui se setea el puerto a 3000 Y la sentencia process.env.PORT quiere decir que tome el puerto que le indique el sistema, y en dado caso que no que tome el 3000 */
app.set('json spaces', 2);

// MIDDLEWARES 

app.use(morgan('dev')); /*este metodo envia la informacion a consola del error el tiempo y el peso de lo que solicita desde el navegador */
app.use(express.urlencoded({extended:false}));/*entiende los datos de los formularios solamente basicos como textos  */
app.use(express.json()); /*este metodo recibe formatos Json y los entiende */

//RUTAS ROUTES

app.use(require('./routes/index'));
app.use('/api/datos', require('./routes/datos'));

// EMPEZANDO EL SERVIDOR 
app.listen(3000, () => {
    console.log(`el puerto esta escuchando en ${app.get('port')} `); /*en este espacio se declara que tomara el puerto desde cualquier parte de la aplicacion */
});
