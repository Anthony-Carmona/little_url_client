import { useState, useEffect } from "react"
import axios from "axios"
import { Panel } from 'rsuite';

export default function UrlShortener() {

    const [url, setUrl] = useState("")

    let [little_url, set_little_url] = useState()

    function handleChange(e) {
      setUrl(e.target.value)
    }

    function handleSubmit() {
      axios.post(
        'http://localhost:3000/sites',
        { long_url: url }
      ).then(
        (data) => {
          set_little_url(window.location.href + data.data.little_url)
        }
      )
    }

    return (
    <Panel className="panel">
    <div className="header">
        <label for="url">litify your url</label>
        </div> 
        <div>
        <input className="inputBox" type="text" id="url" value={url} placeholder="Input a url to shorten"onChange={handleChange} required/>

    </div> 
     <button onClick={ handleSubmit } className="submit">Submit</button>
    <div>Your little url:</div>
    { little_url &&
      <div className="littleUrl">
     {little_url}
      </div>
    }

    {url}
    </Panel>

    )
    
  }