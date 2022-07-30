import { Routes, Route } from 'react-router-dom';
import { Journal } from './content/journal';
import { Main } from './content/main';

function App() {
  return (
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/list" element={<Journal />}/>
        </Routes>
  );
}

export default App;
