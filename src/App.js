import './App.css';
import Homepage from './components/Homepage';
import DetailPage from "./components/Details";
import { useRoutes } from "hookrouter";

const routes = {
  '/' : () => <Homepage/>,
  '/details' : () => <DetailPage/>
}

function App() {
  const routeResult = useRoutes(routes);
    
  return (
    routeResult
  );
}

export default App;