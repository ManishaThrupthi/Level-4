/* eslint-disable no-undef */
const listtodo = require("../todo");
let thisday = new Date().toLocaleDateString("en-CA");

const { all, finished, add, leftover, latenow, lateafter } = listtodo();

describe("Testing the listtodo", () => {
  beforeAll(() => {
    add({
      title: "Busy doing codechef contest",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("To add another todo into our list", () => {
    // expect(all.length).toBe(0);
    let length = all.length;

    add({
      title: "Attending the meet",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("Ticking the todo as done", () => {
    expect(all[0].completed).toBe(false);
    finished(0);
    expect(all[0].completed).toBe(true);
  });

  test("Left over todos are retrieved", () => {
    let todoslist = leftover();

    expect(
      todoslist.every((todo) => {
        return todo.dueDate < thisday;
      })
    ).toBe(true);
  });

  test("latenow todos are retrieved", () => {
    let todoslist = latenow();

    expect(
      todoslist.every((todo) => {
        return todo.dueDate === thisday;
      })
    ).toBe(true);
  });

  test("lateafter todos are retrieved", () => {
    let todoslist = lateafter();

    expect(
      todoslist.every((todo) => {
        return todo.dueDate > thisday;
      })
    ).toBe(true);
  });
});
