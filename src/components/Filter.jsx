const Filter = ({ handleChange }) => {
  const options = {
    hour: "Viimeisen tunnin aikana",
    day: "Viimeisen päivän aikana",
    week: "Viimeisen viikon aikana",
  };

  const handleOnChange = (event) => {
    const selectedText = event.target.value;
    const selectedKey = Object.keys(options).find(key => options[key] === selectedText);
    console.log("Selected key:", selectedKey);
    handleChange(selectedKey)
  };

  return (
    <div>
      <select className="filter" onChange={handleOnChange}>
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
