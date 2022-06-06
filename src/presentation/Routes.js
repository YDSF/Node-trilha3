const { Router }  = require("express");

const router = Router()

const UserController = require("./controllers/UserController");

router.get("/", UserController.handle);

router.get("/customer", UserController.handle);

module.exports = router;
