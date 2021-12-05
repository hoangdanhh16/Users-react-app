import User from "./User";

function ListUser({ users }) {
  return (
    <div className="users">
      {users && (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Birthday</th>
              <th scope="col">Button</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => {
              return (
                  <tr key={user._id}>
                    <User user={user} />
                  </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListUser;
