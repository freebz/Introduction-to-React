// Listing 3-16. Using Conditionals in JSX

var Sign = React.createClass({
  render: function() {
    return <a href="/signin">Sign In</a>;
  }
});

var UserMenu = React.createClass({
  render: function() {
    return <ul className="usermenu"><li>Item</li><li>
    Another</li></ul>;
  }
});

var userIsSignedIn = false;
var MainApp = React.createClass({
  render: function() {
    var navElement;

    if (userIsSignedIn) {
      navElement = <UserMenu />;
    } else {
      navElement = <SignIn />;
    }

    return <div>{navElement}</div>;
  }
});

React.render(<MainApp />, document.getElementById("container"));
