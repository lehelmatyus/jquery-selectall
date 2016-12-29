/*
 *  jquery-selectall - v1.0
 *  A jump-start for jQuery plugins development.
 *  http://jqueryselectall.com
 *
 *  Made by Lehel Matyus
 *  Under MIT License
 */
// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;( function( $, window, document, undefined ) {

	"use strict";

		// undefined is used here as the undefined global variable in ECMAScript 3 is
		// mutable (ie. it can be changed by someone else). undefined isn't really being
		// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
		// can no longer be modified.

		// window and document are passed through as local variables rather than global
		// as this (slightly) quickens the resolution process and can be more efficiently
		// minified (especially when both are regularly referenced in your plugin).

		// Create the defaults once
		var pluginName = "selectAll",
			defaults = {

				buttonParent: "legend",
				buttonWrapperHTML: "",

				buttonSelectText: "Select All",
				buttonSelectBeforeHTML: "",
				buttonSelectAfterHTML: "",

				buttonDeSelectText: "Deselect All",
				buttonDeSelectBeforeHTML: "",
				buttonDeSelectAfterHTML: "",

				buttonExtraClasses: "btn btn-default"
			};

		// The actual plugin constructor
		function Plugin ( element, options ) {
			this.element = element;

			// jQuery has an extend method which merges the contents of two or
			// more objects, storing the result in the first object. The first object
			// is generally empty as we don't want to alter the default options for
			// future instances of the plugin
			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend( Plugin.prototype, {
			init: function() {

				// Place initialization logic here
				// You already have access to the DOM element and
				// the options via the instance, e.g. this.element
				// and this.settings
				// you can add more functions like the one below and
				// call them like the example below

				// $(this.element).find('')
				this.createButtons();

			},
			createButtons: function() {
				var $buttonParent = $(this.element).find(this.settings.buttonParent);
				var $buttonWrapper;
				

				if ($(this.settings.buttonWrapperHTML).length) {
					$buttonWrapper = ($(this.settings.buttonWrapperHTML)).appendTo($buttonParent);
				}else{
					$buttonWrapper = $buttonParent;
				}

				var that = $(this.element);

				$("<a/>", {
				    class: "sa-selector sa-select-all " + this.settings.buttonExtraClasses,
				    "href": "#",
				    title: "Select All Options",
				    text: this.settings.buttonSelectText
				})
				.prepend($(this.settings.buttonSelectBeforeHTML))
				.append($(this.settings.buttonSelectAfterHTML))
				.appendTo($buttonWrapper).on("click", function(event) {
					event.preventDefault();
					$(that).find(":checkbox").prop("checked", true);
				});

				$("<a/>", {
				    class: "sa-selector sa-de-select-all " + this.settings.buttonExtraClasses,
				    "href": "#",
				    title: "Select All Options",
				    text: this.settings.buttonDeSelectText
				})
				.prepend($(this.settings.buttonDeSelectBeforeHTML))
				.append($(this.settings.buttonDeSelectAfterHTML))
				.appendTo($buttonWrapper).on("click", function(event) {
					event.preventDefault();
					$(that).find(":checkbox").prop("checked", false);
				});


			}
		} );

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function( options ) {
			return this.each( function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
					$.data( this, "plugin_" +
						pluginName, new Plugin( this, options ) );
				}
			} );
		};

} )( jQuery, window, document );
