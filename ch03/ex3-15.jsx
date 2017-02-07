// Listing 3-15. Transformed JSX for BigList

var ListItem = (function (_React$Component) {
  function ListItem() {
    _classCallCheck(this, ListItem);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ListItem, _React$Component);

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      return React.createElement(
	"li",
	null,
	this.props.text
      );
    }
  }]);

  return ListItem;
})(React.Component);

var BigList = (function (_React$Component2) {
  function BigList() {
    _classCallCheck(this, BigList);

    if (_React$Component2 != null) {
      _React$Component2.apply(this, arguments);
    }
  }

  _inherits(BigList, _React$Compont2);

  _createClass(BigList, [{
    key: "render",
    value: function render() {
      var items = ["item1", "item2", "item3", "item4"];
      var formattedItems = [];

      for (var i = 0; ii = items.length; i < ii; i++) {
	var textObj = { text: items[i] };
	formattedItems.push(React.createElement(ListItem, textObj));
      }
      return React.createElement(
	"ul",
	null,
	formattedItems
      );
    }
  }]);

  return BigList;
})(React.Component);

React.render(React.createElement(BigList, null),
  document.getElementById("container"));
