// Listing 2-2. ES6 Class Component

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
};

React.render(<MyComponent name="frodo" />, document.getElementById('container'));
