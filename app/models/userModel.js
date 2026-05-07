// app/models/user.js
const { v4: uuidv4 } = require('uuid');

class User {
  constructor(name, email, linkImg, quantità) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.linkImg = linkImg;
    this.quantità = quantità;

  }
}

module.exports = User;