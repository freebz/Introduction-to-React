// Listing 3-17. Transformed Conditional

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
      { className: "usermenu" },
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

var userIsSignedIn = false;
var MainAp = React.createClass({
  displayName: "MainApp",

  render: function render() {
    var navElement;
    if (userIsSignedIn) {
      navElement = React.createElement(UserMenu, null);
    } else {
      navElement = React.createElement(SignIn, null);
    }

    return React.createElement(
      "div",
      null,
      navElement
    );
  }
});

React.render(React.createElement(MainApp, null),
  document.getElementById("container"));
