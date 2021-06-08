const Intern = require('../lib/intern')

test("creates an intern object", () => {
    const intern = new Intern('Emmett', 30, 'fakeemail@gmail.com', 'Landmark College')

    expect(intern.school).toEqual(expect.any(String))
})

test("gets intern's school", () => {
    const intern = new Intern('Emmett', 30, 'fakeemail@gmail.com', 'Landmark College')

    expect(intern.school).toEqual(expect.stringContaining(intern.school.toString()))
})

test("gets role of employee", () => {
    const intern = new Intern('Emmett', 30, 'fakeemail@gmail.com', 'Landmark College')

    expect(intern.getRole()).toEqual("Intern")
})