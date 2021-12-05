import React, { useState } from "react";
import { updateUser } from "../actions/userAction";
import './User.css'


function User({ user }) {
  const [disable, setDisable] = useState(true);

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [birthday, setBirthday] = useState(user.birthday);

  const [oldUser, setOldUser] = useState(user);
  const editHandler = () => {
    setDisable(false);
  };

  const submitUser = () => {
    const newUser = { username, email, birthday };
    const update = async () => {
      const res = await updateUser(oldUser, newUser);
      console.log(res);
    };
    update();
    setDisable(true);
  };

  return (
    <React.Fragment >
      <th>
        <input
          type="text"
          placeholder="username"
          className="input-form"
          disabled={disable}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </th>

      <th>
        <input
          type="email"
          placeholder="Email"
          className="input-form"
          disabled={disable}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </th>

      <th>
        <input
          type="text"
          placeholder="Birthday"
          className="input-form"
          disabled={disable}
          value={birthday.substring(0, 10)}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </th>

      <th>
        {disable ? (
          <button className="btn btn-primary" onClick={editHandler}>
            Edit
          </button>
        ) : (
          <button className="btn btn-primary" onClick={submitUser}>
            Update
          </button>
        )}
      </th>
    </React.Fragment>
  );
}

export default User;
