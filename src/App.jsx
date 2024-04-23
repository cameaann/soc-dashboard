import {
  Route,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { FilterProvider } from "./components/FilterContext";
import Layout from "./components/Layout";
import LogsComponent from "./components/Logs";

const router = createHashRouter(
  createRoutesFromElements(
    <Route>
      <Route exact path="/" element={<Layout />} />
      <Route path="/logs" element={<LogsComponent />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <FilterProvider>
        <RouterProvider router={router}>
          <Layout />
          <LogsComponent />
        </RouterProvider>
      </FilterProvider>
    </>
  );
};

export default App;
