const router = require("express").Router();
const apiController = require("../controller/apiController");
const { upload, uploadMultiple } = require("../middlewares/multer");

// endpoint dashboard & succes allert
router.get("/landing-page", apiController.landingPage);
router.get("/detail-page/:id", apiController.detailPage);
router.post("/booking-page", upload, apiController.bookingPage);

module.exports = router;
