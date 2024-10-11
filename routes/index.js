var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/paketwisata', function(req, res, next){
  let listpaketwisata = [
    {'nama' : 'wisata Pulau kemaro', 'harga' : 500000},
    {'nama' : 'wisata Puntik kayu', 'harga' : 250000},
    {'nama' : 'wisata Jakabaring', 'harga' : 100000},
  ]
  res.render('paketwisata',{
    title: 'Paket Wisata',
    listpaketwisata: listpaketwisata
  });
});

router.get('/orderpaket', function(req, res, next){
  res.render('orderpaket'), {title: 'Detail Pemesanan Paket'};
});

router.get('/orderdetail', function(req, res, next){
  res.render('orderdetail'), {title: 'Detail Pemesanan Paket'};
});

module.exports = router;
