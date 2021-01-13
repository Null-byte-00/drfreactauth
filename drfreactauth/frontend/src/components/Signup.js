import React from 'react'


class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        // descriptions
        this.username_description = "choose a username for your account"
        this.password_description = "your account's password"
        this.password_rules = [
            "your password must not be entirely numeric",
            "rour password must have at least 10 characters"
        ]
        this.email_description = "enter your email address"
        // states
        this.state = {
            username_description: "",
            password_description:"",
            password_rules: [],
            email_description: "",
            //fields
            username: "",
            password: "",
            email: "",
        }
    }

    render() {
        // styles
        var rulespanstyle = {
            fontSize: "14px", 
            whiteSpace: "pre",
            color: "gray"
        }

        var inputstyle = {
            margin: "3px 3px 3px"
        }

        return (
            <div className="card" style={{width: "400px", margin: "100px 450px 300px"}}>
            <div className="card-body">
                <form method="post" action="#">
                    <h1>Sign up</h1>
                    {/* Username */}
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" style={inputstyle} name="username" placeholder="Username" className="form-control"
                        onFocus={() => this.setState({username_description: this.username_description})} 
                        onBlur={() => this.setState({username_description: ""})}
                        onChange={(e) => this.setState({username: e.target.value})}
                        ></input>
                        <span style={rulespanstyle}>{this.state.username_description}</span>
                    </div>
                    {/* End */}
                    {/* Password */}
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" placeholder="Password"
                        onFocus={() => {
                            this.setState({password_description: this.password_description,
                            password_rules: this.password_rules})
                        }}
                        onBlur={() => {
                            this.setState({password_description: "", password_rules: []})
                        }}
                        onChange={(e) => this.setState({password: e.target.value})}
                        ></input>
                        <span style={rulespanstyle}>{this.state.password_description}</span>
                        {/* display rules */}
                        <ul>
                        {
                            this.state.password_rules.map((value, index) => {
                                return <li style={rulespanstyle}>{value}</li>
                            })
                        }
                        </ul>
                    </div>
                    {/* End */}
                    {/* Email */}
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" placeholder="Email" className="form-control" style={inputstyle}
                        onFocus={() => this.setState({email_description: this.email_description})}
                        onBlur={() => this.setState({email_description: ""})}
                        onChange={(e) => this.setState({email: e.target.value})}
                        ></input>
                        <span style={rulespanstyle}>{this.state.email_description}</span>
                    </div>
                    {/* End */}
                    {/* Submit button */}
                    <button className="btn btn-primary" onClick={e => this.props.HandleSubmit(e, this.state)}>Sign up</button>
                    {/* End */}
                </form>
            </div>
        </div>
        )
    }
}

export default SignUpForm