const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { STATUS_CODE } = require("../constants/statusCode");

exports.addProductToCart = async (req, res) => {
  const { name } = req.body;

  const product = await Product.findByName(name);
  if (!product) {
    return res.status(STATUS_CODE.NOT_FOUND).json({ error: "Product not found" });
  }

  await Cart.add(product);
  res.status(STATUS_CODE.OK).json({ success: true });
};

exports.getProductsCount = async () => {
  return await Cart.getProductsQuantity();
};
