import "./Options.css";

function Options({
  sortByCountry,
  resetOriginalState,
  setSearchedCountry,
  toggleColoredRows,
  coloredRows,
  sortedByCountry,
}) {
  return (
    <div className="options__container">
      <button
        className={coloredRows ? "action__button--active" : "action__button"}
        onClick={toggleColoredRows}
      >
        Color rows
      </button>
      <button
        className={
          sortedByCountry ? "action__button--active" : "action__button"
        }
        onClick={sortByCountry}
      >
        Sort by country
      </button>
      <button className="action__button" onClick={resetOriginalState}>
        Reset to original state
      </button>
      <input onChange={(e) => setSearchedCountry(e.target.value)} type="text" />
    </div>
  );
}

export default Options;
