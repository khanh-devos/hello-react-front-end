import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter, NavLink, Routes, Route,
} from 'react-router-dom';
import Greeting from './components/Greeting';
import { fetchGreeting } from './redux/greetingSlice';

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (isLoading) return (<h3>Loading</h3>);

  return (
    <div>
      <BrowserRouter>
        <div className="routes-container">

          <NavLink to="/">Home</NavLink>
          <NavLink to="/greeting">Greeting</NavLink>

        </div>
        <Routes>
          <Route path="/" />
          <Route path="/greeting" element={<Greeting />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
