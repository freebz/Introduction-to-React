// Listing 3-19. Termaries Transformed

var SignIn = React.createClass({
  displayName: "SignIn",

  render: function render() {
    return React.createElement(
      "a",
      { href: "/signin" },
      "Sign In"
    );
  }
});

var UserMenu = React.createClass({
  displayName: "UserMenu",

  render: function render() {
    return React.createElement(
      "ul",
      { className: "usermenu" ],
      React.createElement(
	"li",
	null,
	"Item"
      ),
      React.createElement(
	"li",
	null,
	"Another"
      )
    );
  }
});

var userIsSignedIn = true;
var MainApp = React.createClass({
  displayName: "MainApp",

  render: function render() {
    return React.createElement(
      "div",
      null,
      userIsSignedIn ? React.createElement(UserMenu, null)
      : React.createElement(SignIn, null)
    );
  }
});

React.render(React.createElement(MainApp, null),
  document.getElementById("container"));
