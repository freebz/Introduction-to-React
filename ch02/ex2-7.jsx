// Listing 2-7. createElement

var MyComponent = React.createClass({
  displayName: "MyComponent",

  render: function render() {
    return React.createElement(
      "div",
      null,
      this.props.name
    );
  }
});

React.render(React.createElement(MyComponent, { name: "frodo" }),
  document.getElementById('container'));
