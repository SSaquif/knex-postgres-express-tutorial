const personDAO = require("../dao/person");

// This will throw its error upto the controller layer
// Sometimes (ie if controller gets too big)
// Might also want to do some error handling here

class PersonService {
  // returns a promise, but not consuming it here
  createPerson = (personData) => {
    const { firstName, lastName, email } = personData;
    return personDAO.createPerson(firstName, lastName, email);
  };

  deletePersonByEmail = (personData) => {
    const { email } = personData;
    return personDAO.deletePersonByEmail(email);
  };
}

module.exports = new PersonService();
