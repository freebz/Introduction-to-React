// Listing 3-11. Spread Attributes with ES6

var greeting = {}
greeting.name = "World";
greeting.message = "All your base are belong to us.";

class Hello exetnds React.Component {
  render() {
    return (
      <div>Hello {this.props.name}, {this.props.message}</div>
    );
  }
}

React.render(<Hello {...greeting} />, document.getElementById("container"));
