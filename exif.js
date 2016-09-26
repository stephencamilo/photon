var ExifImage = require('exif').ExifImage;
var watermark = require('image-watermark');
var fs = require('fs');

var files = fs.readdirSync('originals');

for (var file in files) {
	file = files[file];
	try {
		var img = new ExifImage({ image : 'originals/'+file }, function (error, exifData) {
			if (error) console.log('Error: '+error.message);
			else var date = exifData.exif['DateTimeOriginal']; // Do something with your data!
		});
	} catch (error) {
		console.log('Error: ' + error.message);
	}

	var options = {
		'text' : img.date,
		'dstPath' : 'watermarked/'+'dated_'+file,
		'color' : 'rgb(177, 177, 177)',
		'align' : 'ltr',
		'position':'Left'
	};
	watermark.embedWatermark('originals/'+file, options);
}
