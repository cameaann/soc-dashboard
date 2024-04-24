import {
  HashRouter,
  Route,
  Routes
  // createHashRouter,
  // createRoutesFromElements,
  // RouterProvider,
} from "react-router-dom";
import { FilterProvider } from "./components/FilterContext";
import Layout from "./components/Layout";
import LogsComponent from "./components/Logs";
import Dashboard from "./components/Dashboard";


const App = () => {
  return (
    <>
      <FilterProvider>
        <HashRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/logs" element={<LogsComponent />} />
            </Routes>
          </Layout>
        </HashRouter>
      </FilterProvider>
    </>
  );
};


export default App;
