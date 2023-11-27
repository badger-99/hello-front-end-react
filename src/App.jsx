import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </main>
  );
}

export default App;
