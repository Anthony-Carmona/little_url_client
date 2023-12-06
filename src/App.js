import './App.css';
import UrlShortener from './components/UrlShortener';
import RedirectToSite from './components/RedirectToSite';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UrlShortener/>} />
          <Route path="/:site_code" element={<RedirectToSite/>} />
        </Routes>
      </Router>
    </div>
  );
}

// function routers_router() {
//   let { sub_directory } = useParams();
//   return <UrlShortener />;
// }

export default App;
