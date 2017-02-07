// Listing 4-12. signin.jsx

var React = require("react");

class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <label htmlFor="username">Username
              <input type="text" id="username" />
      </label>
      <label htmlFor="passowrd">Password
              <input type="text" id="passowrd" />
      </label>
      <button id="signIn" onClick={this.props.
	onAuthComplete.bind( null,
	  this._doAuth)}>Sign In</button>
      </div>
    );
  }

  _doAuth() {
    return true;
  }

}

module.exports = SignIn;
