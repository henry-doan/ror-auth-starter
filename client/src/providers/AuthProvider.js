import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()

  const handleRegister = (user) => {
    axios.post("/api/auth", user)
      .then( res => {
        setUser(res.data.data);
        navigate("/");
      })
      .catch( err => {
        console.log(err)
        setErrors({ variant: 'danger', msg: err.response.data.errors.full_messages[0] })
      })
  }
  
  const handleLogin = (user) => {
    axios.post("/api/auth/sign_in", user)
      .then( res => {
        setUser(res.data.data);
        navigate("/");
      })
      .catch( err => {
        console.log(err)
        setErrors({ variant: 'danger', msg: err.response.data.errors[0] })
      })
  }
  
  const handleLogout = () => {
    axios.delete("/api/auth/sign_out")
      .then( res => {
        setUser(null);
        navigate('/login');
      })
      .catch( err => {
        console.log(err)
        setErrors({ variant: 'danger', msg: err.response.data.errors[0] })
      })
  }
  
  return (
    <AuthContext.Provider value={{
      user,
      errors,
      setErrors,
      authenticated: user !== null,
      handleRegister: handleRegister,
      handleLogin: handleLogin,
      handleLogout: handleLogout,
      setUser: (user) => setUser(user)
    }}>
      { children }
    </AuthContext.Provider>
  ) 
};

export default AuthProvider;