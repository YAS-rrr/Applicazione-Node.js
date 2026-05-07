// app/controllers/userController.js
const User = require('../models/userModel');
exports.home = (req, res) => {
  res.render('index');
};
exports.listUsers = (req, res) => {
  const users = User.findAll();
  res.render('users', { users });
};
exports.createUser = (req, res) => {
  const { name, email, linkImg, quantità, prezzo } = req.body;
  User.create(name, email, linkImg, quantità, prezzo);
  res.redirect('/users');
};
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  User.delete(id);
  res.redirect('/users');
}

exports.sellUser = (req, res) => {
  const { id } = req.params;
  User.sell(id);
  res.redirect('/users');
}

exports.restockUser = (req, res) => {
  const { id } = req.params;
  User.restock(id);
  res.redirect('/users');
}

;