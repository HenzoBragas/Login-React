import React from 'react'

function CreateAccount() {
    return (
        <div>
            <h2>Criar Conta</h2>

            <form action="">
                <input type="text" id="username" placeholder='Name' />
                <input type="email" id="username" placeholder='Email' />
                <input type="password" id="passowordPrincipal" placeholder='Password' />
                <input type="password" className='password'  placeholder='Confirm Password' />
                <button type="submit">Sing Up</button>
            </form>
        </div>
    )
}

export default CreateAccount
