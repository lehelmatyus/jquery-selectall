# jQuery Select Deselect All Checkboxes

## jQuery plugin to Select/Deselect all chekboxes within a fieldset. Works well with Bootstrap and FontAwesome.

- Creates two buttons in a container inside a `<fieldset>` or `<div>` to select and deselect all checkboxes within it.
- Allows extra CSS classes to be added to the buttons.
- Allows CSS icons to be used inside buttons.
- Works well with **Bootstrap** and **FontAwesome**.

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.selectall.min.js"></script>
	```

3. Example Call
	```javascript
		$("fieldset").selectAll();
	```

4. Extra configuration and roperties

	- **buttonParent** : SELECTOR for parent element that will hold the 2 buttons (optional)
	- **buttonWrapperHTML** : HTML wrapper for the buttons that will be placed inside parent (optional)

	- **buttonSelectText**: TEXT override for "Select All" button (optional)
	- **buttonSelectBeforeHTML**: HTML to be added before text inside Select button (optional)
	- **buttonSelectAfterHTML**: HTML to be added before text inside Select button (optional)

	- **buttonDeSelectText**: TEXT override for "Deselect All" button (optional)
	- **buttonDeSelectBeforeHTML**: HTML to be added before text inside Deselect button (optional)
	- **buttonDeSelectAfterHTML**: HTML to be added before text inside Deselect button (optional)

	- **buttonExtraClasses**: TEXT CSS classes divided with spaces

5. Example with all properties:

	```javascript
		$( function() {
			$("fieldset").selectAll( {

				buttonParent: "legend",
				buttonWrapperHTML : '<span class="pull-right"></span>',

				buttonSelectText: "Select All",
				buttonSelectBeforeHTML: '<span class="fa fa-check"></span>',
				buttonSelectAfterHTML: "",

				buttonDeSelectText: "Deselect All",
				buttonDeSelectBeforeHTML: '<span class="fa fa-close"></span>',
				buttonDeSelectAfterHTML: "",

				buttonExtraClasses: "btn btn-sm btn-default"

			} );
		} );
	```

## Author

| [![Árpád Lehel Mátyus](http://gravatar.com/avatar/bec2e04f7cb910e360c3a467b21fa363?s=70)](http://lehelmatyus.com)|Beer|
|--------|-------|
|[Árpád Lehel Mátyus](http://lehelmatyus.com) |[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=matyuslehel%40gmail%2ecom&lc=US&item_name=Buy%20Lehel%20a%20beer%2e&item_number=buy%2dme%2dbeer%2dwebsite&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_LG%2egif%3aNonHosted)|


## License

[MIT License](http://mit-license.org/) © Árpád Lehel Mátyus
