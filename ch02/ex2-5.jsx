// Listing 2-5. React.Children.count()

var MyComponent = React.createClass({
  render: function() {
    var cnt = React.Children.count(this.props.children);
    console.log(cnt);

    return (
      <div>
        {this.props.name}
      </div>
    );
  }
});

React.render(<MyComponent name="frodo" >
  <p key="firsty">a child</p>
  <p key="2">another</p>
  </MyComponent>, document.getElementById('container'));
