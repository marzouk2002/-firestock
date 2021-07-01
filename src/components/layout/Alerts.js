import React from 'react'
import { FaTimes } from "react-icons/fa";

function Alerts({ msg, setMsg }) {
    return (
        <div className="alert-wrapper">
            <p>{msg}</p>
            <FaTimes/>
        </div>
    )
}

export default Alerts