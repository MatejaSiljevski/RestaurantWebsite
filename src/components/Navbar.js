import React from 'react'
import {useState} from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder'

function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
    const LinkAppear = () => {
        setShowLinks(!showLinks)
    }
    return (
        <div className="navbar">
            <div className="leftSide" id={showLinks ? 'open' : 'close'}>
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={LinkAppear}>                    
                    <ReorderIcon />
                </button>
            </div>
        </div>     

    )
}

export default Navbar
