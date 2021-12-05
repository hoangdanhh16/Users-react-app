import ListUser from "./components/ListUser";
import { useEffect, useState } from "react";
import { getByName, addUser } from "./actions/userAction";
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const [users, setUsers] = useState([]);

  const [input, setInput] = useState({ name: "" });

  useEffect(() => {
    const fetchData = async () => {
      const res = await getByName(input);
      setUsers(res);
    };
    fetchData();
  }, [input]);

  const addHandler = (data) => {
    const add = async () => {
      const res = await addUser(data.username, data.email, data.birthday);
      setUsers((prevUsers) => [...prevUsers, res]);
      setValue('username', '');
      setValue('email', '');
      setValue('birthday', '');
    };
    add();
  };

  return (
    <div className="container">
      <div>
        <label htmlFor="name" className="labels">
          <h4>Find user</h4>
        </label>
        <input
          onChange={(e) => setInput({ [e.target.name]: e.target.value })}
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Input name"
          required
        />
      </div>
      <br />
      <form onSubmit={handleSubmit(addHandler)}>
        <h4>Add user</h4>
        <div className="d-flex justify-content-around">
          <div>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Input Username"
              required
              {...register("username")}
            />
          </div>

          <div>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Input Email"
              required
              {...register("email")}
            />
          </div>

          <div>
            <input
              type="date"
              className="form-control"
              id="birthday"
              name="birthday"
              required
              {...register("birthday")}
            />
          </div>

          <div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
      <br />
      <ListUser users={users} />
    </div>
  );
}

export default App;
