( function( $, QUnit ) {

	"use strict";

	var $testCanvas = $( "#testCanvas" );
	var $fixture = null;

	QUnit.module( "jQuery selectall", {
		beforeEach: function() {

			// fixture is the element where your jQuery plugin will act
			$fixture = $( "<div/>" );

			$testCanvas.append( $fixture );
		},
		afterEach: function() {

			// we remove the element to reset our plugin job :)
			$fixture.remove();
		}
	} );

	QUnit.test( "is inside jQuery library", function( assert ) {

		assert.equal( typeof $.fn.selectAll, "function", "has function inside jquery.fn" );
		assert.equal( typeof $fixture.selectAll, "function", "another way to test it" );
	} );

	QUnit.test( "returns jQuery functions after called (chaining)", function( assert ) {
		assert.equal(
			typeof $fixture.selectAll().on,
			"function",
			"'on' function must exist after plugin call" );
	} );

	QUnit.test( "caches plugin instance", function( assert ) {
		$fixture.selectAll();
		assert.ok(
			$fixture.data( "plugin_selectAll" ),
			"has cached it into a jQuery data"
		);
	} );

	QUnit.test( "enable custom config", function( assert ) {
		$fixture.selectAll( {
			foo: "bar"
		} );

		var pluginData = $fixture.data( "plugin_selectAll" );

		assert.deepEqual(
			pluginData.settings,
			{
				propertyName: "value",
				foo: "bar"
			},
			"extend plugin settings"
		);

	} );

	QUnit.test( "changes the element text", function( assert ) {
		$fixture.selectAll();

		assert.equal( $fixture.text(), "jQuery selectall" );
	} );

	QUnit.test(
		"has #yourOtherFunction working as expected",
		function( assert ) {
			$fixture.selectAll();

			var instance = $fixture.data( "plugin_selectAll" ),
				expectedText = "foobar";

			instance.yourOtherFunction( expectedText );
			assert.equal( $fixture.text(), expectedText );
		}
	);

}( jQuery, QUnit ) );
