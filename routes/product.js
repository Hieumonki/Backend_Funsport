const productCon = require("../controllers/productCon");
const router = require("express").Router();

// Lấy sản phẩm ngẫu nhiên
router.get("/random/products", productCon.getRandomProducts); // 👈 dòng mới

// Các route sản phẩm
router.post("/", productCon.addproduct);
router.get("/", productCon.getAllproduct);
router.get("/:id", productCon.getAnproduct);
router.put("/:id", productCon.updateproduct);
router.delete("/:id", productCon.deleteproduct);

module.exports = router;
