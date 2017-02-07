// Listing 3-4. Post-JSX Transformation of the Hello World Example

var Hello = React.createClass({displayName: "Hello",
  render: function() {
    return React.createElement("div", null, "Hello ", this.props.name);
  }
});

React.render(React.createElement(Hello, {name: "World"}),
  document.getElementById('container'));
