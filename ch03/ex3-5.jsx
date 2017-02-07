// Listing 3-5. Hello World Greeting

var GreetingComponent = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

var GenericComponent = React.createClass({
  render: function() {
    return <GreetingComponent name={this.props.name} />;
  }
});

React.render(<GenericComponent name="World" />,
  document.getElementById('container'));
