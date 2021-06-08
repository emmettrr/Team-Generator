const Manager = require('../lib/manager')

test("create a manager object", () => {
    const manager = new Manager('Emmett', 30, 'fakeemail@gmail.com', 5332)

    expect(manager.officeNumber).toEqual(expect.any(Number))
})

test("gets role of employee", () => {
    const manager = new Manager('Emmett', 30, 'fakeemail@gmail.com', 5332)

    expect(manager.getRole()).toEqual("Manager")
})