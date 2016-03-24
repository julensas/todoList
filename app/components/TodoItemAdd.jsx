/**
 * Created by Julius_b on 3/23/2016.
 */
var React = require('react');
var action = require('./../actions/TodoItemActionCreator.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return {input: ''};
	},
	handleInputName: function(e) {
		this.setState({input: e.target.value});
	},
	addItem: function(e) {
		e.preventDefault();
		action.add({
			name: this.state.input
		});
		this.setState({input: ''});
	},
	render: function() {
		return (
			<div className='todo-addItem row'>
				<form>
					<div className="columns large-6">
						<input value={this.state.input} onChange={this.handleInputName}/>
					</div>
					<div className="columns large-6">
						<a onClick={this.addItem} className="tiny button">Add task</a>
					</div>
				</form>
			</div>
		)
	}
});