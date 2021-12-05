const personService = require("../service/person");

class PersonController {
  createPerson = async (req, res) => {
    try {
      const result = await personService.createPerson(req.body);
      res.status(201).json({ status: 201, data: result });
    } catch (e) {
      console.log(e);
      res.status(500).json({ status: 500, data: e.message });
    }
  };

  deletePersonByEmail = async (req, res) => {
    try {
      const result = await personService.deletePersonByEmail(req.body);
      if (result === 1) {
        res
          .status(200)
          .json({ status: 200, msg: "Entry successfully deleted" });
      } else {
        res.status(404).json({ status: 404, msg: "User with email not found" });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ status: 500, data: e.message });
    }
  };
}

module.exports = new PersonController();
