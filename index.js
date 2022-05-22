const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoute');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/product', productRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
  })