var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BioSchema =  Schema({
  id: Number,
  marca:String,
  modelo:String,
  camara_res:String,
  foto_cara:String,
  contiene_huella:Boolean,
  valida_huella:Boolean,
  nom_cte: String,
  fec_nac: Date,
  RFC_cte: String,
  gen_cte: String

});  

module.exports = mongoose.model('APIsBio', BioSchema);