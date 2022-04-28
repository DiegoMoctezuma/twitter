const User = require("../models/user");

class UserService {
  static create(id, username, name) {
    return new User(id, username, name, "Sin bio");
  }

  static getInfo(user) {
    const infoList = [user.id, user.username, user.name, "Sin Bio"];
    return infoList;
  }

  static updateUserUserName(user, newUserName) {
    return (user.username = newUserName);
  }

  static getAllUsernames(users) {
    return users.map((user) => user.username);
  }
}

module.exports = UserService;
