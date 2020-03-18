const router = require("express").Router();
const mongoose = require("mongoose");
const Product = require("../models/db.js");

mongoose
    .connect("mongodb://localhost/nz1905", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("数据库连接成功");
    })
    .catch(err => {
        console.log(err);
    });

//列表页面
router.get("/", (req, res) => {
    Product.find().then(data => {
        //console.log(data);
        res.render("products/list", { products: data });
    });
});
//新增页面
router.get("/new", (req, res) => {
    res.render("products/new", {});
});
//新增的接口
router.post("/", (req, res) => {
    let product = new Product(req.body);
    product.save().then(() => {
        res.redirect("/products");
    });
});

module.exports = router;