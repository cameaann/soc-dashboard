import filterTimeService from "../services/filterTimeService";

const Filter = ({handleChange}) => {
    const options = [
        "Viimeisen tunnin aikana",
        "Viimeisen päivän aikana",
        "Viimeisen viikon aikana",
    ];

    const handleOnChange = (event) =>{
        console.log(filterTimeService.getTime(event.target.value));
        console.log(event.target.value);
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