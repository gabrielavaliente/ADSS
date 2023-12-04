const express = require("express");
const router = express.Router();

const ROLES = require("../data/roles.constants.json");


const {
  createProductValidator,
  createPupilajeValidator,
  idInParamsValidator,
  saveCommentValidator
} = require("../validators/post.validators");

const {
  authentication, authorization,
} = require("../middlewares/auth.middlewares");


const validateFields = require("../validators/index.middleware");
const PupilajeController = require("../controllers/post.controller");

// Rutas para pupilaje



//eliminar

// Rutas para pupilajes
router.get("/", PupilajeController.findAllPupilajes);
router.get(
  "/own",
  authentication,
  authorization(ROLES.USER),
  PupilajeController.findOwnPupilaje
);

router.get("/:identifier",
  authentication,
  authorization(ROLES.USER),
  idInParamsValidator,
  validateFields,
  PupilajeController.finOnePupilajeById
);

router.post(
  ["/", "/:identifier"],
  authentication,
  authorization(ROLES.USER),
  createPupilajeValidator,
  validateFields,
  PupilajeController.savePupilaje
);
//eliminar
router.delete(
  "/:identifier",
  authentication,
  authorization(ROLES.USER),
  idInParamsValidator,
  validateFields,
  PupilajeController.deletePupilajeById,
);

router.patch(
  "/comment/:identifier",
  authentication,
  authorization(ROLES.USER),
  idInParamsValidator,
  saveCommentValidator,
  validateFields,
  PupilajeController.saveCommentPupilaje
);

router.patch(
  "/save/:identifier",
  authentication,
  authorization(ROLES.USER),
  idInParamsValidator,
  validateFields,
  PupilajeController.saveAPupilaje
  );

router.patch(
  "/visibility/:identifier",
  authentication,
  authorization(ROLES.USER),
  idInParamsValidator,
  validateFields,
  PupilajeController.toggleHiddenPupilaje
);

router.get(
  "/user/:identifier",
  idInParamsValidator,
  validateFields,
  PupilajeController.findByUserPupilaje
);



router.get(
  "/saved",
  authentication,
  authorization(ROLES.USER),
  PupilajeController.findSavedPupilajes
);

module.exports = router;