# JASNY BOOTSTRAP FILE INPUT AUTO

Fileinput with image view. Automatically change input file into [Jasny Bootstrap Fileinput](http://www.jasny.net/bootstrap/javascript/#fileinput) which is an extension to vanilla [Bootsrap 3](http://getbootstrap.com/). See example index.html.

Dependencies js & css
----------
 * [jQuery](http://jquery.com/)
 * [Jasny Bootstrap Fileinput](http://www.jasny.net/bootstrap/customize/)
 * [Bootstrap 3](http://getbootstrap.com/customize/)

Usage via JS
----------
include all depandencies and init like this:
```js
$('input[type=file]').fileinputAuto();
```

Usage via DATA attr
----------
include all depandencies and init like this:
```html
<input type="file" data-fia-auto="true">
```

Options JS
----------
```js
$('input[type=file]').fileinputAuto({
	width: 300,
	height: 300,
	btnSelect: "Select image",
	btnRemove: "Remove",
	btnChange: "Change",
	thumbnail: true,
	defaultImage: '',
	message: 'No image'
});
```

Options via DATA attr
----------
```html
<input type="file" 
		data-fia-auto="true" 
		data-fia-width="300" 
		data-fia-height="300" 
		data-fia-select="Select image" 
		data-fia-remove="Remove" 
		data-fia-change="Change" 
		data-fia-thumbnail="true"
		data-fia-image=""
		data-fia-message="No image">
```