var React = require('react');
var TodoItem = require('./TodoItem.jsx');
var TodoItemAdd = require('./TodoItemAdd.jsx');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Todo list</h1>
				<div>
					{this.props.items.map(function(item, index) {
						return (
							<TodoItem item={item} key={'id' + index} />
						)
					})
					}
				</div>
				<TodoItemAdd/>
			</div>
		)
	}
});