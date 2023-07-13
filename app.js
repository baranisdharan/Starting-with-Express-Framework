const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res) => {
    res.send(`
        <form method="POST" action="/product">
            <input type="text" name="title" placeholder="Product Title">
            <input type="text" name="size" placeholder="Product Size">
            <button type="submit">Add Product</button>
        </form>
    `);
});


app.post('/product', (req, res) => {
    const { title, size } = req.body;
    console.log('Product Name:', title);
    console.log('Product Size:', size);
    res.redirect('/');
});

app.use('/',(req, res, next) => {
    res.send('<h1>Hello</h1>');
});

app.listen(3000);
