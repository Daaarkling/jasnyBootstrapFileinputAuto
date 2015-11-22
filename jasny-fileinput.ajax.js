(function ($, undefined) {

	$.nette.ext('jasny', {
		complete: function () {
			
			$('input[data-fia-auto="true"]').each(function () {
				
				// it's been already transformed?
				if($(this).parent().prop('nodeName') !== 'SPAN'){
						
					var settings = {
						width: $(this).data('fia-width'),
						height: $(this).data('fia-height'),
						btnSelect: $(this).data('fia-select'),
						btnRemove: $(this).data('fia-remove'),
						btnChange: $(this).data('fia-change'),
						thumbnail: $(this).data('fia-thumbnail'),
						defaultImage: "",
						message: $(this).data('fia-message')
					};
					$(this).fileinputAuto(settings);
					
				}
			});
			
		}
	});

})(jQuery);
