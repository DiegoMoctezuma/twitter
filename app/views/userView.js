const UserService = require("../services/userService");

class UserView {
  static createUser(payload) {
    if (payload === null) {
      return {error: "payload no existe"};
    } else if (
      payload.username === null ||
      payload.name === null ||
      payload.id === null ||
      !payload.username ||
      !payload.name ||
      !payload.id
    ) {
      return {error: "necesitan tener un valor válido"};
    } else {
      return UserService.create(payload.id, payload.username, payload.name);
    }
  }
}

module.exports = UserView;
