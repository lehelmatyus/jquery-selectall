# jQuery Select Deselect All

## jQuery plugin to Select/Deselect all chekboxes within a fieldset

Provides 2 buttons in a container inside the fieldset to select and deselect all checkboxes within the fieldset.


## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.selectall.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").selectAll({
		propertyName: "a custom value"
	});
	```

## Structure

The basic structure of the project is given in the following way:

```
├── demo/
│   └── index.html
├── dist/
│   ├── jquery.selectall.js
│   └── jquery.selectall.min.js
├── src/
│   ├── jquery.selectall.coffee
│   └── jquery.selectall.js
├── .editorconfig
├── .gitignore
├── .jshintrc
├── .travis.yml
├── Gruntfile.js
└── package.json
```

#### [demo/](https://github.com/jquery-selectall/selectall/tree/master/demo)

Contains a simple HTML file to demonstrate SelectAll plugin.


#### How to publish plugins?

Also, check our guide on [How to publish a plugin in jQuery Plugin Registry](https://github.com/jquery-selectall/selectall/wiki/How-to-publish-a-plugin-in-jQuery-Plugin-Registry
)!

**Note:** The jQuery Plugin Registry is in read-only mode. New plugin releases will not be processed.
jQuery recommends moving to [npm](https://www.npmjs.com/), using ["jquery-plugin"](https://www.npmjs.com/browse/keyword/jquery-plugin) as the keyword in your package.json. See [how to publish into npm registry](https://gist.github.com/coolaj86/1318304).

## Team

jQuery selectall was made with love by these guys and a bunch of awesome [contributors](https://github.com/jquery-selectall/selectall/graphs/contributors).

[![Zeno Rocha](http://gravatar.com/avatar/e190023b66e2b8aa73a842b106920c93?s=70)](http://zenorocha.com) | [![Addy Osmani](http://gravatar.com/avatar/96270e4c3e5e9806cf7245475c00b275?s=70)](http://addyosmani.com) | [![Helder Santana](http://gravatar.com/avatar/63fb620ee7d14fc91030d4349d189b3e?s=70)](http://heldr.com)
--- | --- | --- | --- | --- | --- | ---
[Zeno Rocha](http://zenorocha.com) | [Addy Osmani](http://addyosmani.com) | [Helder Santana](http://heldr.com)

## Contributing

Check [CONTRIBUTING.md](https://github.com/jquery-selectall/selectall/blob/master/CONTRIBUTING.md) for more information.

## History

Check [Releases](https://github.com/jquery-selectall/jquery-selectall/releases) for detailed changelog.

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha
