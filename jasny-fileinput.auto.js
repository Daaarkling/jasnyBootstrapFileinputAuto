/**
 * JASNY BOOTSTRAP FILE INPUT AUTO
 *
 * https://github.com/Daaarkling/jasnyBootstrapFileinputAuto
 * http://jasny.github.com/bootstrap/javascript/#fileinput
 * http://getbootstrap.com
 *
 * @author Jan Vaňura (Darkling)
 * @license MIT
 * @version 1.0
 */
(function ($) {

	$.fn.fileinputAuto = function (options) {

		var settings = $.extend({
			width: 300,
			height: 300,
			btnSelect: "Select image",
			btnRemove: "Remove",
			btnChange: "Change",
			thumbnail: true,
			defaultImage: '',
			message: 'No image'
		}, options);

		return this.each(function () {

			var $elem = $(this);
			var input = $('<div>').append($elem.eq(0).clone()).html();
			var thumbnail;

			if (settings.thumbnail && settings.defaultImage){
				thumbnail = '<img src="' + settings.defaultImage + '">';			
			}
			else if (settings.thumbnail) {
				thumbnail = '<img src="http://fakeimg.pl/' + settings.height + 'x' + settings.width + '/?text=' + settings.message + '">';			
			} 
			else {
				thumbnail = '<span style="line-height:' + settings.height + 'px; text-align: center; font-weight: bold; font-size: 23px;">' + settings.message + '</span>';		
			}

			$elem.replaceWith('\
					<div class="fileinput fileinput-new" data-provides="fileinput">\n\
						<div class="fileinput-new thumbnail" style="width:' + settings.width + 'px; height:' + settings.height + 'px;">\n\
							' + thumbnail + ' \n\
						</div>\n\
					<div class="fileinput-preview fileinput-exists thumbnail" style="max-width: ' + settings.width + 'px; max-height: ' + settings.height + 'px;"></div>\n\
					<div>\n\
						<span class="btn btn-default btn-file">\n\
						<span class="fileinput-new">' + settings.btnSelect + '</span>\n\
						<span class="fileinput-exists">' + settings.btnChange + '</span>' + input + '</span>\n\
						<a href="#" class="btn btn-default fileinput-exists" data-dismiss="fileinput">' + settings.btnRemove + '</a>\n\
					</div>\n\
				</div>'
			);

		});
	};
	
	
	$('input[data-fia-auto="true"]').each(function () {
		var settings = {
			width: $(this).data('fia-width'),
			height: $(this).data('fia-height'),
			btnSelect: $(this).data('fia-select'),
			btnRemove: $(this).data('fia-remove'),
			btnChange: $(this).data('fia-change'),
			thumbnail: $(this).data('fia-thumbnail'),
			defaultImage: $(this).data('fia-image'),
			message: $(this).data('fia-message')
		};
		$(this).fileinputAuto(settings);
	});
	

}(jQuery));