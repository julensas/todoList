var dispacher = require('./../dispacher');
var rest = require('./../helpers/RestHelper');

function TodoItemStore() {
	var items = [];
	rest.get('api/items').then( function(data){
		items = data;
		triggerListeners();
	});
	var listeners = [];

	function getItems() {
		return items;
	};

	function addTodoItem(item) {
		items.push(item);
		triggerListeners();

		rest.post('api/items', item);
	};

	function deleteTodoItem(item) {
		var index;
		items.filter(function(_item, _index) {
			if (_item.name === item.name) {
				index = _index;
			}
		});

		items.splice(index, 1);
		triggerListeners();

		rest.remove('api/items/4545');
	};

	function setStatus(item, val) {
		var _item = items.filter(function(i) {
			return i.name === item.name

		})[0];
		_item.completed = val;
		triggerListeners();

		rest.patch('api/items/' + item.name, item);
	};

	function onChange(listener) {
		listeners.push(listener);
	};

	function triggerListeners() {
		listeners.forEach(function(listener) {
			listener(items);
		});
	};

	dispacher.register(function(event) {
		var split = event.type.split(':');
		if (split[0] === 'todo-item') {
			switch (split[1]) {
				case 'add':
					addTodoItem(event.payload);
					break;
				case 'delete':
					deleteTodoItem(event.payload);
					break;
				case 'done':
					setStatus(event.payload, true);
					break;
				case 'reopen':
					setStatus(event.payload, false);
					break;
			}
		}
	});

	return {
		getItems: getItems,
		onChange: onChange
	}
}

module.exports = new TodoItemStore();