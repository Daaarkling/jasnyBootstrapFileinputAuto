/**
 * JASNY BOOTSTRAP FILE INPUT AUTO
 *
 * https://github.com/Daaarkling/jasnyBootstrapFileinputAuto
 * http://jasny.github.com/bootstrap/javascript/#fileinput
 * http://getbootstrap.com
 *
 * @author Jan Vaňura (Darkling)
 * @license MIT
 * @version 2.0
 */
(function ($) {

	$.fn.fileinputAuto = function (options) {

		var settings = $.extend({
			btnSelect: "Select image",
			btnRemove: "Remove",
			btnChange: "Change",
			thumbnail: false,
			width: 300,
			height: 300,
			defaultImage: '',
			fakeimg: false,
			message: 'No image'
		}, options);

		return this.each(function () {

			var $elem = $(this);
			var input = $('<div>').append($elem.eq(0).clone()).html();
			var thumbnail;

			if (settings.thumbnail) {

				if (settings.defaultImage) {
					thumbnail = '<img src="' + settings.defaultImage + '">';
				}
				else if (settings.fakeimg) {
					thumbnail = '<img src="http://fakeimg.pl/' + settings.width + 'x' + settings.height + '/?text=' + settings.message + '">';
				}
				else {
					thumbnail = '<span style="line-height:' + settings.height + 'px; text-align: center; font-weight: bold; font-size: 23px;">' + settings.message + '</span>';
				}

				$elem.replaceWith('<div class="fileinput fileinput-new" data-provides="fileinput"><div class="fileinput-new thumbnail" style="width:' + settings.width + 'px; min-height:' + settings.height + 'px;">' + thumbnail + '</div><div class="fileinput-preview fileinput-exists thumbnail" style="max-width: ' + settings.width + 'px; max-height: ' + settings.height + 'px;"></div><div><span class="btn btn-default btn-file"><span class="fileinput-new">' + settings.btnSelect + '</span><span class="fileinput-exists">' + settings.btnChange + '</span>' + input + '</span><a href="#" class="btn btn-default fileinput-exists" data-dismiss="fileinput">' + settings.btnRemove + '</a></div></div>');
			} 
			else {
				$elem.replaceWith('<div class="fileinput fileinput-new" data-provides="fileinput"><span class="btn btn-default btn-file"><span class="fileinput-new">' + settings.btnSelect + '</span><span class="fileinput-exists">' + settings.btnChange + '</span>' + input + '</span><span class="fileinput-filename"></span><a href="#" class="close fileinput-exists" data-dismiss="fileinput" style="float: none">&times;</a></div>');
			}

		});
	};


	$('input[data-fia-auto="true"]').each(function () {
		var settings = {
			btnSelect: $(this).data('fia-select'),
			btnRemove: $(this).data('fia-remove'),			
			btnChange: $(this).data('fia-change'),			
			thumbnail: $(this).data('fia-thumbnail'),
			width: $(this).data('fia-width'),
			height: $(this).data('fia-height'),
			defaultImage: $(this).data('fia-image'),
			fakeimg: $(this).data('fia-fakeimg'),
			message: $(this).data('fia-message')
		};
		$(this).fileinputAuto(settings);
	});


}(jQuery));