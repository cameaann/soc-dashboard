const Filter = ({ filter, handleChange }) => {
  const options = {
    minute: "Viimeisen minutin aikana",
    hour: "Viimeisen tunnin aikana",
    day: "Viimeisen päivän aikana",
    week: "Viimeisen viikon aikana",
    month: "Viimeisen kuukauden aikana",
  };

  const handleOnChange = (event) => {
    const selectedText = event.target.value;
    const selectedKey = Object.keys(options).find(
      (key) => options[key] === selectedText
    );
    handleChange(selectedKey);
  };

  return (
    <div>
      <select
        className="filter"
        onChange={handleOnChange}
        value={options[filter]}>
        {Object.values(options).map((value, index) => {
          return (
            <option key={index} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
