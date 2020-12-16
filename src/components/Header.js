import React, {useState} from 'react'
import { IoMoonOutline } from 'react-icons/io5';
import '../App.css'

function Header() {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const tm = theme === 'light' ? 'dark' : 'light';
        setTheme(tm)
        document.documentElement.setAttribute('data-theme', tm)
    }

    console.log(theme)
    
    return (
        <div className="header">
            <h2>Where in the world?</h2>
            <div 
                className="theme-toggler"
                onClick={toggleTheme}
                >
                    <IoMoonOutline className="theme-icon" />
                    <p>Dark Mode</p>
            </div>
                
            
        </div>
    )
}

export default Header
