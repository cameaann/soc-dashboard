const Filter = ({handleChange}) => {
    const options = [
        "Viimeinen tunti",
        "Viimeinen päivä",
        "Viimeinen viikko",
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