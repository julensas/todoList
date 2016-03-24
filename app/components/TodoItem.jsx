var React = require('react');
var action = require('./../actions/TodoItemActionCreator.jsx');

module.exports = React.createClass({
	toggleCompleted: function(e) {
		e.preventDefault();

		if (this.props.item.completed) {
			action.reopen(this.props.item);
		} else {
			action.done(this.props.item);
		}
	},
	delete: function(e) {
		e.preventDefault();
		action.delete(this.props.item);
	},
	render: function() {
		return (
			<div className="row">
				<div className="columns large-6">
					<h4 className={this.props.item.completed ? 'strikethrough': ''}>{this.props.item.name}</h4>
				</div>
				<div className="columns large-3">
					<a onClick={this.toggleCompleted} className={this.props.item.completed? 'tiny button disabled': 'tiny button success'}>
						{this.props.item.completed ? 'Reopen' : 'Done'}</a>
				</div>
				<div className="columns large-3">					
					<a className="tiny button x" onClick={this.delete}>X</a>
				</div>
			</div>
		)
	}
});