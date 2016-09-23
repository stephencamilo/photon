var ExifImage = require('exif').ExifImage;
var watermark = require('image-watermark');

new ExifImage({ image : 'myImage.jpg' }, function (error, exifData) {
	console.log(exifData);
	var options = {
		'text' : exifData.exif['DateTimeOriginal'],
		'dstPath' : 'watermark.jpg',
		'color' : 'rgb(177, 177, 177)',
		'align' : 'ltr',
		'position':'Left'
	};
	watermark.embedWatermark('myImage.jpg', options);
});
