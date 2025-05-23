import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Search } from './layouts';
import { Home, SearchResults, ProductDetail } from './views';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} >
          <Route index element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/detail" element={<ProductDetail />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
