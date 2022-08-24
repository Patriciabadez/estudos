import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='contatos'>
                <p>(51)99999999</p>
                <p>
                    <img src='./envelope-free-icon-font.png'></img>                    
                </p>
                <p>exemplo@gmail.com</p>                          
            </div>  
            <div className='icons-redes-sociais'>
                <img src='./linkedin.png'></img>
                <img src='./envelope-free-icon-font.png'></img>
                <img src='./envelope-free-icon-font.png'></img>
                <img src='./envelope-free-icon-font.png'></img>
                <img src='./linkedin.png'></img>
            </div>
            <div className='titulo'> 
            <h1>HOSPITAL</h1>
            <h3>NOME DA EMPRESA</h3> 
            </div>                
        </div>
    )
}
export default Header