import React from 'react'
import { useHistory } from 'react-router-dom'
import './Header.css'
function Header() {
    let history = useHistory()
    return (
        <div className="header-navs">


            <ul>
                <div className="heads">
                    <h1 className="brand">SAICO</h1>
                    <p className="login">LogIn</p>
                </div>
                <div className="lies" style={{ 'marginRight': '18%', 'font': 'small-caption' }}>
                    <li id='calculator' onClick={() => { history.push('/calculator') }}>Calculator</li>
                    <li id='history' onClick={() => { history.push('/history') }}>History</li>
                    <li id='home' onClick={() => { history.push('/home') }}>Home</li>
                </div>
            </ul>
        </div>
    )
}
export default Header
