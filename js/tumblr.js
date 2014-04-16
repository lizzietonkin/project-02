'use strict';

(function(){
	var myKey = 'tKp1fBC39wwJxcSQ45Ut8cCu4zHkv0ArWlyJefyM6kuOZvpOZE',
	tagUrl = 'http://api.tumblr.com/v2/tagged',
	getEntries;
	
	getEntries = function getEntriesF() {
		var request;
		
		request = $.ajax({
			url: tagUrl,
			dataType: 'jsonp',
			type: 'GET',
			data: {
				api_key: myKey,
				tag: 'nike air max'
			}
		});
		
		request.done(function (data){
			var results = data.response,
				$photos = $('<div>', { id: 'photos'});

			for (var i = 0; i < results.length; i++) {
				var result = results[i],
					$photo,
					$image;
					
				if ('photos' in result) {
					console.log(result.photos[0].original_size.url);
					$photo = $('<div/>', { class: 'photo'});
					$image = $('<img>', { src: result.photos[0].original_size.url});
					$photo.append($image);
					$photos.append($photo);
				}
			}
			
			$('#photo-container').append($photos);
		});
	};
	
	getEntries();
})();