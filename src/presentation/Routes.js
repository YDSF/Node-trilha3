
const { Router } = require("express");

const router = Router()

const UserController = require("./controllers/UserController");

const User2Controller = require("./controllers/User2Controller");

const AllUserController = require("./controllers/AllUserController");


router.get("/", AllUserController.handle);

router.get("/User", UserController.handle);

router.get("/User/2", User2Controller.handle);


router.post("/", AllUserController.handle);

router.post("/User", UserController.handle);

router.post("/User/2", User2Controller.handle);

module.exports = router;
