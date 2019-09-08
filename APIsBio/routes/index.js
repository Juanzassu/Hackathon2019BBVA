var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bios = require('../models/APIsBiomodel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'APIsBio' });
});

router.post('/NuevoBio', function(req,res,next){
	//Crear objeto Mongo y hacer insert
	var miBio = Bios({
		id: req.body.id,
		marca: req.body.marca,
		modelo: req.body.modelo,
	 	camara_res:req.body.camara_res,
  		foto_cara:req.body.foto_cara,
  	    contiene_huella:req.body.contiene_huella,
  		valida_huella:req.body.valida_huella,
  		nom_cte: req.body.nom_cte,			
  		fec_nac: req.body.fec_nac,
  		RFC_cte: req.body.RFC_cte,
  		gen_cte: req.body.gen_cte
	});

	miBio.save(function(err,data){
		if (err){
			console.log('error');
		} else {
			res.render('NuevoBio', data);
		}
	});

});

module.exports = router;
