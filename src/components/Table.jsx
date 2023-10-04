import "./Table.css";

function Table({
  users,
  removeUser,
  sortByName,
  sortByLastName,
  sortByCountry,
  coloredRows,
  sortedByCountry,
}) {
  if (!users) return;
  // console.log("user", users);
  return (
    <table width="100%" className="table__container">
      <thead>
        <tr className="headers__container">
          <th>Image</th>

          <th onClick={sortByName}>Name</th>

          <th onClick={sortByLastName}>Lastname</th>
          <th
            onClick={() => {
              if (!sortedByCountry) {
                sortByCountry();
              }
            }}
          >
            Location
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          let color;
          if (coloredRows) {
            color = index % 2 ? "colored__row--white" : "colored__row--dark";
          }
          return (
            <tr className={`row__container ${color}`} key={user.email}>
              <td>
                <img src={user.picture.thumbnail} alt="" />{" "}
              </td>

              <td>{user.name.first} </td>

              <td> {user.name.last}</td>
              <td>{user.location.country} </td>
              <td>
                <button onClick={() => removeUser(user.email)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
