import React, { useEffect, useState } from 'react';
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
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-auth/firebase.js';

const Main = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <App /> : <Navigate to="/signup" />}
      />
      <Route path="/:id" element={<Show />} />
      <Route path="/transactions" element={<Transaction />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Main />
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
);
