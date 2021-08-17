import React, { useState } from 'react'

function Loader(WrappedComponent) {
    const [ loading, setLoader ] = useState(false)

    return (
        <>
            {loading && <div className="loader"></div>} 
            <WrappedComponent setLoader={setLoader}/>
        </>
    )
}

export default Loader