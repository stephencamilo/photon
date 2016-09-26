# photon
===
This is a simple nodejs script that:
* Reads a picture folder
* Watermarks it's .jpg files with the time the pickture was taken using it's EXIF DateTime
* And saves to another folder prefixed with 'dated\_' string

In order to test this script put some .jpg files of yout choice inside 'originals' folder, and run:
```
node exif.js
```
