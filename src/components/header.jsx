import Filter from "./Filter";
import { useFilter } from "./FilterContext";

const Header = () => {
const { timeFilter, setTimeFilter } = useFilter();

const handleOnChange = (filter) => {
    setTimeFilter(filter);
  };
    return(
        <div className="header">
        <h2>Dashboard</h2>
        <Filter handleChange={handleOnChange} filter={timeFilter}/>
      </div>
    )
}

export default Header;