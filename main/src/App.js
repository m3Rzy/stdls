import { Routes, Route } from 'react-router-dom';
import { Main } from './content/main';
import { PersonalAccount } from './content/personalAccount';


function App() {
  return (
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/auth" element={<PersonalAccount />}/>
        </Routes>
  );
}

export default App;
