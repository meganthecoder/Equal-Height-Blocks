/**
 * Equal Height Masonry Feed - for making feed blocks equal heights per row
 *
 * Author:        Megan Thomas (meganthecoder)
 * Version:       1.0
 * Last revision: August 13, 2017
 * Website:    	  meganthecoder.com
 */

$(function() {

	// Find number of blocks per row and pixel of mobile step
	function doEqualHeights() {
		var class_list = $('.equal-heights-container > *:first-child').attr('class').split(/\s+/);
		var mobile = 1200;
		var blocks_per_row = 2;
		var window_width = $(window).width();
		var ceiling = 0;

		// Find the largest breakpoint
		$.each(class_list, function() {
			var class_parts = this.split('-');
		  	var grid = class_parts[1];
		  	if ( grid == 'sm' && ceiling < 1 ) {
				ceiling = 1;
			} else if ( grid == 'md' && ceiling < 2 ) {
				ceiling = 2;
			} else if ( grid == 'lg' && ceiling < 3 ) {
				ceiling = 3;
			}
		});

		// Determine the number of blocks per row
		$.each(class_list, function() {
			var class_parts = this.split('-');
		  	var grid = class_parts[1];
		  	var size = class_parts[2];
			if (class_parts[0] == 'col') {
			    if (Math.floor(grid) == grid && $.isNumeric(grid) && (window_width < 576 || ceiling == 0) ) {
		      		mobile = 0;
			    	blocks_per_row = 12 / grid;
			    } else if (grid == 'sm' && window_width >= 576 && (window_width < 768 || ceiling == 1) ) {
			        mobile = 575;
				    if (Math.floor(size) == size && $.isNumeric(size)) {
				      blocks_per_row = 12 / size;
				    }
			    } else if (grid == 'md' && window_width >= 768 && (window_width < 992 || ceiling == 2) ) {
			        mobile = 767;
			      	if (Math.floor(size) == size && $.isNumeric(size)) {
				      blocks_per_row = 12 / size;
				    }
			    } else if (grid == 'lg' && window_width >= 992 ) {
			        mobile = 991;
			      	if (Math.floor(size) == size && $.isNumeric(size)) {
				      blocks_per_row = 12 / size;
				    }
			    }
			}
		});
		// Do the Equal Heights Computing
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
	}
	doEqualHeights();


});