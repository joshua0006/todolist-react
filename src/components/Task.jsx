import { useState } from "react";

const Task = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the todo state by adding the current inputValue to the list of todos
    setTodo([...todo, { text: inputValue, isDone: false }]);

    // Clear the input field after submitting
    setInputValue("");
  };

  const deleteTodo = (index) => {
    const newTodoList = todo.filter((_, i) => i !== index);
    setTodo(newTodoList);
  };

  const markDone = (index) => {
    const newTodoList = todo.map((item, i) =>
      i === index ? { ...item, isDone: !item.isDone } : item
    );
    setTodo(newTodoList);
  };

  return (
    <div className="flex flex-col justify-center items-center p-52 outline-0">
      <form className="shadow-outline border p-10" onSubmit={handleSubmit}>
        <input
          className="h-20 w-96 mr-5 pl-5"
          type="text"
          placeholder="Add task"
          value={inputValue} // Bind the input value to inputValue state
          onChange={(e) => setInputValue(e.target.value)} // Update the inputValue state on change
        />
        <button type="submit" className="bg-orange-400 px-10 py-5 rounded-md">
          Add
        </button>
      </form>
      <ul>
        {todo.map((todoItem, index) => (
          <li
            className="shadow-outline border p-10 flex items-center w-[543px] my-2 cursor-pointer"
            key={index}
          >
            <p
              onClick={() => markDone(index)}
              className={`${todoItem.isDone ? "line-through" : ""}`}
            >
              {todoItem.text}
            </p>
            <button
              onClick={() => deleteTodo(index)}
              className="bg-red-500 px-5 py-2 rounded-md ml-auto"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
