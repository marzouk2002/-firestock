import React from 'react'
import { FaTimes } from "react-icons/fa";

function Alert({ alert, setAlert }) {
    return (
        <div className="alert-wrapper">
            <p>{alert}</p>
            <FaTimes onClick={()=>setAlert(null)}/>
        </div>
    )
}

export default Alert