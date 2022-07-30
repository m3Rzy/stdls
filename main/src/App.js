import { Routes, Route } from 'react-router-dom';
import { Journal } from './content/journal';
import { Main } from './content/main';
import DataTable from './content/stats';

function App() {
  return (
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/list" element={<Journal />}/>
          <Route path="/stats" element={<DataTable />} />
        </Routes>
  );
}

export default App;
