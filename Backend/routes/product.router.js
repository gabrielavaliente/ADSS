const express = require("express");
const router = express.Router();

const ROLES = require("../data/roles.constants.json");

const {
    createProductValidator,
    createPupilajeValidator,
    idInParamsValidator,
    saveCommentValidator
  } = require("../validators/post.validators");

  const ProductController = require("../controllers/product.controller");

  const validateFields = require("../validators/index.middleware");
  const {
    authentication, authorization,
  } = require("../middlewares/auth.middlewares");


  router.get("/:identifier",
  authentication,
  authorization(ROLES.USER),
  idInParamsValidator,
  validateFields,
  ProductController.findOneProductById
);

router.post(
  ["/", "/:identifier"],
  authentication,
  authorization(ROLES.USER),
  createProductValidator,
  validateFields,
  ProductController.saveProduct
);

router.delete(
    "/:identifier",
    authentication,
    authorization(ROLES.USER),
    idInParamsValidator,
    validateFields,
    ProductController.deleteProductById,
  );
  
  router.patch(
    "/comment/:identifier",
    authentication,
    authorization(ROLES.USER),
    idInParamsValidator,
    saveCommentValidator,
    validateFields,
    ProductController.saveCommentProducts
  );
  
  router.patch(
    "/save/:identifier",
    authentication,
    authorization(ROLES.USER),
    idInParamsValidator,
    validateFields,
    ProductController.saveAProducts
    );
  
  router.patch(
    "/visibility/:identifier",
    authentication,
    authorization(ROLES.USER),
    idInParamsValidator,
    validateFields,
    ProductController.toggleHiddenProduct
  );
  
//   router.get(
//     "/user/:identifier",
//     idInParamsValidator,
//     validateFields,
//     ProductController.findByUserProduct
//   );
  
  router.get(
    "/own",
    authentication,
    authorization(ROLES.USER),
    ProductController.findOwnProduct
  );
  
  router.get(
    "/saved",
    authentication,
    authorization(ROLES.USER),
    ProductController.findSavedProducts
  );
  
  router.get("/", ProductController.findAllProducts);
router.get("/:identifier", idInParamsValidator, validateFields, ProductController.findOneProductById);

  module.exports = router;
