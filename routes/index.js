var express = require('express');
var router = express.Router();
const controllers = require('../controllers/controllers');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/personas', controllers.listPersonas);
router.get('/agregar', controllers.agregarPersona); //realiza la accion, agrega los elementos
router.post("/agregar", controllers.postAgregarPersona); // muestra los campos solamente
router.get('/edit/:id', controllers.getEditarPersona);
router.post('/update/:id', controllers.postUpdatePersona);
router.get('/delete/:id', controllers.getDeletePersona);
router.post('/delete/:id', controllers.postDeletePersona);
router.get('/buscar', controllers.buscarPersona);
router.post('/resultados', controllers.buscarPersonaResultados);
router.get('/oficinas',controllers.listOficinas); // anda
router.get('/agregar-ofi',controllers.agregarOficina); //anda
router.post("/agregar2",controllers.postAgregarOficina);//anda
router.get('/edit-ofi/:id',controllers.getEditarOficina);//anda
router.post('/update-ofi/:id',controllers.postUpdateOficina); //falta
router.get('/delete-ofi/:id',controllers.getDeleteOficina);//falta
router.post('/delete-ofi/:id', controllers.postDeleteOficina);//falta
router.get('/buscar2', controllers.buscarOficina); //anda
router.post('/resultados2', controllers.buscarOficinaResultados);




module.exports = router;