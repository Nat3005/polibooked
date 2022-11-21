import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import LoginPage from './pages/login';
import { UserContextProvider } from './context/UserContext';
import ProtectedRoute from './components/protectedRoute';
import { ChatContextProvider } from './context/ChatContext';

function App() {
  return (
    <UserContextProvider>
      <ChatContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      </ChatContextProvider>
    </UserContextProvider>
  );
}

export default App;
