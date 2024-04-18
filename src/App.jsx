import {
  Route,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/Layout';
import LogsComponent from './components/Logs';

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
      <RouterProvider router={router} />
    </>
  );
};

export default App;
