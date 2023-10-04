import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import Options from "./components/Options";

function App() {
  const [users, setUsers] = useState([]);
  const [originalState, setOriginalState] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState("");
  const [coloredRows, setColoredRows] = useState(false);
  const [sortedByCountry, setSortedByCountry] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.results);
        setOriginalState(res.results);
      });
  }, []);
  function toggleColoredRows() {
    setColoredRows(!coloredRows);
  }

  function sortByCountry() {
    const usersSorted = [...users].sort((a, b) =>
      a.location.country.localeCompare(b.location.country)
    );
    setUsers(usersSorted);
    setSortedByCountry(!sortedByCountry);
    if (sortedByCountry) {
      resetOriginalState();
    }
  }

  function sortByName() {
    const usersToSort = [...users];
    const usersSorted = usersToSort.sort((a, b) =>
      a.name.first.localeCompare(b.name.first)
    );
    setUsers(usersSorted);
  }
  function sortByLastName() {
    const usersToSort = [...users];
    const usersSorted = usersToSort.sort((a, b) =>
      a.name.last.localeCompare(b.name.last)
    );
    setUsers(usersSorted);
  }

  function removeUser(id) {
    // console.log(id);
    const newList = users.filter((user) => user.email !== id);
    setUsers(newList);
  }

  function resetOriginalState() {
    setUsers(originalState);
    setSortedByCountry(false);
  }

  function view() {
    if (searchedCountry) {
      return users.filter((user) =>
        user.location.country.toLowerCase().includes(searchedCountry)
      );
    } else {
      return users;
    }
  }
  return (
    <div className="App">
      <h3>Technical test</h3>
      <Options
        sortByCountry={sortByCountry}
        resetOriginalState={resetOriginalState}
        setSearchedCountry={setSearchedCountry}
        toggleColoredRows={toggleColoredRows}
        coloredRows={coloredRows}
        sortedByCountry={sortedByCountry}
      />
      <Table
        users={view()}
        sortByName={sortByName}
        sortByLastName={sortByLastName}
        sortByCountry={sortByCountry}
        removeUser={removeUser}
        coloredRows={coloredRows}
      />
    </div>
  );
}

export default App;
