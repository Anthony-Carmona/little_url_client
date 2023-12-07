import { useState, useEffect } from "react"
import axios from "axios"
import ReactLoading from "react-loading";

export default function RedirectToSite({site_code}) {

    const [redirectUrl, setRedirectUrl] = useState()
    const [errorMsg, setErrorMsg] = useState()

    useEffect(() => {
        axios.get(
            `${process.env.REACT_APP_SERVER_URL}/${site_code}`,
          ).then(
            (data) => {
              data.data ? setRedirectUrl(data.data.long_url) : handleError("invalid site code")
            }, (err) => {
                handleError(err)
            } 
          )
       }, []);

    useEffect(
        () => {
            if(redirectUrl) window.location.href = redirectUrl;
        }
        ,[redirectUrl])


    function handleError(err){
        console.log("error")
        console.log(err)
        console.log("error")
    }

    return (
        <div>
        <h2>Redirecting</h2>
        <ReactLoading
            
            type="spinningBubbles"
            color="#0000FF"
            height={100}
            width={50}
        />
    </div>
    )
}