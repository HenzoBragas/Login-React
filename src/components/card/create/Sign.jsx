import React from 'react'
import './Sign.css'

function Sign({ toggleSection }) {
    
    return (
        <div className='app-container'>
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all <br />
                of site features</p>
            <button  onClick={ toggleSection } className='btn-sign'>SIGN UP</button>

        </div>
    )
}

export default Sign
