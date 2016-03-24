var React = require('react');
var ReactDom = require('react-dom');
var TodoList = require('./components/TodoItemList.jsx');
var todoItemStore = require('./stores/TodoItemStore.jsx');

var initial = todoItemStore.getItems();

function render() {
	ReactDom.render(<TodoList items={initial}/>, app);
};

todoItemStore.onChange(function(items) {
	initial = items;
	render();
});
render();