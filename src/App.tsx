import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "AppRoutes";
import './index.css';

const App = () => (
  <Router basename="/portfolio-site">
      <AppRoutes />
  </Router>
);

export default App;
