const Engineer = require('../lib/engineer')

test("creates an engineer object", () => {
    const engineer = new Engineer("Emmett", 30, "fakeemail@gmail.com", "emmettrr")

    expect(engineer.github).toEqual(expect.any(String))
})

test("gets engineer github value", () => {
    const engineer = new Engineer("Emmett", 30, "fakeemail@gmail.com", "emmettrr")

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

test("gets role of employee", () => {
    const engineer = new Engineer("Emmett", 30, "fakeemail@gmail.com", "emmettrr")

    expect(engineer.getRole()).toEqual("Engineer")
})