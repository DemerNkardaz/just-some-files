$.fn.isdrag = function(options) {
	var isMouseDown = false,
		isResizing = false,
		currentElement = null,
		offset = { x: 0, y: 0 },
		prevPosition = { x: 0, y: 0 },
		container = (options && options.container ? $(options.container) : null);

	this.on('mousedown', function(e) {
		if ($(e.target).css('resize') === 'both' || $(e.target).css('resize') === 'horizontal' || $(e.target).css('resize') === 'vertical' || $(e.target).css('resize') === 'block') {
		isResizing = true; 
		return;
	}
	var target = document.elementFromPoint(e.clientX, e.clientY);
		if (
			$(e.target).is('input, textarea') ||
			((target.tagName === "SPAN" || target.tagName === "LABEL") &&
				target.innerText.trim() !== "" &&
				!target.closest('.forceDrag'))
		) {
			return;
		}
		isMouseDown = true;
		currentElement = $(this);
		var position = currentElement.position();
		offset = {
			x: e.pageX - position.left,
			y: e.pageY - position.top
		};
		prevPosition = { x: e.pageX, y: e.pageY };
	});

	$(document).on('mouseup', function() {
		isMouseDown = false;
		currentElement = null;
		isResizing = false;
	});

	$(document).on('mousemove', function(e) {
		if (isMouseDown && !isResizing) {
			var dx = e.pageX - prevPosition.x;
			var dy = e.pageY - prevPosition.y;
			prevPosition = { x: e.pageX, y: e.pageY };
			if (container) {
				var containerWidth = container.width();
				var containerHeight = container.height();
				var elementWidth = currentElement.width();
				var elementHeight = currentElement.height();
				var left = Math.min(
					Math.max(e.pageX - offset.x, 0),
					containerWidth - elementWidth
				);
				var top = Math.min(
				Math.max(e.pageY - offset.y, 0),
				containerHeight - elementHeight
				);
				currentElement.css({
				left: left,
				top: top
				});
			} else {
				currentElement.css({
					left: e.pageX - offset.x,
					top: e.pageY - offset.y
				});
			}
		}
	});
};