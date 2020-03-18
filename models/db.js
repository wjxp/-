//schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//创建一个模型
const productSchema = new Schema(
  {
    pname: {
      type: String, //为字符串类型
      required: true //表示必填项
    },
    pprice: {
      type: Number,
      default: 0 //默认值为0
    },
    pdesc: {
      type: String,
      default: "male"
    }
  },
  {
    timestamps: true
  }
);
const Product = mongoose.model("product", productSchema);
module.exports = Product;
