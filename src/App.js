import logo from './logo.svg';
import './App.css';
import './components/Profile'
import Profile from './components/Profile';
import UrlShortener from './components/UrlShortener';

function App() {
  return (
    <div className="App">
      
{/* <form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div class="mb-6">
        <label for="url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">lilify your url</label>
        <input type="url" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div> 
    </div>

    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form> */}
      <UrlShortener/>

    </div>
  );
}

export default App;
