// Listing 3-10. Using Spread Attributes

var greeting = {
  name: "World",
  message: "all your base are belong to us"
};

var Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}, {this.props.greeting}</div>;
  }
});

React.render(<Hello {...greeting} />, document.getElementById("container"));
