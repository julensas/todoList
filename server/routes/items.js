/**
 * Created by Julius_b on 3/23/2016.
 */
module.exports = function(app) {
	var items = [
		{
			name: 'Tas1'
		},
		{
			name: 'Task2'
		},
		{
			name: 'Task3',
			completed: true
		}];
	app.route('/api/items')
		.get(function(req, res) {
			res.send(items);
		})
		.post(function(req, res) {
			var item = req.body;
			items.push(item);
		});
	app.route('/api/items/:name')
		.delete(function(req, res) {
			res.status(200).send();
			var index;
			items.filter(function(_item, _index) {
				if (_item.name === req.params.name) {
					index = _index;
				}
			});
			items.splice(index, 1);
		})
		.patch(function(req, res) {
			var _item = items.filter(function(i) {
				return i.name === req.body.name
			})[0];
			if (_item) {
				_item.completed = _item.completed ? false : true;
			}
		});
}

