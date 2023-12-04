
const validators = () => { };

const { body, param } = require("express-validator");

validators.createPupilajeValidator = [
    param("identifier")
        .optional()
        .notEmpty()
        .withMessage("Identifier is required")
        .isMongoId()
        .withMessage("Identifier must be a Mongo ID"),
    body("title").notEmpty().withMessage("Title is required"),
    body("description")
        .notEmpty()
        .withMessage("Description is required")
        .isLength({ max: 280 })
        .withMessage("Description maximum length is 280 characters"),
    body("image")
        .notEmpty()
        .withMessage("Image is required")
        .isURL()
        .withMessage("Image must be a base an URL"),
    body("pupilajeState").notEmpty().withMessage("Pupilaje state is required"),
    body("price").notEmpty().withMessage("Price is required").isNumeric().withMessage("Price must be a number"),
    body("contact")
        .notEmpty()
        .isURL()
        .withMessage("Contact is required"),
    body("water").notEmpty().withMessage("Serrvice-Water state is required"),
    body("electricity").notEmpty().withMessage("Serrvice-electricity state is required"),
    body("internet").notEmpty().withMessage("Serrvice-internet state is required"),
    body("mapLink")
        .notEmpty()
        .isURL()
        .withMessage("mapLink is required"),
];

validators.createProductValidator = [
    param("identifier")
        .optional()
        .notEmpty()
        .withMessage("Identifier is required")
        .isMongoId()
        .withMessage("Identifier must be a Mongo ID"),
    body("title").notEmpty().withMessage("Title is required"),
    body("description")
        .notEmpty()
        .withMessage("Description is required")
        .isLength({ max: 280 })
        .withMessage("Description maximum length is 280 characters"),
    body("image")
        .notEmpty()
        .withMessage("Image is required")
        .isURL()
        .withMessage("Image must be a URL"),
    body("productState").notEmpty().withMessage("Product state is required"),
    body("price").notEmpty().withMessage("Price is required").isNumeric().withMessage("Price must be a number"),
    body("contact")
        .notEmpty().withMessage("Contact is required")
        .isURL().withMessage("Contact must be a WhatsApp link")
        
];


validators.idInParamsValidator = [
    param("identifier")
        .notEmpty()
        .withMessage("Identifier is required")
        // .isMongoId()
        // .withMessage("Identifier must be a Mongo ID"),
];

validators.saveCommentValidator = [
    body("content")
      .notEmpty()
      .withMessage("Content is required")
      .isLength({ max: 280 })
      .withMessage("Content max lenght is 280 characters"),
    body("_id")
      .optional()
      .notEmpty()
      .withMessage("_id is required")
      .isMongoId()
      .withMessage("Identifier must be a Mongo ID"),
  ];


module.exports = validators;