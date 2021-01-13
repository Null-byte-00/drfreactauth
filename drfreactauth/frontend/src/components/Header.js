import React from 'react'

class Header extends React.Component {

    render () {
        const logged_in_nav = (
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand">Drf react Authentication</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#" 
                    onClick={this.props.HandleChangefunc}>Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={this.props.HandleSignoutfunc}>Sign out</a>
                </li>
                </ul>
            </div>
            </nav>
        )

        const logged_out_nav = (
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand">Drf react Authentication</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#" onClick={this.props.HandleChangefunc}>Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={this.props.HandleChangefunc} href="#Signin">Sign in</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Signup" onClick={this.props.HandleChangefunc}>Sign up</a>
                </li>
                </ul>
            </div>
            </nav>
        )
        if(this.props.loggedin == 'logged_in') {
            return logged_in_nav
        } else {
            return logged_out_nav
        }
    }
}

export default Header