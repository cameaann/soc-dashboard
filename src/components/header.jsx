import Filter from "./filterComponent";

const Header = ({handleChange}) => {

const handleOnChange = (option) => {
    handleChange(option)
  };
    return(
        <div className="header">
        <h2>Dashboard</h2>
        <Filter handleChange={handleOnChange} />
      </div>
    )
}

export default Header;