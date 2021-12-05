// This is where we actually use our database
const db = require("../db/postgresDB");

// No try catch here, if her happens will throw upto the service layer
class PersonDAO {
  createPerson = async (firstName, lastName, email) => {
    const result = await db("person").insert({
      email,
      first_name: firstName,
      last_name: lastName,
    });
    // .returning("id");

    console.log(result);
    return result;
  };

  deletePersonByEmail = async (email) => {
    const result = await db("person").where("email", email).del();
    console.log(result);
    return result;
  };
}

module.exports = new PersonDAO();
