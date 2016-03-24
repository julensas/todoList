/**
 * Created by Julius_b on 3/23/2016.
 */
var $ = require('jquery');

module.exports = {
	get: function(url){
		return new Promise(function(success, error){
			$.ajax({
				url: url,
				dataType: 'json',
				success: success,
				error: error
			})
		})
	},
	post: function(url, data){
		return new Promise(function(success, error){
			$.ajax({
				url: url,
				type: 'post',
				data: data,
				success: success,
				error: error
			})
		})
	},
	patch: function(url, data){
		return new Promise(function(success, error){
			$.ajax({
				url: url,
				type: 'patch',
				data: data,
				success: success,
				error: error
			})
		})
	},
	remove: function(url){
		return new Promise(function(success, error){
			$.ajax({
				url: url,
				type: 'delete',				
				success: success,
				error: error
			})
		})
	},
}