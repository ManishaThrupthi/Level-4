/* eslint-disable no-undef */
const listtodo = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const finished = (index) => {
    all[index].completed = true;
  };

  let thisday = new Date().toLocaleDateString("en-CA");
  // let thisday = new Date().toISOString().split("T")[0];

  const leftover = () => {
    return all.filter((todo) => {
      return todo.dueDate < thisday;
    });
  };

  const latenow = () => {
    return all.filter((todo) => {
      return todo.dueDate === thisday;
    });
  };

  const lateafter = () => {
    return all.filter((todo) => {
      return todo.dueDate > thisday;
    });
  };

  const showinglist = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == thisday ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    finished,
    leftover,
    latenow,
    lateafter,
    showinglist,
  };
};

module.exports = listtodo;

