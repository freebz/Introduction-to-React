// Listing 4-7. The auth.jsx File

var React = require("react");
var SignIn = require("./signin.jsx");
var CreateAccount = require("./createaccount.jsx");

var Authentication = React.createClass({
  render: function() {
    return (
      <div>
          <Sign onAuthComplete={this.props.
          onAuthComplete}/>
          <CreateAccount onAuthComplete={this.props.
          onAuthComplete}/>
      </div>
    );
  }
})

module.exports = Authentication;
