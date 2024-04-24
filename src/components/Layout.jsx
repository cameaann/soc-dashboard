import Header from "./Header";
import { useFilter } from "./FilterContext";

const Layout = ({children}) => {
  const { setTimeFilter } = useFilter();

  const handleChange = (time) => {
    setTimeFilter(time)
  }

  return (
    <div>
      <Header onChange={handleChange}/>
      <div className="content">{children}</div>
    </div>
  );
};
export default Layout;
