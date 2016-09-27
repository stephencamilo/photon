<?php
if ($handle = opendir('originals')) {
    while (false !== ($file = readdir($handle))) {
        if ($file != "." && $file != "..") {
            $exif = exif_read_data("originals/{$file}", 0, true);
            $picDate = $exif['EXIF']['DateTimeOriginal'];
            $rImg = ImageCreateFromJPEG( "originals/{$file}" );
            $color = imagecolorallocate($rImg, 177, 177, 177);
            imagestring( $rImg,5,20,20,$picDate,$color);
            imagejpeg($rImg,"watermarked/php/dated_{$file}",100);
            imagedestroy($rImg);
        }
    }
    closedir($handle);
}
?>
