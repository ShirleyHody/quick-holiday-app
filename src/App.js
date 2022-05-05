import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import SearchPage from './SearchPage'
import ResultsPage from './ResultsPage'

const App = () => {
  return (
     <Routes>
       <Route path="/search" element={<SearchPage />} />
       <Route path="/results" element={<ResultsPage />} />
     </Routes>
  );
}

export default App;
