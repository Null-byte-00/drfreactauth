import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import SigninForm from "./components/Signin"
import SignupForm from './components/Signup'
import Swal from "sweetalert2/src/sweetalert2.js"
//import 'sweetalert2/src/sweetalert2.scss'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedin: "logged_out",
            username: "",
            HomeContent: ""
        }
    }

    HandleSignout = (e) => {
        e.preventDefault()
        localStorage.removeItem("token")
        this.setState({loggedin: "logged_out", username: ""})
        this.forceUpdate()
        window.location.reload()
    }

    HandleSignin = (e, data) => {
        e.preventDefault()
        fetch("/gettoken/", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: data.username,
                password: data.password
            })
        })
        .then(res => res.json())
        .then(json => {
            if (json.token != null){
                localStorage.setItem("token", json.token)
                this.setState({username: data.username, loggedin: "logged_in"})
                Swal.fire({
                    icon: "success",
                    text: "Your signed in"
                })
                setTimeout(() => {
                    window.location.href = window.location.href.split("#")[0] + "#"
                    window.location.reload()
                }, 2000)
            } else {
                Swal.fire({
                    icon: "error",
                    text: "Login failed"
                })
            }
        })
    }

    FlatError = (json) => {
        var flattedhtml = ""
        Object.keys(json).forEach((key) => {
            flattedhtml += `<br>${key}:<br>`
            json[key].forEach((value, index) => {
                flattedhtml += value + "<br>"
            })
        })
        return flattedhtml
    }

    HandleSignup = (e, data) => {
        e.preventDefault()
        fetch("/api/signup/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: data.username,
                password: data.password,
                email: data.email
            })
            //---------
        }).then(res => {
            if(res.status == 400) {
                res.json().then(json => {
                    Swal.fire({
                        icon: "error",
                        title: "registration failed",
                        html: this.FlatError(json)
                    })
                })
            } else {
                Swal.fire({
                    icon: "success",
                    title: "Registration succeed"
                })
                setTimeout(() => {
                    res.json().then(json => {
                        fetch("/gettoken", {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                username: json.username,
                                password: json.password
                            })
                        }).then(res => res.json())
                        .then(json => {
                            localStorage.setItem("token", json.token)
                            this.setState({loggedin: "logged_in"})
                        })
                    })
                    window.location.href = "#Signin"
                    this.forceUpdate()
                }, 2000)
            }
        })
    }

    HandleUrlChange = (event) => {
        window.location.href = event.target.href
        this.forceUpdate()
    }

    componentDidMount() {
        if (localStorage.getItem("token") !== null) {
            try{
                fetch("/api/current_user", {
                    method: "GET",
                    headers: {
                        Authorization: `Token ${localStorage.getItem("token")}`
                    }
                }).then(res => res.json())
                .then(json => {
                    this.setState({loggedin: "logged_in", username: json.username})
                })
            }
            catch {

            }
        }
        if(localStorage.getItem("token") !== null) {
            fetch("/api/home", {
                method: "GET",
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(json => {
                this.setState({HomeContent: json.message })
            })
        } else {
            this.setState({HomeContent: "your not authenticated"})
        }
    }

    GetcurrentPage = () => {
        var hash = window.location.hash.substring(1)
        if (hash == "Signin") {
            return ( 
                <SigninForm HandleSubmit={this.HandleSignin}/>
            )
        } 
        else if(hash == "Signup") {
            return (
                <SignupForm HandleSubmit={this.HandleSignup}/>
            )
        } 
        else {
            return <h1>{this.state.HomeContent}</h1>
        }
    }


    render() {

        return (
            <div>
                <Header
                loggedin={this.state.loggedin} 
                HandleChangefunc={this.HandleUrlChange} 
                HandleSignoutfunc = {this.HandleSignout}
                />
                {this.GetcurrentPage()}
            </div>
        )
    }
}

ReactDOM.render(<App language="en" />, document.getElementById("app"));