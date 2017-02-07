// Listing 3-18. Tenary Operators in JSX

var SignIn = React.createClass({
  render: function() {
    return <a href="/signin">Sign In</a>;
  }
});

var UserMenu = React.createClass({
  render: function() {
    return <ul className="usermenu"><li>Item</li><li>Another</li></ul>;
  }
});

var userIsSignedIn = true;
var MainApp = React.createClass({
  render: function() {
    return <div>{ userIsSignedIn ? <UserMenu /> :
      <SignIn /> }</div>;
  }
});

React.render(<MainApp />, document.getElementById("container"));
