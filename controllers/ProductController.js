let products = require('../products.json');

exports.getAllProduct = (req, res) => {
  res.status(200).json(products)
}

exports.getProduct = (req, res) => {
  const product = products.find(p => p.id === req.params.id);
    res.status(200).json({
        product
    })
}

exports.productStore = (req, res) => {
  res.status(201).send({ msg: "Berhasil menambahkan Produk" })
}

exports.productUpdate = (req, res) => {
  const product = products.find(p => p.id === req.params.id);
    res.status(200).send({ 
      product,
      msg: "Berhasil mengubah Produk" })
}

exports.productDelete = (req, res) => {
  const product = products.find(p => p.id === req.params.id);
    res.status(200).send({ 
        product,
        msg: "Berhasil menghapus Produk" })
}