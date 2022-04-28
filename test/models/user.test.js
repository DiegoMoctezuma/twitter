const User = require("../../app/models/user");

describe("Unit Tests for User class", () => {
  test("Create an User object", () => {
    const user = new User(1, "carlogilmar", "Carlo", "Bio");

    expect(user.id).toBe(1);
    expect(user.username).toBe("carlogilmar");
    expect(user.name).toBe("Carlo");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  });
  test("Add getters", () => {
    const user = new User(1, "carlogilmar", "Carlo", "Bio");

    expect(user.getUsername).toBe("carlogilmar");
    expect(user.getBio).toBe("Bio");
    expect(user.getDateCreated).not.toBeUndefined();
    expect(user.getLastUpdated).not.toBeUndefined();
  });
  test("Add setters", () => {
    const user = new User(1, "carlogilmar", "Carlo", "Bio");

    user.setUsername = "Gilmar";
    expect(user.username).toBe("Gilmar");

    user.setBio = "New Bio";
    expect(user.bio).toBe("New Bio");
  });
});
