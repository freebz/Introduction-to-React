// Listing 3-6. JSX Transform of GenericComponent

var GreetingComponent = React.createClass({displayName: "GreetingComponent",
  render: function() {
    return React.createElement("div", null, "Hello ", this.props.name);
  }
});

var GenericComponent = React.createClass({displayName: "GenericComponent",
  render: function() {
    return React.createElement(GreetingComponent, {name:
      this.props.name});
  }
});

React.render(React.createElement(GenericComponent, {name: "World"}),
  document.getElementById('container'));
