/**
 * Equal Height Masonry Feed - for making feed blocks equal heights per row
 *
 * Author:        Megan Thomas (meganthecoder)
 * Version:       1.0
 * Last revision: August 13, 2017
 * Website:    	  meganthecoder.com
 */

(function($){
	$(document).ready(function() {

		// Find number of blocks per row and pixel of mobile step
		var class_list = $('.equal-heights-container > *:first-child').attr('class').split(/\s+/);
		var mobile = 1200;
		var blocks_per_row = 2;
		$.each(class_list, function() {
			var class_parts = this.split('-');
		  	var grid = class_parts[1];
		  	var size = class_parts[2];
			if (class_parts[0] == 'col') {
			    if (grid == 'xs') {
			      mobile = 479;
			    } else if (mobile > 479 && grid == 'sm') {
			      mobile = 767;
			    } else if (mobile > 767 && grid == 'md') {
			      mobile = 991;
			    }
			    if (Math.floor(size) == size && $.isNumeric(size)) {
			      blocks_per_row = 12 / size;
			    }
			}
		});

		// Do the Equal Heights Computing
		var window_width = $(window).width();
		if ( $(".equal-heights-container").length > 0 && window_width > mobile) {
			var tallest_by_row = [0];
			var this_height = 0;
			var current_row = 0;

			// Find the tallest block height for each row
			$('.equal-heights-container .block').each(function(index) {
			    this_height = $(this).height();
			    if (this_height > tallest_by_row[current_row]) {
			      tallest_by_row[current_row] = this_height;
			    }

			    // If we're at the end of the row, move to next row
			    if ((index + 1) % blocks_per_row === 0) {
			      current_row++;
			      tallest_by_row.push(0);
			    }
			});

			// Set unique heights per row
		  	var current_row = 0;
			$('.equal-heights-container .block').each(function(index) {
			    var row_height = tallest_by_row[current_row];
			    $(this).height(row_height);

			    // If we're at the end of the row, move to next row
			    if ((index + 1) % blocks_per_row === 0) {
			      current_row++;
			    }
			});
		}

	});
})(jQuery);