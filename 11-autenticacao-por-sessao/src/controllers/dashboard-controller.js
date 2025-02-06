const users = require("../models/users")

module.exports = {
  dashboard: (req, res) => {
    console.log(req.session.currentUser)
    console.log(req.session.authenticated)
    res.render('dashboard', { user: req.session.currentUser })
  },

  users: (req, res) => {
    res.render("users", { users })
  }
}