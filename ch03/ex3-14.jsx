// Listing 3-14. Looping in JSX

class ListItem extends React.Component {
  render() {
    return <li>{this.props.text}</li>
  }
}

class BigList extends React.Component {
  render() {
    var items = [ "item1", "item2", "item3", "item4" ];
    var formattedItems = [];
    for (var i = 0, ii = items.length; i < ii; i++ ) {
      var textObj = { text: items[i] };
      formattedItems.push(<ListItem {...textObj} />);
    }
    return <ul>{formattedItems}</ul>;
  }
}

React.render(<BigList />, document.getElementById("container"));
