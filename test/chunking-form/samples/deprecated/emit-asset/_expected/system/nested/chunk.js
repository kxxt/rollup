System.register(['../main.js'], function (exports, module) {
	'use strict';
	var showImage;
	return {
		setters: [function (module) {
			showImage = module.s;
		}],
		execute: function () {

			var logo = new URL('../assets/logo2-6d5979e4.svg', module.meta.url).href;

			showImage(logo);

		}
	};
});
