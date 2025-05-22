import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import { Search,  SearchResults} from './layouts';

function App() {
  return (
    <Router>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
