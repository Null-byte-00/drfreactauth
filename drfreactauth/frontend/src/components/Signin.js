import React from 'react'

class SigninForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    render() {

        return ( 
            <div className="card" style={{width: "400px", margin: "100px 450px 300px"}}>
                <div className="card-body">
                    <form method="post" action="#">
                        <h1>Sign in</h1>
                        {/* Username */}
                        <div className="form-group">
                            <label>Username:</label>
                            <input 
                            type="text" name="username" placeholder="Username" className="form-control"
                            onChange={(e) => this.setState({username: e.target.value})}
                            ></input>
                        </div>
                        {/* End */}
                        {/* Password */}
                        <div className="form-group">
                            <label>Password</label>
                            <input 
                            type="password" name="password" placeholder="Password" className="form-control"
                            onChange={(e) => this.setState({password: e.target.value})}
                            ></input>
                        </div>
                        {/* End */}
                        <button className="btn btn-primary" onClick={this.props.HandleSubmit}
                        onClick={e => this.props.HandleSubmit(e, this.state)}
                        >Sign in</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SigninForm