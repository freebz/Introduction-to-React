// Listing 1-9. TodoItems Render Method

app.TodoItem = React.createClass({
  /* omitted code for brevity */

  render: function () {
    return (
      <li className={React.addons.classSet({
	completed: this.props.todo.completed,
	editing: this.props.editing
      })}>
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={this.props.todo.completed}
                onChange={this.props.onToggle}
             />
            <label onDoubleClick={this.handleEdit}>
	        {this.props.todo.title}
            </label>
            <button className="destroy" onClick={this.props.onDestroy} />
        </div>
        <input
            ref="editField"
            className="edit"
            value={this.state.editText}
            onBlur={this.handleSubmit}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
      </li>
    );
  }
});
