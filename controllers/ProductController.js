let products = require('../products.json');

exports.getAllProduct = (req, res) => {
  res.status(200).json(products)
}

exports.getProduct = (req, res) => {
    res.status(200).json({
        id: req.params.id
    })
}

exports.productStore = (req, res) => {
  res.status(200).send({ msg: "Berhasil menambahkan Produk" })
}

exports.productUpdate = (req, res) => {
    res.status(200).send({ 
        id: req.params.id,
        msg: "Berhasil mengubah Produk" })
}

exports.productDelete = (req, res, next) => {
    res.status(200).send({ 
        id: req.params.id,
        msg: "Berhasil menghapus Produk" })
}