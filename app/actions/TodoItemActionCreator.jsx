var dispacher = require('./../dispacher');

module.exports = {
	add: function(item) {
		dispacher.dispach({
			payload: item,
			type: 'todo-item:add'
		});
	},
	delete: function(item) {
		dispacher.dispach({
			payload: item,
			type: 'todo-item:delete'
		});
	},
	done: function(item) {
		dispacher.dispach({
			payload: item,
			type: 'todo-item:done'
		});
	},
	reopen: function(item) {
		dispacher.dispach({
			payload: item,
			type: 'todo-item:reopen'
		});
	}
}