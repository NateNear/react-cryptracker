import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Show from './pages/CoinPage/Show.jsx';
import './index.css';
import "@fontsource/ubuntu";
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/index.js';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Transaction from './pages/Transaction/transaction.jsx';
import SignUp from '../firebase-auth/components/signUp.jsx';
import Login from '../firebase-auth/components/login.jsx';
import useAuth from '../firebase-auth/protect.js';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ element }) => {
  const user = useAuth();

  if (!user) {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/" />;
  }

  return element;
};

// Add PropTypes validation for the 'element' prop
ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          {/* Use the ProtectedRoute for your protected routes */}
          <Route path="/" element={<ProtectedRoute element={<App />} />} />
          <Route path="/:id" element={<Show />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
);
