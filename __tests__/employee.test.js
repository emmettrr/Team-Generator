const Employee = require("../lib/employee");

test("Creates an employee object", () => {
  const employee = new Employee("Emmett", 30, "fakeemail@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name", () => {
  const employee = new Employee("Emmett", 30, "fakeemail@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
});

test("gets employee's id", () => {
  const employee = new Employee("Emmett", 30, "fakeemail@gmail.com");

  expect(employee.id).toEqual(expect.any(Number));
});

test("gets employee's email", () => {
  const employee = new Employee("Emmett", 30, "fakeemail@gmail.com");

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("gets role of employee", () => {
    const employee = new Employee("Emmett", 30, "fakeemail@gmail.com");

    expect(employee.getRole()).toEqual("Employee");
});