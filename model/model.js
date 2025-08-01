const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

// category
const categoryData = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 6,
    unique: true,
  },
  image: {
    type: String,
  },
});

const productsData = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  tab: {
    type: String,
  }
});

const productselldata = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  tab: {
    type: String,
  }
});

// product
const dataProduct = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    default: 'no name',
    trim: true,
    minlength: 1,
  },
  desc: {
    type: String,
  },
  linkimage: {
    type: String,
  },
  linkproduct: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "author",
  },
});

const userData = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  image: {
    type: String,
  },
  desc: {
    type: String,
  },
  link: {
    type: String,
  },
  background: {
    type: String,
  },
  createUser: {
    type: String,
  },
  theme: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "theme",
    },
  ],
});

const accountData = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 6,
    unique: true,
  },
  image: {
    type: String,
    default: 'no name',
  },
  fullName: {
    type: String,
    minlength: 6,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  admin: {
    type: Boolean,
    default: false,
  },
}, { timeseries: true });

const orderSchema = new mongoose.Schema({
  orderId: String,
  requestId: String,
  amount: Number,
  transId: Number,
  payType: String,
  orderInfo: String,
  signature: String,
  time: Date,
});

// news
const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 6
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Apply plugins
newsSchema.plugin(mongoosePaginate);
productselldata.plugin(mongoosePaginate);
productsData.plugin(mongoosePaginate);
categoryData.plugin(mongoosePaginate);
userData.plugin(mongoosePaginate);
dataProduct.plugin(mongoosePaginate);
accountData.plugin(mongoosePaginate);

// Models
let product = mongoose.model("product", productsData);
let productsell = mongoose.model("productsell", productselldata);
let category = mongoose.model("category", categoryData);
let theme = mongoose.model("theme", dataProduct);
let author = mongoose.model("author", userData);
let account = mongoose.model("account", accountData);
let order = mongoose.model("order", orderSchema);
let news = mongoose.model("news", newsSchema); 

// Export
module.exports = { theme, author, account, category, product, productsell, order, news };
