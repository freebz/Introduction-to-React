// Listing 3-12. Transform of the Component

var greeting = {};
greeting.name = "World";
greeting.message = "All your base are belong to us.";

var Hello = (function (_React$Component) {
  function Hello() {
    _classCallCheck(this, Hello);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Hello, _React$Component);

  _createClass(Hello, [{
    key: "render",
    value: function render() {
      return React.createElement(
	"div",
	null,
	"Hello ",
	this.props.name,
	", ",
	this.props.message
      );
    }
  }]);

  return Hello;
})(React.Component);

React.render(React.createElement(Hello, greeting),
  document.getElementById("container"));
