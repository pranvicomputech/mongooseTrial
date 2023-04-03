//import db schema
const Product = require('../model/Product')
//get all products
const products_all = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
        console.log('Data Sent')
    }
    catch (error) {
        res.json({ 'Message': error })
    }
}

//insert a product
const insert_product = async (req, res) => {
    const product = new Product({
        p_id: req.body.p_id,
        p_name: req.body.p_name,
        p_cost: req.body.p_cost
    })
    try {
        const savedProduct = await product.save()
        console.log('Inserted')
        res.send(savedProduct)
    }
    catch (error) {
        res.status(400).send(error)
    }
}
//update a product
const update_product = async (req, res) => {
    let p_id = req.body.p_id
    const product = {
        p_name: req.body.p_name,
        p_cost: req.body.p_cost
    }
    try {
        const updatedProduct = await Product.updateOne(
            { p_id: p_id }, product
        )
        if (updatedProduct.nModified != 0)
            console.log('Updated')
        else
            console.log('Not updated')
        res.send(updatedProduct)
    }
    catch (error) {
        res.status(400).send(error)
    }
}
//delete a product
const delete_product = async (req, res) => {
    let p_id = req.body.p_id
    try {
        const deletedProduct = await Product.deleteOne(
            { p_id: p_id }
        )
        if (deletedProduct.deletedCount != 0)
            console.log('Deleted')
        else
            console.log('Not deleted')
        res.send(deletedProduct)
    }
    catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    products_all,
    insert_product,
    update_product,
    delete_product
}
