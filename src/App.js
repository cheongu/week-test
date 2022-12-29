import React, { useState } from "react";
import "./App.css";

function User(props) {
  return (
    <div>
      <div className="square">{props.user.title}</div>
    </div>
  );
}

const App = () => {
  const [users, setUsers] = useState([{ id: 0, title: "테스트입니다." }]);
  const [title, setTitle] = useState("");
  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      title: title,
    };

    setUsers([...users, newUser]);
  };
  return (
    <div className="style">
      <div className="input">
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={addUserHandler}>추가하기</button>
      </div>

      <div className="container">
        <h1>Todo List</h1>
      </div>
      <div className="itemBox">
        {users.map((user) => {
          return <User user={user} key={user.id} />;
        })}
      </div>
    </div>
  );
};

export default App;
