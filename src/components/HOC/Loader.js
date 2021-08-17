import React from 'react'

function Loader(WrappedComponent) {
    return class wrapperClass extends React.Component {
        constructor(props) {
            super(props)
            this.state = {loading: true}
        }

        render() {
            return (
                <>
                    {this.state.loading && <div className="loader">jjjj</div>} 
                    <WrappedComponent/>
                </>
            )
        }

    }
    
}

export default Loader