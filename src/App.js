import './App.css';
import UrlShortener from './components/UrlShortener';
import RedirectToSite from './components/RedirectToSite';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UrlShortener/>} />
          <Route path="/:site_code" element={<RedirectToSiteHelper/>}/>
        </Routes>
      </Router>
    </div>
  );
}

function RedirectToSiteHelper() {
  let { site_code } = useParams();
  return <RedirectToSite site_code={site_code} />;
}

export default App;
