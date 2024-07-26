import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Approutes';
import UserProvider  from './context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <UserProvider>
      <Router>
        <AppRoutes />
      </Router>
    </UserProvider>
  );
};

export default App;
