import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGreeting } from './redux/greetingSlice';

function App() {
  const dispatch = useDispatch();
  const { isLoading, message } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (isLoading) return (<h3>Loading</h3>);

  return (
    <div>
      <p>
        {`Greeting: ${message}`}
      </p>
    </div>
  );
}

export default App;
