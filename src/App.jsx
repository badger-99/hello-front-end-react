import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Greeting from './components/Greeting';
import { getGreeting } from './redux/slices/greetingSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreeting());
  }, []);
  return (
    <main>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </main>
  );
};

export default App;
