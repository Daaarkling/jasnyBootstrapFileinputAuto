# JASNY BOOTSTRAP FILE INPUT AUTO

Fileinput with or without image view. Automatically change input file into [Jasny Bootstrap Fileinput](http://www.jasny.net/bootstrap/javascript/#fileinput) which is an extension to vanilla [Bootsrap 3](http://getbootstrap.com/). See example index.html.

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
	btnSelect: "Select image",
	btnRemove: "Remove",
	btnChange: "Change",
	thumbnail: false,	// enable image preview, if false options below are omitted
	width: 300,
	height: 300,
	defaultImage: '',	// myimage.jpg, if is given options below are omitted
	fakeimg: false,		// fake image -> http://fakeimg.pl	
	message: 'No image'	// text shown in thumbnail
});
```

Options via DATA attr
----------
```html
<input type="file" 
		data-fia-auto="true" 
		data-fia-select="Select image" 
		data-fia-remove="Remove" 
		data-fia-change="Change" 
		data-fia-thumbnail="true"
		data-fia-width="300" 
		data-fia-height="300" 
		data-fia-image=""
		data-fia-fakeimg="false"
		data-fia-message="No image">
```