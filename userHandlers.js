const users = [
    {
      id: 1,
      firstname: "John",
      lasname: "Doe",
      email: "john.doe@example.com",
      city: "Paris",
      language: "English",
    },
    {
      id: 2,
      firstname: "Valeriy",
      lasname: "Appius",
      email: "valeriy.appius@example.com",
      city: "Moscow",
      language: "Russian",
    },
    {
      id: 3,
      firstname: "Ralf",
      lasname: "Geronimo",
      email: "ralf.geronimo@example.com",
      city: "New York",
      language: "Italian",
    },
    {
        id: 4,
        firstname: "Maria",
        lasname: "Iskandar",
        email: "maria.iskandar@example.com",
        city: "New York",
        language: "German",
    },
    {
        id: 5,
        firstname: "Jane",
        lasname: "Doe",
        email: "jane.doe@example.com",
        city: "London",
        language: "English",
    },
    {
        id: 6,
        firstname: "Johanna",
        lasname: "Martino",
        email: "johanna.martino@example.com",
        city: "Milan",
        language: "Spanish",
    },
  ];
  
  const database = require("./database");
  
  const getUsers = (req, res) => {
    database
      .query("select * from users")
      .then(([users]) => {
        res.json(users);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error retrieving data from database");
      })
  };
  
  const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
  
    database
      .query("select * from users where id = ?", [id])
      .then(([users]) => {
        if (users[0] != null) {
          res.json(users);
        } else {
        res.status(404).send("Not Found");
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error retrieving data from database");
      })
  };
  
  module.exports = {
    getUsers,
    getUserById,
  };
  