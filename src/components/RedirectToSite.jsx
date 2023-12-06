import { useState, useEffect } from "react"
import axios from "axios"

export default function RedirectToSite({site_code}) {

    // axios.get(
    //     `${REACT_APP_SERVER_URL}`,
    //     { long_url: url }
    //   ).then(
    //     (data) => {
    //       set_little_url(window.location.href + data.data.little_url)
    //     }
    //   )

    return (
    <div>
        hello world
        site code:{ site_code }
        server url: { process.env.REACT_APP_SERVER_URL }
    </div>
    )
}