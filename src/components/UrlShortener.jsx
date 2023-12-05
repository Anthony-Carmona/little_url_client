import { useState, useEffect } from "react"
import axios from "axios"

export default function UrlShortener() {

    const [url, setUrl] = useState("some place")

    function handleChange(e) {
      setUrl(e.target.value)
    }

    function handleSubmit() {
      axios.post(
        'http://localhost:3000/sites',
        { long_url: url }
      )
    }

    return (
    <div>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div class="mb-6">
        <label for="url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">lilify your url</label>
        <input type="text" id="url" value={url} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div> 
    </div>
    {url}

    <button onClick={ handleSubmit } class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</div>
    )
  }