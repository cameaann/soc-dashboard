const Filter = ({handleChange}) => {
    const options = [
        "Viimeisen tunnin aikana",
        "Viimeisen päivän aikana",
        "Viimeisen viikon aikana",
    ];

    const handleOnChange = (event) =>{
        handleChange(event.target.value)
    }

    return(
        <div>
        
            <select className="filter" onChange={handleOnChange}>
                {options.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
            </select>
        </div>
    )
}

export default Filter;