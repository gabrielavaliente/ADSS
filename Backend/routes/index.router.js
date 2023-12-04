const express = require("express");
const router = express.Router();

const postRouter = require("./post.router");
const authRouter = require("./auth.router");
const productRouter = require("./product.router")

//api/....
router.use("/auth", authRouter);
router.use("/post", postRouter); 
router.use("/product",productRouter);


module.exports = router;