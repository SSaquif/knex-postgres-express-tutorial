const express = require("express");
const personController = require("../controller/person");

const router = express.Router();

router.post("/person", personController.createPerson);

router.delete("/person/email", personController.deletePersonByEmail);

module.exports = router;
