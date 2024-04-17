import {
  Route,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/layoutComponent';
import LogsComponent from './components/logsComponent';
import FirewallLogs from './components/FirewallLogs';

const router = createHashRouter(
  createRoutesFromElements(
    <Route>
      <Route exact path="/" element={<Layout />} />
      <Route path="/logs" element={<LogsComponent />} />
      <Route path="/firewallLogs" element={<FirewallLogs />} />
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
