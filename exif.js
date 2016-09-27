var ExifImage = require('exif').ExifImage;
var watermark = require('image-watermark');
var fs = require('fs');

fs.readdir('originals',function(err, files){
	for (var file in files) {
		file = files[file];
		options = {image : 'originals/'+file};
		try {
			new ExifImage(options, function (error, exifData, image) {
				if (error) console.log('Error: '+error.message);
				else {
					file = image.replace("originals/","");
					var options = {
						'text' : exifData.exif['DateTimeOriginal'],
						'dstPath' : 'watermarked/'+'dated_'+file,
						'color' : 'rgb(0, 177, 255)',
						'align' : 'ltr',
					};

					watermark.embedWatermark('originals/'+file, options);
				}
			});
		} catch (error) {
			console.log('Error: ' + error.message);
		}
	}
});
